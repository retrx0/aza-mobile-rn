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
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
  const insets = useSafeAreaInsets();
  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}>
          <View style={{ marginLeft: 20 }}>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Bold",
              fontSize: hp(16),
              fontWeight: "500",
              marginLeft: hp(90),
            }}>
            Add Cover Image
          </Text>
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={CommonStyles.selectStyle}>
            When you add a photo and set a vault goal in the next step, your
            account would look like the one below.
          </Text>
          <Image
            style={{ width: 150, height: 150, alignSelf: "center" }}
            source={require("../../../../assets/images/icons/CoverImageII.png")}
          />
        </View>

        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.bottom || hp(45) },
          ]}>
          <Button
            title="Select From Gallery"
            // onPressButton={() =>
            //   navigation
            //     .getParent()
            //     ?.navigate("Common", { screen: "VaultToAza" })
            // }
            style={[CommonStyles.toAzabutton]}
            styleText={CommonStyles.toAzabuttonText}
            onPressButton={() => selectImageFromGallery()}
          />
          <Button
            title="Continue"
            onPressButton={() =>
              navigation.navigate("Common", {
                screen: "SetVaultGoal",
              })
            }
            style={[CommonStyles.toBankbutton]}
            styleText={CommonStyles.toBankbuttonText}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default AddCoverImage;
