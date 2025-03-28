import React, { memo, useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import {
  AZALargeLightningLogo,
  Exit,
  ExitIcon,
  InviteIcon,
} from "../../../assets/svg";
import { CommonScreenProps } from "../../common/navigation/types";
import CommonStyles from "../../common/styles/CommonStyles";
import { hp } from "../../common/util/LayoutUtil";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { useAppSelector } from "../../redux";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import { UnblockModal } from "../../screens/tabs/settings/components/BlockUserModal";
import { getAppTheme } from "../../theme";
import { View, Text } from "../../theme/Themed";

interface IContact {
  image: string;
  name: string;
  phoneNumber: string;
  isContactOnAza: boolean;
  suffixIcon?: JSX.Element;
}

const ContactItem = ({
  name,
  phoneNumber,
  suffixIcon,
  image,
  isContactOnAza,
}: IContact) => {
  const scheme = getAppTheme(useAppSelector(selectAppTheme));

  return (
    <View
      style={{
        justifyContent: "space-between",
        marginTop: hp(25),
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
      }}>
      <Image
        style={{ borderRadius: 50, width: 45, height: 45 }}
        source={{
          uri: image,
        }}
      />
      <View style={[CommonStyles.col, { marginLeft: 10, marginRight: "auto" }]}>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{ fontSize: 18, fontFamily: "Euclid-Circular-A-Medium" }}>
          {name}
        </Text>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.secondaryText}
          style={{ fontSize: 12, marginTop: 5 }}>
          {phoneNumber}
        </Text>
      </View>

      {isContactOnAza ? (
        <TouchableOpacity>
          <Exit size={25} color={Colors[scheme].text} />
        </TouchableOpacity>
      ) : (
        <InviteIcon />
      )}
    </View>
  );
};

export default memo(ContactItem);
