import React, { useState, useEffect, createRef } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Platform,
} from "react-native";
import Animated, {
  Clock,
  useCode,
  interpolate,
  Easing,
  Value,
  set,
  startClock,
  clockRunning,
  stopClock,
  cond,
  block,
  not,
  timing as retiming,
} from "react-native-reanimated";
import debounce from "lodash/debounce";

export const theme = {
  TEXT_INPUT_ACTIVE_COLOR: "#066acf",
  TEXT_INPUT_ACTIVE_LABEL_COLOR: "#0b78e6",
  PRIMARY_BACKGROUND_COLOR: "#fff",
  SECONDARY_TEXT_COLOR: "#8a8a8a",
  TEXT_INPUT_TEXT_COLOR: "#2b2b2b",
  TEXT_INPUT_DEFAULT_COLOR: "#8a8a8a",
  TEXT_INPUT_ERROR_COLOR: "#eb452f",
  TEXT_INPUT_BORDER_RADIUS: 4,
  TEXT_INPUT_BORDER_DEFAULT_WIDTH: 1,
};

export const timing = (params) => {
  const { clock, easing, duration, from, to } = {
    clock: new Clock(),
    easing: Easing.linear,
    duration: 250,
    from: 0,
    to: 1,
    ...params,
  };

  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    toValue: new Value(0),
    duration,
    easing,
  };

  return block([
    onInit(clock, [set(config.toValue, to), set(state.frameTime, 0)]),
    animate({
      clock,
      fn: retiming,
      state,
      config,
      from,
    }),
  ]);
};

export const animate = ({ fn, clock, state, config, from }) =>
  block([
    onInit(clock, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, from),
      startClock(clock),
    ]),
    fn(clock, state, config),
    cond(state.finished, stopClock(clock)),
    state.position,
  ]);

export const onInit = (clock, sequence) =>
  cond(not(clockRunning(clock)), sequence);

const onExecution = (e, innerFunc, outerFunc) => {
  innerFunc && innerFunc(e);
  outerFunc && outerFunc(e);
};

const getAndoridExtraPadding = (_textInputFontSize) => {
  if (Platform.OS === "android") {
    let defaultPadding = 6;
    if (_textInputFontSize < 14) {
      defaultPadding = defaultPadding + (14 - _textInputFontSize);
    }
    return defaultPadding;
  }
  return 0;
};

const getLabelPositions = (style, labelStyle) => {
  const height =
    style?.height ||
    (style?.paddingTop || 0) + (style?.paddingBottom || 0) ||
    style?.padding ||
    0;
  const textInputFontSize = style?.fontSize || 13;
  const labelFontSize = labelStyle?.fontSize || 13;
  const fontSizeDiff = textInputFontSize - labelFontSize;
  let unfocused, focused;

  unfocused =
    height * 0.5 +
    fontSizeDiff * (Platform.OS === "android" ? 0.5 : 0.6) +
    getAndoridExtraPadding(textInputFontSize);
  focused = -labelFontSize * 0.5;
  return [unfocused, focused];
};

const CustomInput = ({
  error,
  errorColor = theme.TEXT_INPUT_ERROR_COLOR,
  errorTextStyle,
  textInputStyle,
  labelTextStyle,
  containerStyle,
  isKeyboardInput = true,
  editable = true,
  value = "",
  label = "",
  labelTextColor = "",
  activeColor = theme.TEXT_INPUT_ACTIVE_COLOR,
  activeLabelColor = theme.TEXT_INPUT_ACTIVE_LABEL_COLOR,
  onPress = () => {},
  onFocus,
  onBlur,
  ...props
}) => {
  const [focusedLabel, _onFocusLabel] = useState(!!value);
  const [focused, _onFocusTextInput] = useState(!!value);
  const inputRef = createRef(null);
  const [animation, _] = useState(new Value(focusedLabel ? 1 : 0));
  const clock = new Clock();
  const debouncedOnFocusTextInput = debounce(_onFocusLabel, 500, {
    leading: true,
    trailing: false,
  });

  useCode(
    () =>
      set(
        animation,
        timing({
          clock,
          animation,
          duration: 150,
          from: focusedLabel ? 0 : 1,
          to: focusedLabel ? 1 : 0,
          easing: Easing.linear,
        })
      ),
    [focusedLabel]
  );

  useEffect(() => {
    if (!focusedLabel && value) {
      debouncedOnFocusTextInput(true);
    }
    if (focusedLabel && !value) {
      debouncedOnFocusTextInput(false);
    }
  }, [value]);

  const focusStyle = {
    top: interpolate(animation, {
      inputRange: [0, 1],
      outputRange: [
        ...getLabelPositions(
          textInputStyle || styles.textInput,
          labelTextStyle || styles.label
        ),
      ],
    }),
    fontSize: interpolate(animation, {
      inputRange: [0, 1],
      outputRange: [16, 13],
    }),
    backgroundColor: focusedLabel
      ? theme.PRIMARY_BACKGROUND_COLOR
      : "transparent",
    color: labelTextColor || theme.SECONDARY_TEXT_COLOR,
  };

  const shouldShowError = !focused && error && errorColor;
  let textInputColorStyles;
  let labelColorStyles;

  if (focused) {
    textInputColorStyles = { borderColor: activeColor };
    labelColorStyles = { color: activeLabelColor };
  } else if (shouldShowError) {
    textInputColorStyles = { borderColor: errorColor };
  }

  return (
    <>
      <TouchableOpacity
        style={[styles.container, containerStyle]}
        onPress={!isKeyboardInput && editable ? onPress : null}
        activeOpacity={!isKeyboardInput && editable ? 0.2 : 1}
      >
        {
          <Animated.Text
            style={[styles.label, focusStyle, labelTextStyle, labelColorStyles]}
            onPress={() => {
              !focused ? inputRef?.current?.focus() : null;
            }}
          >
            {label}
          </Animated.Text>
        }
        <TextInput
          underlineColorAndroid={"rgba(0,0,0,0)"}
          {...props}
          editable={isKeyboardInput && editable}
          style={[styles.textInput, textInputStyle, textInputColorStyles]}
          placeholder=""
          placeholderTextColor="transparent"
          value={value}
          pointerEvents={isKeyboardInput ? "auto" : "none"}
          onFocus={(e) =>
            onExecution(
              e,
              () => {
                _onFocusLabel(true);
                _onFocusTextInput(true);
              },
              onFocus
            )
          }
          onBlur={(e) =>
            onExecution(
              e,
              () => {
                _onFocusLabel(!!value);
                _onFocusTextInput(false);
              },
              onBlur
            )
          }
          ref={inputRef}
        />
        {!focused && error ? (
          <Text
            style={[styles.errorText, { color: errorColor }, errorTextStyle]}
          >
            {error}
          </Text>
        ) : null}
      </TouchableOpacity>
    </>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginVertical: 5,
  },
  textInput: {
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 15,
    color: theme.TEXT_INPUT_TEXT_COLOR,
    borderColor: theme.TEXT_INPUT_DEFAULT_COLOR,
    borderRadius: theme.TEXT_INPUT_BORDER_RADIUS,
    borderWidth: theme.TEXT_INPUT_BORDER_DEFAULT_WIDTH,
  },
  label: {
    position: "absolute",
    left: 15,
    fontSize: 16,
    zIndex: 1,
  },
  errorText: {
    fontSize: 13,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});
