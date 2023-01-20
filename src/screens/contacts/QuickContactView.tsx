import React from "react";
import { Image, TouchableOpacity } from "react-native";
import CommonStyles from "../../common/styles/CommonStyles";
import { hp } from "../../common/util/LayoutUtil";
import { View, Text } from "../../theme/Themed";

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
        <Image
          style={{
            borderRadius: 50,
            width: 45,
            height: 45,
          }}
          source={{
            uri: photoUrl,
          }}
        />
        <Text style={{ fontSize: hp(12), marginTop: 5 }}>{firstName}</Text>
      </View>
    </TouchableOpacity>
  );
};
