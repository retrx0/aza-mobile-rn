import React from "react";
import { Image, TouchableOpacity } from "react-native";
import CommonStyles from "../../common/styles/CommonStyles";
import { hp } from "../../common/util/LayoutUtil";
import { View, Text } from "../../theme/Themed";
import ProfilePictureView from "../../components/views/ProfilePictureView";

export const QuickContactView = ({
  firstName,
  lastName,
  photoUrl,
  onPress,
}: {
  firstName: string;
  lastName: string;
  photoUrl: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[CommonStyles.col, { alignItems: "center", marginRight: 20 }]}
      >
        <ProfilePictureView
          firstName={firstName.substring(0, 1)}
          lastName={
            lastName
              ? lastName.substring(0, 1).toUpperCase()
              : firstName.substring(1, 2).toUpperCase()
          }
          profilePictureUrl={photoUrl}
        />
        {/* <Image
          style={{
            borderRadius: 50,
            width: 45,
            height: 45,
          }}
          source={{
            uri: photoUrl,
          }}
        /> */}
        <Text style={{ fontSize: hp(12), marginTop: 5 }}>{firstName}</Text>
      </View>
    </TouchableOpacity>
  );
};
