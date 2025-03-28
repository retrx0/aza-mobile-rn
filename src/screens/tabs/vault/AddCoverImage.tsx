import React from "react";
import { Image } from "react-native";
import BackButton from "../../../components/buttons/BackButton";
import CommonStyles from "../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import { View, Text } from "../../../theme/Themed";
import { hp } from "../../../common/util/LayoutUtil";
import Button from "../../../components/buttons/Button";
import * as ImagePicker from "expo-image-picker";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CommonScreenProps } from "../../../common/navigation/types";

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

const AddCoverImage = ({ navigation }: CommonScreenProps<"AddCoverImage">) => {
  const insets = useSafeAreaInsets();
  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ marginLeft: 20 }}>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Bold",
              fontSize: hp(16),
              fontWeight: "500",
              marginLeft: hp(65),
            }}
          >
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
            { bottom: insets.top || hp(45) },
          ]}
        >
          <Button
            title="Select From Gallery"
            // onPressButton={() =>
            //   navigation
            //     .getParent()
            //     ?.navigate("Common", { screen: "VaultToAza" })
            // }

            styleText={CommonStyles.toBankbuttonText}
            style={[CommonStyles.toBankbutton, { marginBottom: hp(20) }]}
            onPressButton={() => selectImageFromGallery()}
          />
          <Button
            title="Continue"
            onPressButton={() => navigation.navigate("SetVaultGoal")}
            style={[CommonStyles.toAzabutton]}
            styleText={CommonStyles.toAzabuttonText}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default AddCoverImage;
