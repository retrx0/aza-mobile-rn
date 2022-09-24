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
        borderBottomColor: Colors[colorScheme].separator,
      }}
    />
  );
};

export default Divider;
