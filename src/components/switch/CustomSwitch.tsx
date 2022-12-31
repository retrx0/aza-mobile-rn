import React from "react";
import { Switch } from "react-native";
import Colors from "../../constants/Colors";

interface IProps {
  isEnabled: boolean;
  onSwitchToggle: () => void;
}

const CustomSwitch = ({ isEnabled, onSwitchToggle }: IProps) => {
  return (
    <Switch
      trackColor={{
        false: Colors.general.grey,
        true: Colors.general.green,
      }}
      thumbColor={isEnabled ? "white" : "grey"}
      onValueChange={onSwitchToggle}
      value={isEnabled}
      style={{ transform: [{ scaleX: 1 }, { scaleY: 0.9 }] }}
    />
  );
};

export default CustomSwitch;
