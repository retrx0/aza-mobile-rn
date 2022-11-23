import {
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import RegularText from "../text/RegularText";
import { SelectIcon } from "../../../assets/svg";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import useColorScheme from "../../hooks/useColorScheme";
import { Text, View } from "../Themed";
import { hp } from "../../common/util/LayoutUtil";

type SelectProps = {
  style: StyleProp<ViewStyle>;
  title: string;
  placeHolder: string;
  items?: any[];
};
export default function SelectInput({
  style,
  title,
  placeHolder,
  items = [],
}: SelectProps) {
  const [selectedItem, setSelectedItem] = useState("");

  const scheme = useColorScheme();
  const scaleValue = useSharedValue(0);
  const listItemStyle = useAnimatedStyle(() => ({
    transform: [{ scaleY: scaleValue.value }, { translateY: 53 }],
  }));

  return (
    <Animated.View style={[styles.container, style]}>
      <RegularText text={title} />
      <TouchableOpacity
        onPress={() => {
          const value = scaleValue.value == 0 ? 1 : 0;
          scaleValue.value = withSpring(value);
          console.log(value);
        }}
        style={styles.selector}>
        <>
          <RegularText
            style={styles.selectorText}
            text={selectedItem == "" ? placeHolder : selectedItem}
          />
          <SelectIcon />
        </>
      </TouchableOpacity>
      <Animated.ScrollView
        style={[
          styles.selectList,
          listItemStyle,
          { backgroundColor: scheme == "light" ? "#ffffff" : "#3A3D42" },
        ]}>
        {items.length > 0 &&
          items.map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                setSelectedItem(item);
                scaleValue.value = withSpring(0);
              }}
              key={index.toString()}
              style={styles.listItem}>
              <Text style={styles.listItemText}>{item}</Text>
            </TouchableOpacity>
          ))}
      </Animated.ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 53,
    backgroundColor: "transparent",
    marginLeft: "auto",
    marginRight: "auto",
    position: "relative",
    width: "100%",
    zIndex: 200,
  },
  // label: {
  //   fontWeight: "400",
  //   fontSize: hp(111),
  //   fontFamily: "Euclid-Circular-A",
  // },
  selector: {
    width: "100%",
    borderBottomColor: "#262626",
    borderBottomWidth: 1,
    height: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: hp(12),
  },
  selectorText: {
    color: "#A6A6A6",
    fontWeight: "500",
  },
  selectList: {
    width: "100%",
    minHeight: 70,
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
      zIndex: 200,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    padding: 10,
    borderRadius: hp(10),
  },
  listItem: {
    height: hp(45),
    borderBottomWidth: 1,
    borderBottomColor: "#484B51",
    justifyContent: "center",
  },
  listItemText: {
    fontWeight: "400",
    fontSize: hp(14),
  },
});
