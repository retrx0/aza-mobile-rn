import React from "react";
import { Text, View } from "../../theme/Themed";
import { Image } from "react-native";
import { getAppTheme } from "../../theme";
import { useAppSelector } from "../../redux";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import Colors from "../../constants/Colors";

const ProfilePictureView = ({
  firstName,
  lastName,
  profilePictureUrl,
}: {
  firstName: string;
  lastName: string;
  profilePictureUrl?: string;
}) => {
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));
  return (
    <View
      style={{
        backgroundColor: Colors[appTheme].backgroundSecondary,
        borderRadius: 100,
        width: 50,
        height: 50,
        justifyContent: "center",
      }}
    >
      {profilePictureUrl && !profilePictureUrl?.includes("avatar") ? (
        <Image
          source={{ uri: profilePictureUrl, cache: "default" }}
          style={{ width: 50, height: 50, borderRadius: 25 }}
        />
      ) : (
        firstName &&
        lastName && (
          <Text
            style={{
              textAlignVertical: "center",
              textAlign: "center",
              fontSize: 24,
              color: Colors[appTheme].text,
            }}
          >
            {firstName + lastName}
          </Text>
        )
      )}
    </View>
  );
};

export default ProfilePictureView;
