import { TouchableOpacity } from "react-native";
import { ArrowRightIcon } from "../../../assets/svg";
import { hp } from "../../common/util/LayoutUtil";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { Text, View } from "../Themed";

interface IProps {
  value: string;
  setValue: (value: string) => void;
}

const VirtualKeyboard = ({ value, setValue }: IProps) => {
  const colorScheme = useColorScheme();

  const onKeyPress = (key: string) => {
    if ((value === "" && key === "0") || (value === "" && key === ",")) {
      //prevents '0' and ',' as first characters
      return;
    }
    let currentText = value;
    if (key !== "backIcon") {
      currentText += key;
      setValue(currentText);
    } else {
      currentText = currentText.slice(0, -1);
      setValue(currentText);
    }
  };

  const makeCell = (key: string, i: number) => {
    return (
      <TouchableOpacity
        key={i}
        onPress={() => onKeyPress(key)}
        style={{
          flex: 1,
          justifyContent: "center",
        }}>
        {key === "backIcon" ? (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              transform: [{ rotate: "180deg" }],
            }}>
            <ArrowRightIcon
              color={
                colorScheme === "dark"
                  ? Colors.dark.mainText
                  : Colors.light.text
              }
              size={24}
            />
          </View>
        ) : (
          <Text
            lightColor={Colors.light.text}
            darkColor={Colors.dark.mainText}
            style={{
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(18),
              padding: 10,
              textAlign: "center",
            }}>
            {key}
          </Text>
        )}
      </TouchableOpacity>
    );
  };
  const makeRow = (keysInRow: Array<string>) => {
    const cells = keysInRow.map((val, i) => makeCell(val, i));
    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: 30,
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        {cells}
      </View>
    );
  };
  return (
    <View style={{ width: "100%" }}>
      {makeRow(["1", "2", "3"])}
      {makeRow(["4", "5", "6"])}
      {makeRow(["7", "8", "9"])}
      {makeRow([",", "0", "backIcon"])}
    </View>
  );
};

export default VirtualKeyboard;
