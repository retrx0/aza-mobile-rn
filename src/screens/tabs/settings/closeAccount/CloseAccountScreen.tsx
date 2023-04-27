import React, { useState } from "react";
import { Image, TouchableOpacity } from "react-native";

import { View, Text } from "../../../../theme/Themed";

import Button from "../../../../components/buttons/Button";
import { CancelButtonWithUnderline } from "../../../../components/buttons/CancelButtonWithUnderline";
import Divider from "../../../../components/divider/Divider";

import { CommonScreenProps } from "../../../../common/navigation/types";
import Colors from "../../../../constants/Colors";
import { hp, wp } from "../../../../common/util/LayoutUtil";
import CommonStyles from "../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// import { AccessBank } from "../../../../../assets/images";
import SegmentedInput from "../../../../components/input/SegmentedInput";
import { getAppTheme } from "../../../../theme";
import { useAppSelector } from "../../../../redux";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { selectUser } from "../../../../redux/slice/userSlice";
import { loginUserAPI } from "../../../../api/auth";
import { toastError } from "../../../../common/util/ToastUtil";
import useNavigationHeader from "../../../../hooks/useNavigationHeader";

const CloseAccountScreen = ({
  navigation,
}: CommonScreenProps<"CloseAccountScreen">) => {
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));
  const [selectedCard, setSelectedCard] = useState("");
  const insets = useSafeAreaInsets();
  const [password, setPassword] = useState("");

  const [buttonLoading, setButtonLoading] = useState(false);
  const { bankAccounts, emailAddress, phoneNumber, azaBalance } =
    useAppSelector(selectUser);

  useNavigationHeader(navigation, "Close Account");

  if (azaBalance > 0) {
    return (
      <SpacerWrapper>
        <View style={[CommonStyles.vaultcontainer]}>
          <View style={{ paddingHorizontal: hp(15) }}>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(16),
                marginBottom: hp(30),
                fontWeight: "500",
                paddingLeft: hp(7),
                maxWidth: wp(350),
              }}
            >
              You would need to empty your account first. Choose a bank you wish
              to withdraw your funds to
            </Text>
            <Divider />
            {bankAccounts.data.map(({ bankLogo, bankName }, i) => (
              <View key={i}>
                <TouchableOpacity onPress={() => setSelectedCard(bankName)}>
                  <View
                    style={[
                      CommonStyles.row,
                      { alignSelf: "stretch", paddingVertical: 15 },
                    ]}
                  >
                    <Image
                      source={{ uri: bankLogo }}
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 50,
                      }}
                    />
                    <Text
                      style={{
                        marginLeft: 20,
                        fontFamily: "Euclid-Circular-A",
                        fontSize: hp(16),
                      }}
                    >
                      {bankName}
                    </Text>
                    <View
                      style={{
                        marginLeft: "auto",
                        width: hp(20),
                        height: hp(20),
                        borderRadius: hp(10),
                        borderColor:
                          selectedCard === bankName
                            ? Colors.general.green
                            : "#3A3D42",
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: hp(1),
                      }}
                    >
                      {selectedCard === bankName && (
                        <View style={CommonStyles.doneSelect} />
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
                <Divider />
              </View>
            ))}
          </View>

          <View
            style={[
              CommonStyles.passwordContainer,
              { bottom: insets.bottom || hp(45) },
            ]}
          >
            <Button
              disabled={!selectedCard}
              title="Continue"
              onPressButton={() =>
                navigation.navigate("TransactionKeypad", {
                  headerTitle: "Close Account",
                  transactionType: {
                    transaction: "debit",
                    type: "normal",
                    beneficiary: {
                      accountNumber: "",
                      fullName: "",
                    },
                  },
                })
              }
              styleText={{}}
              style={[]}
            />
            <CancelButtonWithUnderline
              title="Cancel"
              onPressButton={() => navigation.goBack()}
              styleText={CommonStyles.cancelStyle}
              style={{ borderBottomColor: Colors.general.red }}
            />
          </View>
        </View>
      </SpacerWrapper>
    );
  }

  const verifyPassword = async () => {
    setButtonLoading(true);
    await loginUserAPI({
      email: emailAddress,
      phoneNumber: phoneNumber,
      password: password,
    })
      .then((jwt) => {
        if (jwt) navigation.navigate("AccountClosureSurveyScreen");
        else {
          toastError("Password invalid");
        }
        setButtonLoading(false);
      })
      .catch(() => {
        setButtonLoading(false);
        toastError("Password invalid");
      });
  };

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontSize: hp(16),
            fontFamily: "Euclid-Circular-A-Medium",
            fontWeight: "500",
            marginLeft: hp(20),
          }}
        >
          Please enter your password
        </Text>
        <View
          style={{
            marginTop: hp(80),
            marginBottom: hp(100),
            paddingHorizontal: hp(20),
          }}
        >
          <SegmentedInput
            value={password}
            secureInput
            headerText="Password"
            onValueChanged={(pass) => setPassword(pass)}
            headerstyle={{
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(16),
              fontWeight: "500",
            }}
          />
        </View>
        <Button
          title="Continue"
          disabled={password.length < 6 ? true : false}
          onPressButton={verifyPassword}
          styleText={{
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14,
          }}
          style={{
            marginTop: hp(100),
          }}
          buttonLoading={buttonLoading}
        />
      </View>
    </SpacerWrapper>
  );
};

export default CloseAccountScreen;
