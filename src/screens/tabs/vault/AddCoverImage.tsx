import React, { useState } from "react";
import { Image } from "react-native";
import BackButton from "../../../components/buttons/BackButton";
import CommonStyles from "../../../common/styles/CommonStyles";
import useColorScheme from "../../../hooks/useColorScheme";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import { VaultStyles } from "./styles";
import { Text, View } from "../../../components/Themed";
import { RootTabScreenProps } from "../../../../types";
import { hp } from "../../../common/util/LayoutUtil";
import Button from "../../../components/buttons/Button";
import * as ImagePicker from "expo-image-picker";

const selectImageFromGallery = async () => {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.cancelled) {
    const { uri } = result;
    console.log("selected");
  }
};

const AddCoverImage = ({ navigation }: RootTabScreenProps<"Vault">) => {
  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: hp(30),
          }}>
          <View style={{ marginLeft: 17 }}>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Bold",
              fontSize: hp(16),
              fontWeight: "600",
              textAlign: "center",
              marginRight: 160,
            }}>
            Add Cover Image
          </Text>
        </View>
        <Text style={CommonStyles.selectStyle}>
          When you add a photo and set a vault goal in the next step, your
          account would look like the one below.
        </Text>
        <Image
          style={{ width: 150, height: 150, alignSelf: "center" }}
          source={require("../../../../assets/images/icons/CoverImageII.png")}
        />
        <View style={{ marginTop: hp(230) }}>
          <Button
            title="Select From Gallery"
            // onPressButton={() =>
            //   navigation
            //     .getParent()
            //     ?.navigate("Common", { screen: "VaultToAza" })
            // }
            style={[CommonStyles.toBankbutton]}
            styleText={CommonStyles.toBankbuttonText}
            onPressButton={() => selectImageFromGallery()}
          />
          <Button
            title="Continue"
            onPressButton={() =>
              navigation.navigate("Common", {
                screen: "SetVaultGoal",
              })
            }
            style={[CommonStyles.toAzabutton]}
            styleText={CommonStyles.toAzabuttonText}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default AddCoverImage;
