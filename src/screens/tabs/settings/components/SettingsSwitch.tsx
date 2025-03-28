import CommonStyles from "../../../../common/styles/CommonStyles";
import { hp } from "../../../../common/util/LayoutUtil";
import Divider from "../../../../components/divider/Divider";
import CustomSwitch from "../../../../components/switch/CustomSwitch";
import { View as View, Text as Text } from "../../../../theme/Themed";

interface ISwitch {
  text: string;
  isEnabled: boolean;
  onSwitchToggle: () => void;
}

const SettingsSwitch = ({ text, isEnabled, onSwitchToggle }: ISwitch) => {
  return (
    <>
      <View
        style={[
          CommonStyles.row,
          {
            justifyContent: "space-between",
            alignSelf: "stretch",
            paddingVertical: 30,
            alignItems: "center",
          },
        ]}
      >
        <Text
          style={{
            fontSize: hp(16),
            fontFamily: "Euclid-Circular-A",
            marginLeft: hp(5),
            fontWeight: "500",
          }}
        >
          {text}
        </Text>
        <CustomSwitch isEnabled={isEnabled} onSwitchToggle={onSwitchToggle} />
      </View>
      <Divider />
    </>
  );
};

export default SettingsSwitch;
