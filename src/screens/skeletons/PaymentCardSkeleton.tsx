import React from "react";
import Skeleton from "react-native-skeleton-content";
import Colors from "../../constants/Colors";
import { useAppSelector } from "../../redux";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import { getAppTheme } from "../../theme";

const PaymentCardSkeleton = () => {
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));

  return (
    <Skeleton
      containerStyle={{ flex: 1, width: "100%" }}
      animationDirection="horizontalLeft"
      isLoading={true}
      animationType="pulse"
      boneColor={Colors[appTheme].backgroundSecondary}
      highlightColor={Colors[appTheme].highlightColor}
      layout={[
        {
          key: "1",
          width: "100%",
          height: 70,
          marginBottom: 20,
          borderRadius: 10,
        },
        {
          key: "2",
          width: "100%",
          height: 70,
          marginBottom: 20,
          borderRadius: 10,
        },
        {
          key: "3",
          width: "100%",
          height: 70,
          marginBottom: 20,
          borderRadius: 10,
        },
        {
          key: "4",
          width: "100%",
          height: 70,
          marginBottom: 20,
          borderRadius: 10,
        },
      ]}
    />
  );
};

export default PaymentCardSkeleton;
