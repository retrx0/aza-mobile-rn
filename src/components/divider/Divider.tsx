import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { View, Text } from "../../theme/Themed";
import { useAppSelector } from "../../redux";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import { getAppTheme } from "../../theme";
import { hp } from "../../common/util/LayoutUtil";

const Divider = () => {
  const selectedTheme = useAppSelector(selectAppTheme);
  const appTheme = getAppTheme(selectedTheme);

  return (
    <View
      style={{
        backgroundColor: "transparent",
        marginTop: hp(10),
        borderBottomWidth: 0.8,
        borderBottomColor: Colors[appTheme].borderColor,
      }}
    />
  );
};

export default Divider;
