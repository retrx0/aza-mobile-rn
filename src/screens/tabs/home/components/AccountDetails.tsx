import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/core";

import Divider from "../../../../components/divider/Divider";
import { View as View, Text as Text } from "../../../../theme/Themed";

import CommonStyles from "../../../../common/styles/CommonStyles";
import { hp, wp } from "../../../../common/util/LayoutUtil";
import Colors from "../../../../constants/Colors";
import { NAIRA_UNICODE } from "../../../../constants/AppConstants";
import { numberWithCommas } from "../../../../common/util/NumberUtils";

import { CloseCircleLargeIcon } from "../../../../../assets/svg";
import { NigeriaFlag, VaultLogo } from "../../../../../assets/images";

import { useAppAsyncStorage } from "../../../../hooks/useAsyncStorage";

import { useAppSelector } from "../../../../redux";
import { selectUser } from "../../../../redux/slice/userSlice";
import { selectAppPreference } from "../../../../redux/slice/preferenceSlice";
import { copyToClipboard } from "../../../../common/util/AppUtil";
import { toastInfo } from "../../../../common/util/ToastUtil";

export default function AccountDetails({ isModalVisible, listItems }: any) {
  const [secure, setSecure] = useState(false);
  const [ModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const user = useAppSelector(selectUser);
  const preference = useAppSelector(selectAppPreference);

  useEffect(() => {
    if (preference.accountBalanceVisibilitySwitch)
      setSecure(preference.accountBalanceVisibilitySwitch);
    else setSecure(false);
  }, [preference.accountBalanceVisibilitySwitch]);

  return (
    <>
      <View
        style={[CommonStyles.col, { alignItems: "center", marginTop: hp(20) }]}
      >
        {/* <TouchableOpacity onPress={() => setModalVisible(true)}> */}
        <View
          lightColor="#eaeaec"
          darkColor="#1D1D20"
          style={[
            CommonStyles.row,
            {
              paddingHorizontal: 20,
              paddingVertical: hp(7),
              alignItems: "center",
              justifyContent: "center",
              borderRadius: hp(50),
            },
          ]}
        >
          <Text style={{ fontSize: 16 }}>Naira</Text>
          <Image
            source={NigeriaFlag}
            style={{
              width: wp(15),
              height: hp(15),
              marginRight: hp(5),
              marginLeft: hp(5),
            }}
          />
          <Text style={{ fontSize: 16, marginRight: 5 }}>NGN</Text>
          {/* <OpenIcon color={Colors[colorScheme].button} /> */}
        </View>
        {/* </TouchableOpacity> */}
        <TouchableOpacity
          style={[CommonStyles.row, { marginTop: hp(5) }]}
          onPress={() => setSecure(!secure)}
        >
          <>
            {!secure ? (
              <>
                <Text
                  lightColor={Colors.light.text}
                  darkColor={Colors.dark.mainText}
                  style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: hp(32),
                    marginVertical: hp(10),
                  }}
                >
                  {NAIRA_UNICODE + "" + numberWithCommas(user.azaBalance)}
                </Text>
              </>
            ) : (
              <Text
                lightColor={Colors.light.text}
                darkColor={Colors.dark.mainText}
                style={{
                  fontFamily: "Euclid-Circular-A-Semi-Bold",
                  fontSize: hp(32),
                  marginVertical: hp(10),
                }}
              >
                **********
              </Text>
            )}
          </>
        </TouchableOpacity>
        {user.bvnVerified && (
          <View style={[CommonStyles.row]}>
            <Text
              style={{
                marginLeft: 3,
                fontSize: hp(12),
                fontFamily: "Euclid-Circular-A",
              }}
            >
              AZA-9PSB Number:
            </Text>
            <TouchableOpacity
              onPress={() => {
                if (user.walletNumber)
                  copyToClipboard(user.walletNumber).then((_) =>
                    toastInfo("Account number copied to clipboard!")
                  );
              }}
            >
              <Text
                style={{
                  marginLeft: 3,
                  fontSize: hp(15),
                  fontFamily: "Euclid-Circular-A-Semi-Bold",
                }}
              >
                {user.walletNumber ? user.walletNumber : ""}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View>
        <Modal
          onBackdropPress={() => setModalVisible(false)}
          isVisible={ModalVisible}
          style={{ justifyContent: "flex-end", margin: 0 }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "transparent",
              alignItems: "flex-end",
              marginBottom: 10,
              marginRight: 10,
            }}
            onPress={() => setModalVisible(false)}
          >
            <CloseCircleLargeIcon color={"#E7E9EA"} />
          </TouchableOpacity>
          <View
            style={{
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              paddingHorizontal: 15,
            }}
          >
            <View
              style={{
                height: hp(335),
              }}
            >
              <Text
                style={{
                  fontFamily: "Euclid-Circular-A-Medium",
                  fontSize: hp(24),
                  textAlign: "center",
                  fontWeight: "500",
                  marginTop: hp(20),
                  marginBottom: hp(20),
                }}
              >
                Accounts
              </Text>
              <Divider />
              <TouchableOpacity
                onPress={() => {
                  navigation.getParent()?.navigate("Home");
                  setModalVisible(false);
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: hp(30),
                  marginTop: hp(30),
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={NigeriaFlag}
                    style={{ width: wp(40), height: hp(40) }}
                  />
                  <Text
                    style={{
                      fontFamily: "Euclid-Circular-A-Medium",
                      fontSize: hp(16),
                      textAlign: "center",
                      fontWeight: "500",
                      marginLeft: hp(10),
                    }}
                  >
                    NGN - Naira
                  </Text>
                </View>
                <Text
                  style={{
                    fontFamily: "Euclid-Circular-A-Medium",
                    fontSize: hp(16),
                    textAlign: "center",
                    fontWeight: "500",
                  }}
                >
                  {`${NAIRA_UNICODE} 239,290`}
                </Text>
              </TouchableOpacity>
              <Divider />
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: hp(30),
                  marginBottom: hp(30),
                }}
                onPress={() => {
                  navigation.navigate("Common", {
                    screen: "NewUserVault",
                  });
                  setModalVisible(false);
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{ width: wp(40), height: hp(40) }}
                    source={VaultLogo}
                  />
                  <Text
                    style={{
                      fontFamily: "Euclid-Circular-A-Medium",
                      fontSize: hp(16),
                      textAlign: "center",
                      fontWeight: "500",
                      marginLeft: hp(10),
                    }}
                  >
                    Vault
                  </Text>
                </View>
                <Text
                  style={{
                    fontFamily: "Euclid-Circular-A-Medium",
                    fontSize: hp(16),
                    textAlign: "center",
                    fontWeight: "500",
                  }}
                >
                  {`${NAIRA_UNICODE} 239,290`}
                </Text>
              </TouchableOpacity>
              <Divider />
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}
