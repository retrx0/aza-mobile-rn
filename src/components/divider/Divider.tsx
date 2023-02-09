import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { View, Text } from "../../theme/Themed";
import { useAppSelector } from "../../redux";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import { getAppTheme } from "../../theme";
import { hp, wp } from "../../common/util/LayoutUtil";

const Divider = () => {
  const selectedTheme = useAppSelector(selectAppTheme);
  const appTheme = getAppTheme(selectedTheme);

  return (
    <View
      style={{
        backgroundColor: "transparent",
        marginTop: hp(10),
        borderBottomWidth: 1,
        width: wp(375),
        borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",
        alignSelf: "center",
      }}
    />
  );
};

export default Divider;
