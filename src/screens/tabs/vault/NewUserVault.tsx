import { Image, TouchableOpacity } from "react-native";
import { View, Text } from "../../../theme/Themed";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import CommonStyles from "../../../common/styles/CommonStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { hp } from "../../../common/util/LayoutUtil";
import { RootStackScreenProps, RootTabScreenProps } from "../../../../types";
import useColorScheme from "../../../hooks/useColorScheme";
import Colors from "../../../constants/Colors";
import React, { useState } from "react";
import {
  AZALightningLogo,
  DepositIcon,
  MenuIcon,
  NairaIcon,
  OpenIcon,
  QRCodeDarkModeIcon,
  QRCodeIcon,
} from "../../../../assets/svg";
import { useNavigation } from "@react-navigation/core";
import { useAppSelector } from "../../../redux";
import { selectUser } from "../../../redux/slice/userSlice";
import { Pressable } from "react-native";
import { useBottomSheetType } from "../home/hooks/useBottomSheetType";
import CustomBottomSheet from "../../../components/bottomsheet/CustomBottomSheet";
import VaultModal from "./components/VaultModal";

const NewUserVault = (
  _navigation: RootStackScreenProps<"Root"> & RootTabScreenProps<"Home">
) => {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const [secure, setSecure] = useState(true);
  const user = useAppSelector(selectUser);
  const [isMenuModalVisible, setMenuModalVisible] = React.useState(false);
  const menuBottomSheetListItems = useBottomSheetType("menu", _navigation);
  const [ModalVisible, setModalVisible] = useState(false);
  const toggleMenuModal = () => {
    setMenuModalVisible(!isMenuModalVisible);
  };
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const insets = useSafeAreaInsets();
  return (
    <>
      <SpacerWrapper>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",

            marginTop: hp(20),
            marginBottom: hp(10),
          }}
        >
          <Pressable
            onPress={toggleMenuModal}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
              marginLeft: 15,
            })}
          >
            <MenuIcon size={25} color={Colors[colorScheme].text} />
          </Pressable>
          <AZALightningLogo
            size={25}
            color={
              colorScheme === "dark" ? Colors.dark.mainText : Colors.light.text
            }
          />
          <Pressable
            onPress={() => navigation.navigate("QRTransactions")}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
          >
            {colorScheme === "dark" ? (
              <QRCodeDarkModeIcon style={{ marginRight: 15 }} />
            ) : (
              <QRCodeIcon
                size={24}
                color={Colors.light.text}
                style={{ marginRight: 15 }}
              />
            )}
          </Pressable>
        </View>

        <View style={[CommonStyles.col, { alignItems: "center" }]}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <View
              lightColor="#eaeaec"
              darkColor="#1D1D20"
              style={[
                CommonStyles.row,
                {
                  paddingHorizontal: 34,
                  paddingVertical: hp(7),
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderRadius: hp(50),
                },
              ]}
            >
              <Image
                style={{ width: 11, height: 11 }}
                source={require("../../../../assets/images/icons/VaultLogo.png")}
              />
              <Text
                lightColor={"#000000"}
                darkColor={"#CCCCCC"}
                style={{
                  fontSize: 12,
                  fontWeight: "400",
                  fontFamily: "Euclid-Circular-A",
                  marginRight: hp(9),
                  marginLeft: hp(9),
                }}
              >
                Vault
              </Text>
              <OpenIcon color={Colors[colorScheme].button} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[CommonStyles.row]}
            onPress={() => setSecure(!secure)}
          >
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
                    }}
                  >
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
                  }}
                >
                  **********
                </Text>
              )}
            </>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Common", {
                screen: "Vault",
              })
            }
          >
            <DepositIcon color="#2AD168" size={40} />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A",
              fontSize: hp(14),
              fontWeight: "400",
              marginBottom: hp(40),
              marginTop: hp(10),
            }}
          >
            New Vault
          </Text>
        </View>
      </SpacerWrapper>
      <CustomBottomSheet
        isModalVisible={isMenuModalVisible}
        toggleModal={toggleMenuModal}
        listItems={menuBottomSheetListItems}
      />
      <VaultModal
        visible={ModalVisible}
        setModalVisible={setModalVisible}
        navigation={navigation}
      />
    </>
  );
};

export default NewUserVault;
