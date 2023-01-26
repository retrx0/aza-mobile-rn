import SkeletonContent from "react-native-skeleton-content";
import Colors from "../../constants/Colors";
import { useAppSelector } from "../../redux";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import { getAppTheme } from "../../theme";

export const PaymentRoundSkeleton = () => {
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));

  return (
    <SkeletonContent
      containerStyle={{ flex: 1, width: "95%", margin: 10 }}
      animationDirection="verticalDown"
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
      ]}
    />
  );
};
