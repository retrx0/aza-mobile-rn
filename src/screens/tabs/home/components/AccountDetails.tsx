import React, { useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import {
  CloseCircleLargeIcon,
  Exit,
  ExitIcon,
  NairaIcon,
  NigerianFlag,
  OpenIcon,
} from "../../../../../assets/svg";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { hp, wp } from "../../../../common/util/LayoutUtil";
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
import { NigeriaFlag, VaultLogo } from "../../../../../assets/images";
import { NAIRA_UNICODE } from "../../../../constants/AppConstants";
import { Dropdown } from "react-native-element-dropdown";

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
                paddingHorizontal: 20,
                paddingVertical: hp(7),
                alignItems: "center",
                justifyContent: "center",
                borderRadius: hp(50),
              },
            ]}>
            <Text
              //TODO please export these constants to Colors.ts
              lightColor={"#000000"}
              darkColor={"#E7E9EA"}
              style={{ fontSize: 14 }}>
              Naira
            </Text>
            <Image
              source={NigeriaFlag}
              style={{
                width: wp(15),
                height: hp(15),
                marginRight: hp(5),
                marginLeft: hp(5),
              }}
            />
            <Text
              lightColor={"#000000"}
              darkColor={"#E7E9EA"}
              style={{ fontSize: 14, marginRight: 5 }}>
              NGN
            </Text>
            <OpenIcon color={Colors[colorScheme].button} />
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
            onPress={() => setModalVisible(false)}
            style={{
              backgroundColor: "transparent",
              alignItems: "flex-end",
              marginBottom: 10,
              marginRight: 10,
            }}>
            <CloseCircleLargeIcon
              color={Colors[colorScheme].backgroundSecondary}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              paddingHorizontal: 15,
              backgroundColor: colorScheme === "dark" ? "#3A3D42" : "#FFFFFF",
            }}
            onPress={() => setModalVisible(false)}>
            <View
              style={{
                height: hp(335),
                backgroundColor: colorScheme === "dark" ? "#3A3D42" : "#FFFFFF",
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
                  backgroundColor:
                    colorScheme === "dark" ? "#3A3D42" : "#FFFFFF",
                }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor:
                      colorScheme === "dark" ? "#3A3D42" : "#FFFFFF",
                  }}>
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
                  {`${NAIRA_UNICODE} 239,290`}
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
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor:
                      colorScheme === "dark" ? "#3A3D42" : "#FFFFFF",
                  }}>
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
                  {`${NAIRA_UNICODE} 239,290`}
                </Text>
              </TouchableOpacity>
              <Divider />
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    </>
  );
}
