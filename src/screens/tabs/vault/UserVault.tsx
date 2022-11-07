import { Image, TouchableOpacity } from "react-native";
import Button from "../../../components/buttons/Button";
import { View, Text } from "../../../components/Themed";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import CommonStyles from "../../../common/styles/CommonStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { hp, wp } from "../../../common/util/LayoutUtil";
import { RootTabScreenProps } from "../../../../types";
import useColorScheme from "../../../hooks/useColorScheme";
import Colors from "../../../constants/Colors";
import React, { useState } from "react";
import {
  AddIcon,
  ArrowDownIcon,
  CloseIcon,
  NairaIcon,
  OpenIcon,
  OutgoingTransferIcon,
  SendIcon,
} from "../../../../assets/svg";
import { useNavigation } from "@react-navigation/core";
import { useAppSelector } from "../../../redux";
import { selectUser } from "../../../redux/slice/userSlice";
import Divider from "../../../components/divider/Divider";
import UserArchieved from "./components/UserArchieved";

const UserVault = () => {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const [secure, setSecure] = useState(true);
  const user = useAppSelector(selectUser);

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.col, { alignItems: "center" }]}>
        <TouchableOpacity
          onPress={() => navigation.getParent()?.navigate("Home")}>
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
            ]}>
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
              }}>
              Vault
            </Text>
            <OpenIcon />
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
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Common", {
              screen: "NewVault",
            })
          }>
          <AddIcon />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: "Euclid-Circular-A",
            fontSize: hp(14),
            fontWeight: "400",
            marginBottom: hp(40),
          }}>
          New Vault
        </Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Common", {
            screen: "AddVault",
          })
        }
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginLeft: hp(20),
        }}>
        <Text
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "500",
            marginRight: hp(3),
          }}>
          Vaults
        </Text>
        <SendIcon color={Colors[colorScheme].secondaryText} />
      </TouchableOpacity>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: "#EAEAEC",
          width: wp(380),
          alignSelf: "center",
          marginTop: hp(20),
        }}
      />
      <UserArchieved />
      {/* <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: hp(22),
          justifyContent: "space-between",
          paddingHorizontal: hp(20),
        }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{ width: 36, height: 36 }}
            source={require("../../../../assets/images/icons/CoverImage.png")}
          />
          <View style={{ marginLeft: hp(15) }}>
            <Text>Flight Ticket</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  color: "#2A9E17",
                  fontSize: hp(14),
                  fontWeight: "600",
                  fontFamily: "Euclid-Circular-A-Bold",
                  marginTop: hp(2),
                }}>
                {"\u20A62,000"}
              </Text>
              <Text
                style={{
                  fontSize: hp(14),
                  fontWeight: "600",
                  lineHeight: hp(17.75),
                  fontFamily: "Euclid-Circular-A-Bold",
                }}>
                {"/\u20A6280,000"}
              </Text>
            </View>
          </View>
        </View>
        <CloseIcon />
      </TouchableOpacity> */}
      {/* <View
        style={{
          borderWidth: 0.5,
          borderColor: "#EAEAEC",
          width: wp(380),
          alignSelf: "center",
          marginTop: hp(20),
        }}
      /> */}
      <View
        style={{
          marginBottom: hp(20),
          flexDirection: "row",
          alignItems: "center",
          marginTop: hp(40),
          paddingHorizontal: hp(20),
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Common", { screen: "TransactionHistory" })
          }>
          <Text
            lightColor={Colors.light.text}
            darkColor={Colors.dark.mainText}
            style={{
              marginRight: hp(3),
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(17),
            }}>
            Recent Transactions
          </Text>
        </TouchableOpacity>
        <SendIcon color={Colors[colorScheme].secondaryText} />
      </View>
      <Text
        style={{
          fontFamily: "Euclid-Circular-A",
          fontSize: hp(14),
          fontWeight: "500",
          textAlign: "center",
          marginTop: hp(100),
          color: Colors[colorScheme].secondaryText,
        }}>
        You have no recent transactions
      </Text>
    </SpacerWrapper>
  );
};

export default UserVault;
