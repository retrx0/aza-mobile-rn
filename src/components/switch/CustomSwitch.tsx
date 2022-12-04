import React from "react";
import { Switch } from "react-native";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";

interface IProps {
  isEnabled: boolean;
  onSwitchToggle: () => void;
}

const CustomSwitch = ({ isEnabled, onSwitchToggle }: IProps) => {
  const colorScheme = useColorScheme();

  const switchColor = Colors[colorScheme].backgroundSecondary;
  const switchOnColor = Colors[colorScheme].success;

  return (
    <Switch
      trackColor={{ false: switchColor, true: switchOnColor }}
      thumbColor={isEnabled ? "white" : "grey"}
      ios_backgroundColor={switchColor}
      onValueChange={onSwitchToggle}
      value={isEnabled}
      style={{ transform: [{ scaleX: 1 }, { scaleY: 0.9 }] }}
    />
  );
};

export default CustomSwitch;
