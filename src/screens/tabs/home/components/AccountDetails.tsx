import React, { useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import { ExitIcon, NairaIcon } from "../../../../../assets/svg";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { hp } from "../../../../common/util/LayoutUtil";
import { Text, View } from "../../../../components/Themed";
import Colors from "../../../../constants/Colors";
import { useAppSelector } from "../../../../redux";
import useColorScheme from "../../../../hooks/useColorScheme";
import { selectUser } from "../../../../redux/slice/userSlice";
import Modal from "react-native-modal";
import Divider from "../../../../components/divider/Divider";
import { RootTabScreenProps } from "../../../../../types";
import { CommonScreenProps } from "../../../../common/navigation/types";
import { useNavigation } from "@react-navigation/core";

export default function AccountDetails() {
  const colorScheme = useColorScheme();
  const [secure, setSecure] = useState(true);
  const [ModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const user = useAppSelector(selectUser);

  return (
    <>
      <View style={[CommonStyles.col, { alignItems: "center" }]}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View
            lightColor="#eaeaec"
            darkColor="#1D1D20"
            style={[
              CommonStyles.row,
              {
                paddingHorizontal: 15,
                paddingVertical: hp(7),
                alignItems: "center",
                justifyContent: "center",
                borderRadius: hp(50),
              },
            ]}>
            <Text
              lightColor={"#000000"}
              darkColor={"#CCCCCC"}
              style={{ fontSize: 14 }}>
              Nigerian Naira
            </Text>
            <Image
              style={{ width: 20, height: 20, marginHorizontal: 10 }}
              source={require("../../../../../assets/images/icons/NigerianFlag.png")}
            />
            <Text
              lightColor={Colors.general.darkGrey}
              darkColor={Colors.dark.tabIconDefault}
              style={{ fontSize: 14 }}>
              NGN
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[CommonStyles.row]}
          onPress={() => setSecure(!secure)}>
          <>
            {secure ? (
              <>
                <NairaIcon
                  size={25}
                  color={
                    colorScheme === "dark"
                      ? Colors.dark.mainText
                      : Colors.light.text
                  }
                  style={{ marginRight: 2 }}
                />
                <Text
                  lightColor={Colors.light.text}
                  darkColor={Colors.dark.mainText}
                  style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: 26,
                    marginVertical: hp(10),
                  }}>
                  {user.azaBalance}
                </Text>
              </>
            ) : (
              <Text
                lightColor={Colors.light.text}
                darkColor={Colors.dark.mainText}
                style={{
                  fontFamily: "Euclid-Circular-A-Semi-Bold",
                  fontSize: hp(24),
                  marginVertical: hp(10),
                }}>
                **********
              </Text>
            )}
          </>
        </TouchableOpacity>
        <View style={[CommonStyles.row]}>
          <Text
            lightColor={Colors.light.text}
            darkColor={Colors.dark.mainText}
            style={{
              marginLeft: 3,
              fontSize: hp(12),
              fontFamily: "Euclid-Circular-A",
            }}>
            Aza Number:
          </Text>
          <Text
            lightColor={Colors.light.text}
            darkColor={Colors.dark.mainText}
            style={{
              marginLeft: 3,
              fontSize: hp(12),
              fontFamily: "Euclid-Circular-A-Semi-Bold",
            }}>
            {user.azaAccountNumber}
          </Text>
        </View>
      </View>

      <View>
        <Modal
          isVisible={ModalVisible}
          style={{ justifyContent: "flex-end", margin: 0 }}>
          <TouchableOpacity
            style={{
              width: 25,
              height: 25,
              borderRadius: 25,
              backgroundColor: "white",
              alignSelf: "flex-end",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 10,
            }}
            onPress={() => setModalVisible(false)}>
            <ExitIcon />
          </TouchableOpacity>
          <View
            style={{
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              paddingHorizontal: 15,
            }}>
            <View
              style={{
                height: hp(335),
              }}>
              <Text
                style={{
                  fontFamily: "Euclid-Circular-A-Medium",
                  fontSize: hp(24),
                  textAlign: "center",
                  fontWeight: "500",
                  marginTop: hp(20),
                  marginBottom: hp(20),
                }}>
                Accounts
              </Text>
              <Divider />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: hp(30),
                  marginTop: hp(30),
                }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{ width: 30, height: 30, marginHorizontal: 10 }}
                    source={require("../../../../../assets/images/icons/NigerianFlag.png")}
                  />
                  <Text
                    style={{
                      fontFamily: "Euclid-Circular-A-Medium",
                      fontSize: hp(16),
                      textAlign: "center",
                      fontWeight: "500",
                    }}>
                    NGN - Naira
                  </Text>
                </View>
                <Text
                  style={{
                    fontFamily: "Euclid-Circular-A-Medium",
                    fontSize: hp(16),
                    textAlign: "center",
                    fontWeight: "500",
                  }}>
                  {"\u20A610,239,290"}
                </Text>
              </View>
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
                }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{ width: 30, height: 30, marginHorizontal: 10 }}
                    source={require("../../../../../assets/images/icons/VaultLogo.png")}
                  />
                  <Text
                    style={{
                      fontFamily: "Euclid-Circular-A-Medium",
                      fontSize: hp(16),
                      textAlign: "center",
                      fontWeight: "500",
                    }}>
                    Vault
                  </Text>
                </View>
                <Text
                  style={{
                    fontFamily: "Euclid-Circular-A-Medium",
                    fontSize: hp(16),
                    textAlign: "center",
                    fontWeight: "500",
                  }}>
                  {"\u20A6239,290"}
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
