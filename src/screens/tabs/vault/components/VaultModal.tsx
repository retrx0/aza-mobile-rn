import React from "react";
import { TouchableOpacity, Image } from "react-native";
import Modal from "react-native-modal";
import { Colors } from "react-native/Libraries/NewAppScreen";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { View, Text } from "../../../../theme/Themed";

// import { useNavigation } from "@react-navigation/core";
import { hp } from "../../../../common/util/LayoutUtil";
import { NigeriaFlag, VaultLogo } from "../../../../../assets/images";
import { CloseCircleLargeIcon } from "../../../../../assets/svg";
import { wp } from "../../../../common/util/LayoutUtil";
import { NAIRA_UNICODE } from "../../../../constants/AppConstants";
// import navigation from "../../../navigation";
import useColorScheme from "../../../../hooks/useColorScheme";
import Divider from "../../../../components/divider/Divider";

type DescriptionModalProps = {
  visible: boolean;
  setModalVisible: (value: boolean) => void;
  navigation: any;
};

const VaultModal = ({
  visible,
  navigation,
  setModalVisible,
}: DescriptionModalProps) => {
  // const navigation = useNavigation();
  const colorScheme = useColorScheme();

  return (
    <View>
      <Modal
        onBackdropPress={() => setModalVisible(false)}
        isVisible={visible}
        style={{ justifyContent: "flex-end", margin: 0 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "transparent",
            alignItems: "flex-end",
            marginBottom: 10,
            marginRight: 10,
          }}
          onPress={() => setModalVisible(false)}>
          <CloseCircleLargeIcon
            color={colorScheme === "dark" ? "#E7E9EA" : "#E7E9EA"}
          />
        </TouchableOpacity>
        <View
          style={{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingHorizontal: 15,
            backgroundColor: colorScheme === "dark" ? "#3A3D42" : "#FFFFFF",
          }}>
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
                backgroundColor: colorScheme === "dark" ? "#3A3D42" : "#FFFFFF",
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
            </TouchableOpacity>
            <Divider />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Common", {
                  screen: "NewUserVault",
                });
                setModalVisible(false);
              }}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: hp(30),
                marginBottom: hp(30),
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
        </View>
      </Modal>
    </View>
  );
};

export default VaultModal;
