import { TouchableOpacity } from "react-native";
import { ArrowRightIcon } from "../../../assets/svg";
import { hp } from "../../common/util/LayoutUtil";
import Colors from "../../constants/Colors";
import { useAppSelector } from "../../redux";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import { getAppTheme } from "../../theme";
import { View, Text } from "../../theme/Themed";
import * as Haptics from "expo-haptics";

interface IProps {
  value: string;
  setValue: (value: string) => void;
  maxLength: number;
  withComma?: boolean;
  allowZeroAsFirstCharacter?: boolean;
  isLoading?: boolean;
}

const VirtualKeyboard = ({
  value,
  setValue,
  maxLength,
  withComma,
  allowZeroAsFirstCharacter,
  isLoading,
}: IProps) => {
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));

  const onKeyPress = (key: string) => {
    Haptics.selectionAsync();
    let currentText = value;
    if (key === "0" && allowZeroAsFirstCharacter) {
      currentText += key;
      setValue(currentText);
      return;
    }

    if ((value === "" && key === "0") || (value === "" && key === ",")) {
      //prevents '0' and ',' as first characters
      return;
    }

    if (key !== "backIcon") {
      if (currentText.length <= maxLength) {
        currentText += key;
        setValue(currentText);
      }
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
        disabled={isLoading}
        style={{
          flex: 1,
          justifyContent: "center",
          padding: 2,
        }}
      >
        {key === "backIcon" ? (
          !isLoading && (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                transform: [{ rotate: "180deg" }],
              }}
            >
              <ArrowRightIcon
                style={{ backgroundColor: "transparent" }}
                color={
                  appTheme === "dark" ? Colors.dark.mainText : Colors.light.text
                }
                size={24}
              />
            </View>
          )
        ) : (
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Semi-Bold",
              fontSize: hp(24),
              padding: 10,
              textAlign: "center",
              color: isLoading
                ? Colors[appTheme].secondaryText
                : Colors[appTheme].text,
            }}
          >
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
          marginTop: 15,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {cells}
      </View>
    );
  };
  return (
    <View style={{ width: "100%" }}>
      {makeRow(["1", "2", "3"])}
      {makeRow(["4", "5", "6"])}
      {makeRow(["7", "8", "9"])}

      {withComma
        ? makeRow([",", "0", "backIcon"])
        : makeRow(["", "0", "backIcon"])}
    </View>
  );
};

export default VirtualKeyboard;
