import { Dropdown } from "react-native-element-dropdown";
import React from "react";
import { ChevronRightIcon } from "../../../assets/svg";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { View as View, Text as Text } from "../../theme/Themed";
import { StyleProp, TextStyle } from "react-native";
import { hp } from "../../common/util/LayoutUtil";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { getAppTheme } from "../../theme";
import { useAppSelector } from "../../redux";
import { selectAppTheme } from "../../redux/slice/themeSlice";

interface IProps {
  data: Array<{
    label: string;
    value: string | number;
  }>;

  value: string;
  setValue: (value: string | number) => void;
  placeholder: string;
  placeholderstyle?: StyleProp<TextStyle>;
  label: string;

  style?: StyleProp<TextStyle>;
}

const CustomDropdown = ({
  data,
  value,
  setValue,
  placeholder,
  label,
  style,
}: IProps) => {
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));

  return (
    <>
      <Text
        style={{
          fontFamily: "Euclid-Circular-A",
          fontWeight: "400",
          fontSize: hp(16),
          marginBottom: 3,
        }}
      >
        {label}
      </Text>

      <Dropdown
        style={{
          borderBottomWidth: 0.6,
          borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",
        }}
        placeholderStyle={[
          {
            color: appTheme === "dark" ? "#545454" : "#A6A6A6",
          },
          { fontSize: 16 },
          { fontFamily: "Euclid-Circular-A" },
          style,
        ]}
        selectedTextStyle={[
          {
            color: appTheme === "dark" ? "#A6A6A6" : "#A6A6A6",
            fontSize: 14,
          },
        ]}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        activeColor="transparent"
        containerStyle={{
          backgroundColor: appTheme === "dark" ? "#3A3D42" : "white",
          paddingHorizontal: 15,
          borderRadius: 10,
          borderWidth: 0,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.3,
          shadowRadius: 10,
          elevation: 5,
        }}
        itemContainerStyle={{
          borderBottomWidth: 1,
          paddingVertical: 15,
          borderBottomColor: appTheme === "dark" ? "#484B51" : "#EAEAEC",
        }}
        renderItem={(item) => (
          <View
            style={[
              {
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: Colors[appTheme].BACKGROUND,
              },
            ]}
          >
            <Text
              style={{
                fontSize: 14,
              }}
            >
              {item.label}
            </Text>
          </View>
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
    </>
  );
};

export default CustomDropdown;
