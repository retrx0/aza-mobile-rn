import {
  Image,
  LayoutAnimation,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  SharedValue,
  interpolateColor,
  FadeInRight,
  FadeOutRight,
} from "react-native-reanimated";

import { Text, View } from "../../../../theme/Themed";

import Colors from "../../../../constants/Colors";

import { useAppSelector } from "../../../../redux";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../../theme";

import { ChevronRightIcon } from "../../../../../assets/svg";

interface IProps {
  index: number;
  scaleAnimation: SharedValue<number>;
  offset: SharedValue<number>;
  setNotificationsOpen: (isOpen: boolean) => void;
  isNotificationsOpen: boolean;
  clearNotifications: () => void;
  data: {
    date: string;
    title: string;
    image: string;
    detail: string;
  };
}

const NotificationItem = ({
  data,
  scaleAnimation,
  offset,
  index,
  isNotificationsOpen,
  setNotificationsOpen,
  clearNotifications,
}: IProps) => {
  const selectedTheme = useAppSelector(selectAppTheme);
  const appTheme = getAppTheme(selectedTheme);
  const animatedStyles = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      scaleAnimation.value,
      [0.8, 1],
      [Colors[appTheme].backgroundSecondary, Colors[appTheme].background]
    );
    if (index !== 0) {
      return {
        transform: [
          { translateY: offset.value },
          { scale: scaleAnimation.value },
        ],
        opacity: scaleAnimation.value,
        backgroundColor,
      };
    }
    return {};
  });

  return (
    <View style={{ zIndex: index === 0 ? 1 : -index, position: "relative" }}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          LayoutAnimation.configureNext({
            duration: 200,
            update: { type: "linear" },
          });
          setNotificationsOpen(!isNotificationsOpen);
        }}
      >
        <Animated.View
          exiting={FadeOutRight}
          style={[
            animatedStyles,
            styles.container,
            {
              borderColor:
                index === 0
                  ? Colors[appTheme].secondaryText
                  : isNotificationsOpen && index !== 0
                  ? Colors[appTheme].secondaryText
                  : Colors[appTheme].backgroundSecondary,
            },
          ]}
        >
          <Image
            source={{
              uri: data.image,
            }}
            style={styles.image}
          />
          <View
            style={{
              justifyContent: "space-between",
              backgroundColor: "transparent",
            }}
          >
            <Text
              style={{ fontSize: 12, color: Colors[appTheme].secondaryText }}
            >
              {data.date}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Euclid-Circular-A-Semi-Bold",
              }}
            >
              {data.title}
            </Text>
            <Text
              style={{ fontSize: 14, color: Colors[appTheme].secondaryText }}
            >
              {data.detail}
            </Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
      {index === 0 && isNotificationsOpen && (
        <Animated.View
          entering={FadeInRight}
          exiting={FadeOutRight}
          style={styles.options}
        >
          <TouchableOpacity
            style={[
              styles.delete,
              {
                borderColor: Colors[appTheme].secondaryText,
                backgroundColor: Colors[appTheme].background,
              },
            ]}
            onPress={clearNotifications}
          >
            <Text style={{ color: Colors[appTheme].secondaryText }}>
              Delete All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.chevron,
              {
                borderColor: Colors[appTheme].secondaryText,
                backgroundColor: Colors[appTheme].background,
              },
            ]}
            onPress={() => setNotificationsOpen(false)}
          >
            <ChevronRightIcon
              size={20}
              color={Colors[appTheme].secondaryText}
            />
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
};

export default NotificationItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    borderWidth: 0.5,
    borderRadius: 15,
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 20,
    height: 20,
    borderRadius: 50,
    marginRight: 15,
  },
  options: {
    position: "absolute",
    right: 30,
    top: -15,
    flexDirection: "row",
    backgroundColor: "transparent",
  },
  delete: {
    width: 100,
    height: 30,
    borderRadius: 30,

    borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  chevron: {
    width: 26,
    height: 26,
    borderRadius: 50,
    marginLeft: 10,
    borderWidth: 0.5,

    justifyContent: "center",
    alignItems: "center",
    transform: [{ rotate: "270deg" }],
  },
});
