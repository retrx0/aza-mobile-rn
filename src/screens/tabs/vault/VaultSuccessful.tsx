import { Image } from "react-native";
import Button from "../../../components/buttons/Button";
import { View, Text } from "../../../theme/Themed";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import CommonStyles from "../../../common/styles/CommonStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { hp } from "../../../common/util/LayoutUtil";
import { RootTabScreenProps } from "../../../../types";
import { CommonScreenProps } from "../../../common/navigation/types";

const VaultSuccessful = ({
  navigation,
}: CommonScreenProps<"VaultSuccessful">) => {
  const insets = useSafeAreaInsets();

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        {/* <Image
          source={require("../../../../assets/images/Successful.png")}
          resizeMode="cover"
          style={[CommonStyles.caution]}
        /> */}
        <View style={CommonStyles.actionContainer}>
          <Text style={CommonStyles.Style}>Successful!</Text>
          <Text style={CommonStyles.successStyle}>
            You have successfully locked away {"\u20A62,000"} to Flight Ticket
            vault
          </Text>
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.bottom || hp(45) },
          ]}
        >
          <Button
            title="Continue"
            onPressButton={() => navigation.navigate("UserVault")}
            styleText={{}}
            style={[{}, { bottom: hp(20) }, CommonStyles.button]}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default VaultSuccessful;
