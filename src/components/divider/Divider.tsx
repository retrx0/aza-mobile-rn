import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { View } from "../Themed";

const Divider = () => {
  const colorScheme = useColorScheme();

  return (
    <View
      style={{
        backgroundColor: "transparent",
        borderBottomWidth: 0.6,
        borderBottomColor: colorScheme === "dark" ? "#262626" : "#EAEAEC",
      }}
    />
  );
};

export default Divider;
