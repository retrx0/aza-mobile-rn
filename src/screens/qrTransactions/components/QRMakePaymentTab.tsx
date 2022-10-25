import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Camera, CameraType, PermissionResponse } from "expo-camera";

import Button from "../../../components/buttons/Button";
import { View } from "../../../components/Themed";

import { hp } from "../../../common/util/LayoutUtil";
import { RootStackScreenProps } from "../../../../types";

const QRMakePaymentTab = ({
  navigation,
}: RootStackScreenProps<"QRTransactions">) => {
  const [cameraPermission, setCameraPermission] =
    useState<PermissionResponse>();

  useEffect(() => {
    (async () => {
      const permission = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(permission);
    })();
  }, []);

  const renderCameraEdge = (
    edgePosition: "bottomRight" | "bottomLeft" | "topRight" | "topLeft"
  ) => {
    return (
      <View
        style={{
          position: "absolute",
          top:
            edgePosition === "topLeft" || edgePosition === "topRight"
              ? -4
              : undefined,
          right:
            edgePosition === "topRight" || edgePosition === "bottomRight"
              ? -4
              : undefined,
          bottom:
            edgePosition === "bottomRight" || edgePosition === "bottomLeft"
              ? -4
              : undefined,
          left:
            edgePosition === "topLeft" || edgePosition === "bottomLeft"
              ? -4
              : undefined,
          width: 60,
          height: 60,
          backgroundColor: "transparent",
          borderColor: "#D9D9D9",
          borderBottomWidth: edgePosition.includes("bottom") ? 4 : undefined,
          borderLeftWidth: edgePosition.includes("Left") ? 4 : undefined,
          borderRightWidth: edgePosition.includes("Right") ? 4 : undefined,
          borderTopWidth: edgePosition.includes("top") ? 4 : undefined,
        }}
      />
    );
  };

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

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* TODO fix camera not shuting down after closing modal */}
      {cameraPermission?.granted && (
        <Camera
          style={{ width: "100%", height: "100%" }}
          type={CameraType.back}
          onBarCodeScanned={(code) => {
            if (code.type === "org.iso.QRCode") {
              Alert.alert("Code Scanned " + code.data);
              navigation.navigate("Root");
            }
          }}
        >
          <View
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              flex: 1,
            }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flex: 2,
              backgroundColor: "transparent",
            }}
          >
            <View
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                width: "10%",
              }}
            />
            <View
              style={{
                backgroundColor: "transparent",
                position: "relative",
                flex: 1,
              }}
            >
              {/* {renderCameraEdge("topLeft")}
                    {renderCameraEdge("topRight")}
                    {renderCameraEdge("bottomLeft")}
                    {renderCameraEdge("bottomRight")} */}
            </View>
            <View
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                width: "10%",
                zIndex: -10,
              }}
            />
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "flex-end",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              flex: 2,
            }}
          >
            <Button
              title="Select from Gallery"
              onPressButton={() => selectImageFromGallery()}
              styleText={{
                color: "black",
                fontFamily: "Euclid-Circular-A-Medium",
                fontSize: 14,
              }}
              style={{
                marginTop: hp(100),
                marginBottom: "auto",
                backgroundColor: "#E7E9EA",
              }}
            />
          </View>
        </Camera>
      )}
    </View>
  );
};

export default QRMakePaymentTab;
