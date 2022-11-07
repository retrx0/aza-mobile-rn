import { Image, TouchableOpacity } from "react-native";
import Button from "../../../components/buttons/Button";
import { View, Text } from "../../../components/Themed";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import CommonStyles from "../../../common/styles/CommonStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { hp } from "../../../common/util/LayoutUtil";
import { RootTabScreenProps } from "../../../../types";
import useColorScheme from "../../../hooks/useColorScheme";
import Colors from "../../../constants/Colors";
import React, { useState } from "react";
import { AddIcon, NairaIcon, OpenIcon } from "../../../../assets/svg";
import { useNavigation } from "@react-navigation/core";
import { useAppSelector } from "../../../redux";
import { selectUser } from "../../../redux/slice/userSlice";

const NewUserVault = () => {
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
      </View>
    </SpacerWrapper>
  );
};

export default NewUserVault;
