import { Dropdown } from "react-native-element-dropdown";
import React from "react";
import { ChevronRightIcon } from "../../../assets/svg";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { Text, View } from "../Themed";

interface IProps {
  data: Array<{
    label: string;
    value: string;
  }>;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
}

const CustomDropdown = ({ data, value, setValue, placeholder }: IProps) => {
  const colorScheme = useColorScheme();

  return (
    <Dropdown
      style={{
        borderBottomWidth: 0.6,
        borderBottomColor: Colors[colorScheme].separator,
      }}
      placeholderStyle={{
        color: Colors[colorScheme].secondaryText,
        fontSize: 14,
        fontFamily: "Euclid-Circular-A-Medium",
      }}
      selectedTextStyle={{
        color: colorScheme === "dark" ? "#E7E9EA" : "#000",
      }}
      data={data}
      maxHeight={300}
      labelField="label"
      valueField="value"
      activeColor="transparent"
      containerStyle={{
        backgroundColor: colorScheme === "dark" ? "#3A3D42" : "white",
        paddingHorizontal: 15,
        borderRadius: 10,
        borderWidth: 0,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
      }}
      itemContainerStyle={{
        borderBottomWidth: 1,
        paddingVertical: 15,
        borderBottomColor: colorScheme === "dark" ? "#484B51" : "#EAEAEC",
      }}
      renderItem={(item) => (
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontSize: 14,
          }}>
          {item.label}
        </Text>
      )}
      placeholder={placeholder}
      value={value}
      onChange={(item) => {
        setValue(item.value);
      }}
      renderRightIcon={() => (
        <View style={{ transform: [{ rotate: "90deg" }] }}>
          <ChevronRightIcon color={"#2A9E17"} size={20} />
        </View>
      )}
    />
  );
};

export default CustomDropdown;
