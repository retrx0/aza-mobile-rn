import React, { useLayoutEffect, useState, useEffect } from "react";
import { ImageBackground } from "react-native";
import { Camera, CameraType, PermissionResponse } from "expo-camera";

import { Text, View } from "../../../../components/Themed";
import BackButton from "../../../../components/buttons/BackButton";
import Button from "../../../../components/buttons/Button";

import { CommonScreenProps } from "../../../../common/navigation/types";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import { ScanCardBackground } from "../../../../../assets/images";

const ScanCardScreen = ({ navigation }: CommonScreenProps<"ScanCard">) => {
  const [cameraPermission, setCameraPermission] =
    useState<PermissionResponse>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            color: "#E7E9EA",
            fontWeight: "500",
          }}>
          Scan Card
        </Text>
      ),
      // hide default back button which only shows in android
      headerBackVisible: false,
      headerTransparent: true,
      //center it in android
      headerTitleAlign: "center",
      headerShadowVisible: false,
      headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
    });
  }, []);

  useEffect(() => {
    (async () => {
      const permission = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(permission);
    })();
  }, []);

  return (
    <ImageBackground source={ScanCardBackground} style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0, 0.60)",
          paddingHorizontal: 15,
          paddingTop: hp(120),
          paddingBottom: hp(50),
        }}>
        <View style={{ backgroundColor: "transparent" }}>
          <Text
            darkColor={Colors.dark.mainText}
            style={{
              color: "#E7E9EA",
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: 14,
              textAlign: "center",
            }}>
            1/2
          </Text>
          <Text
            darkColor={Colors.dark.mainText}
            style={{
              color: "#E7E9EA",
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: 14,
              marginTop: hp(15),
            }}>
            Place the front side of card in the purple box
          </Text>
        </View>
        {cameraPermission?.granted && (
          <Camera
            style={{ width: "100%", height: 250 }}
            type={CameraType.back}
          />
        )}

        <Button
          title="Add Card Manually"
          onPressButton={() => navigation.navigate("AddNewCard")}
          styleText={{
            color: "black",
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14,
          }}
          style={{
            marginBottom: hp(25),
            backgroundColor: "#E7E9EA",
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default ScanCardScreen;
