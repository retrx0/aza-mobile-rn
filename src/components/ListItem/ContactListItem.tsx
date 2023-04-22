import React, { memo } from "react";
import { Image } from "react-native";
import { AZALargeLightningLogo, InviteIcon } from "../../../assets/svg";
import CommonStyles from "../../common/styles/CommonStyles";
import { hp } from "../../common/util/LayoutUtil";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { useAppSelector } from "../../redux";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import { getAppTheme } from "../../theme";
import { View, Text } from "../../theme/Themed";
import ProfilePictureView from "../views/ProfilePictureView";

interface IContact {
  image: string;
  name: string;
  phoneNumber?: string;
  isContactOnAza: boolean;
  suffixIcon?: JSX.Element;
  hideDefaultIcons?: boolean;
}

const ContactListItem = ({
  name,
  phoneNumber,
  suffixIcon,
  hideDefaultIcons,
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
      }}
    >
      <ProfilePictureView
        firstName={name.substring(0, 1)}
        lastName={
          name.split(" ")[1]
            ? name.split(" ")[1].substring(0, 1).toUpperCase()
            : name.substring(1, 2).toUpperCase()
        }
        profilePictureUrl={image}
      />
      {/* <Image
        style={{ borderRadius: 50, width: 45, height: 45 }}
        source={{
          uri: image,
        }}
      /> */}
      <View style={[CommonStyles.col, { marginLeft: 10, marginRight: "auto" }]}>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{ fontSize: 18, fontFamily: "Euclid-Circular-A-Medium" }}
        >
          {name}
        </Text>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.secondaryText}
          style={{ fontSize: 12, marginTop: 5 }}
        >
          {phoneNumber}
        </Text>
      </View>
      {suffixIcon ? (
        suffixIcon
      ) : hideDefaultIcons ? undefined : isContactOnAza ? (
        <AZALargeLightningLogo size={25} color={Colors[scheme].text} />
      ) : (
        <InviteIcon />
      )}
    </View>
  );
};

export default memo(ContactListItem);
