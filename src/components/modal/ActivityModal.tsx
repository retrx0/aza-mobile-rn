import { useEffect } from "react";
import { StyleSheet, Modal } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { AZALargeLightningLogo } from "../../../assets/svg";
import Colors from "../../constants/Colors";
import { useAppSelector } from "../../redux";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import { getAppTheme } from "../../theme";
import { View as View } from "../../theme/Themed";

interface IProps {
  loading: boolean;
}

const ActivityModal = ({ loading }: IProps) => {
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));

  const rotation = useSharedValue(0);
  const scale = useSharedValue(1);
  const opacity = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      opacity: opacity.value,
    };
  });

  useEffect(() => {
    // scale.value = withRepeat(
    //   withSequence(withSpring(1.3), withSpring(1, { damping: 200 })),
    //   200
    // );
    scale.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 0 }),
        withTiming(1.15, { duration: 1300, easing: Easing.linear }),
        withTiming(1, { duration: 30 }),
        withTiming(1.15, { duration: 30, easing: Easing.linear }),
        withTiming(1, { duration: 30 }),
        withTiming(1.15, { duration: 30, easing: Easing.linear }),
        withTiming(1, { duration: 30 }),
        withTiming(1.15, { duration: 30, easing: Easing.linear }),
        withTiming(1, { duration: 30 }),
        withTiming(1.15, { duration: 30, easing: Easing.linear }),
        withTiming(1, { duration: 100 })
      ),
      1000
    );

    opacity.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 0 }),
        withTiming(0.5, { duration: 1300, easing: Easing.linear }),
        withTiming(1, { duration: 30 }),
        withTiming(0.5, { duration: 30, easing: Easing.linear }),
        withTiming(1, { duration: 30 }),
        withTiming(0.5, { duration: 30, easing: Easing.linear }),
        withTiming(1, { duration: 30 }),
        withTiming(0.5, { duration: 30, easing: Easing.linear }),
        withTiming(1, { duration: 30 }),
        withTiming(0.5, { duration: 20, easing: Easing.linear }),
        withTiming(1, { duration: 100 })
      ),
      1000
    );

    // opacity.value = withRepeat(
    //   interpolate(opacity.value, [0, opacity.value], [0, 1]),
    //   5
    // );

    // withSequence(withSpring(1.5), withSpring(1))
    // rotation.value = withRepeat(
    //   withSequence(
    //     withTiming(-5, {
    //       duration: 1000,
    //       easing: Easing.linear,
    //     }),
    //     withTiming(0, {
    //       duration: 1000,
    //       easing: Easing.linear,
    //     }),
    //     withTiming(5, {
    //       duration: 1000,
    //       easing: Easing.linear,
    //     })
    //   ),
    //   200
    // );
    // rotation.value = withSequence(
    //   withTiming(-10, { duration: 50 }),
    //   withRepeat(withTiming(20, { duration: 20 }), 2, true),
    //   withTiming(0, { duration: 100 })
    // );
  }, []);

  return (
    <Modal transparent={true} animationType={"none"} visible={loading}>
      <View style={styles.modalBackground}>
        <View style={[styles.activityIndicatorWrapper]}>
          <Animated.View style={[animatedStyles]}>
            <AZALargeLightningLogo color={Colors[appTheme].mainText} />
          </Animated.View>
          {/* <ActivityIndicator animating={true} /> */}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#00000040",
  },
  activityIndicatorWrapper: {
    height: 80,
    width: 80,
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default ActivityModal;
