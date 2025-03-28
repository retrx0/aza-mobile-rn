import React from "react";
import { TouchableOpacity } from "react-native";
import { ChevronRightIcon } from "../../../../../assets/svg";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { hp } from "../../../../common/util/LayoutUtil";
import Divider from "../../../../components/divider/Divider";
// import { View, Text } from "../../../../theme/Themed";
//
import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";
import { View as View, Text as Text } from "../../../../theme/Themed";

interface SettingsListItemsProps {
  name: string;
  icon?: JSX.Element;
  detail?: string;
  disabledIcon?: JSX.Element;
  disabled?: boolean;
  handleNavigation: () => void;
}

const SettingsListItem = ({
  icon,
  detail,
  name,
  disabled,
  disabledIcon,
  handleNavigation,
}: SettingsListItemsProps) => {
  const colorScheme = useColorScheme();

  return (
    <>
      <TouchableOpacity
        disabled={disabled}
        onPress={handleNavigation}
        style={[CommonStyles.col, { alignSelf: "stretch" }]}>
        <View
          style={[
            CommonStyles.row,
            {
              alignSelf: "stretch",
              justifyContent: "space-between",
              marginVertical: hp(20),
            },
          ]}>
          <View>{disabled ? disabledIcon : icon}</View>
          <View
            style={[
              CommonStyles.col,
              { marginRight: "auto", marginLeft: icon ? 20 : 0 },
            ]}>
            <Text
              lightColor={
                disabled ? Colors[colorScheme].disabled : Colors.light.text
              }
              darkColor={
                disabled ? Colors[colorScheme].disabled : Colors.dark.mainText
              }
              style={{
                fontSize: hp(18),
                fontFamily: "Euclid-Circular-A-Semi-Bold",
                fontWeight: "500",
              }}>
              {name}
            </Text>
            {detail && (
              <Text
                lightColor={
                  disabled ? Colors[colorScheme].disabled : Colors.light.text
                }
                darkColor={
                  disabled
                    ? Colors[colorScheme].disabled
                    : Colors.dark.secondaryText
                }
                style={{
                  fontSize: hp(13),
                  fontFamily: "Euclid-Circular-A",
                  fontWeight: "400",
                  marginTop: hp(4),
                }}>
                {detail}
              </Text>
            )}
          </View>
          <ChevronRightIcon
            color={disabled ? Colors[colorScheme].disabled : "#2A9E17"}
            size={20}
          />
        </View>
      </TouchableOpacity>
      <Divider />
    </>
  );
};

export default SettingsListItem;
