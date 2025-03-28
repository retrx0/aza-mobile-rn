import { Image, Keyboard, TouchableOpacity } from "react-native";
import { RootTabScreenProps } from "../../../../types/types.navigation";
import Button from "../../../../components/buttons/Button";
import { View, Text } from "../../../../theme/Themed";

import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { hp } from "../../../../common/util/LayoutUtil";
import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BackButton from "../../../../components/buttons/BackButton";
import CancelButtonWithUnderline from "../../../../components/buttons/CancelButtonWithUnderline";
import { UnderlinedInput } from "../../../../components/input/UnderlinedInput";
import CustomSwitch from "../../../../components/input/CustomSwitch";
import { useState } from "react";
import { AIrtimeStyles as styles } from "../../payments/airtime-screens/styles";
import { useAppSelector } from "../../../../redux";
import { selectUser } from "../../../../redux/slice/userSlice";
import { setEmail } from "../../../../redux/slice/newUserSlice";
import { CommonScreenProps } from "../../../../common/navigation/types";

const GiftCardEmail = ({
  navigation,
  route,
}: CommonScreenProps<"GiftCardEmail">) => {
  const [email, setEmail] = useState("");

  const { emailAddress } = useAppSelector(selectUser);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    setEmail(emailAddress);
    if (!isEnabled) {
      Keyboard.dismiss();
    }
  };

  const insets = useSafeAreaInsets();

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: hp(30),
          }}
        >
          <View style={{ marginLeft: 20 }}>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Bold",
              fontSize: hp(16),
              fontWeight: "500",
              marginLeft: hp(80),
            }}
          >
            Email Address
          </Text>
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <Text
            style={{
              fontSize: hp(16),
              fontWeight: "500",
              marginBottom: hp(40),
              fontFamily: "Euclid-Circular-A-Medium",
            }}
          >
            Enter your email address to get your digital code
          </Text>
        </View>
        <View style={{ paddingHorizontal: hp(20) }}>
          <UnderlinedInput
            icon={null}
            keyboardType="default"
            inputStyle={[styles.input]}
            labelStyle={styles.label}
            style={{ marginTop: hp(10) }}
            label="Enter Email Address"
            placeholder="Type your email address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <CustomSwitch
            title="My email"
            onValueChange={toggleSwitch}
            isEnabled={isEnabled}
          />
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}
        >
          <Button
            title="Continue"
            onPressButton={() =>
              // FIXME
              // TODO please fix the below code to have real data!
              navigation.navigate("GiftCardConfirmation", {
                giftCard: {
                  productId: 1,
                  productName: "",
                  selectedPrice: "0",
                  logoUrls: [],
                  senderFee: "0",
                  fixedSenderDenominations: [],
                  redeemInstruction: { concise: "", verbose: "" },
                  recipientCurrencyCode: "",
                  maxRecipientDenomination: "",
                  minRecipientDenomination: "",
                  fixedRecipientDenominations: [],
                  fixedRecipientToSenderDenominationsMap: { "1.00": "740.00" },
                  global: false,
                  country: {
                    isoName: "NGN",
                    name: "Nigeria",
                    currencyCode: "NGN",
                    currencyName: "Naira",
                    flagUrl: "",
                  },
                  brand: { brandId: 0, brandName: "" },
                },
              })
            }
            styleText={{}}
            style={[CommonStyles.button]}
            disabled={false}
          />
          <CancelButtonWithUnderline
            title="Cancel Transaction"
            onPressButton={() => {
              navigation.goBack();
            }}
            style={{ borderBottomColor: Colors.general.red }}
            styleText={CommonStyles.cancelStyle}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default GiftCardEmail;
