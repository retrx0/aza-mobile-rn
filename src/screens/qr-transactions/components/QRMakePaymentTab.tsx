import React, { useEffect, useState } from "react";
import { Platform, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { BarCodeScanner } from "expo-barcode-scanner";
import {
  BarCodeScanningResult,
  Camera,
  CameraType,
  PermissionResponse,
} from "expo-camera";

import Button from "../../../components/buttons/Button";
import { Text, View } from "../../../theme/Themed";

import { hp } from "../../../common/util/LayoutUtil";
import { toastError } from "../../../common/util/ToastUtil";
import { RootStackScreenProps } from "../../../types/types.navigation";
import { useAppDispatch, useAppSelector } from "../../../redux";
import { setTransaction } from "../../../redux/slice/transactionSlice";
import { IQRScanTransactionData } from "../../../types/types.redux";
import { QR_CODE_SCAN_ISO } from "../../../constants/AppConstants";
import { selectUser } from "../../../redux/slice/userSlice";
import useQRService from "../useQRService";

const QRMakePaymentTab = ({
  navigation,
  route,
}: RootStackScreenProps<"QRTransactions">) => {
  const [cameraPermission, setCameraPermission] =
    useState<PermissionResponse>();

  const { onBarCodeScanned, selectImageFromGalleryAndDecode } = useQRService({
    navigation,
    route,
  });

  const { walletNumber } = useAppSelector(selectUser);

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
      // TODO: fix View not rendering properly on android
      Platform.OS === "ios" && (
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
      )
    );
  };

  return (
    <View style={styles.cameraContainer}>
      {/* TODO fix camera not shuting down after closing modal */}
      {cameraPermission?.granted && walletNumber && (
        <Camera
          style={styles.camera}
          type={CameraType.back}
          onBarCodeScanned={(code) => onBarCodeScanned(code)}
        >
          <View style={styles.container1} />
          <View style={styles.container2}>
            <View style={styles.scannerSide} />
            <View style={styles.scanner}>
              {renderCameraEdge("topLeft")}
              {renderCameraEdge("topRight")}
              {renderCameraEdge("bottomLeft")}
              {renderCameraEdge("bottomRight")}
            </View>
            <View style={styles.scannerSide} />
          </View>

          <View style={styles.container3}>
            <Button
              title="Select from Gallery"
              onPressButton={() => selectImageFromGalleryAndDecode()}
              styleText={styles.buttonText}
              style={styles.button}
            />
          </View>
        </Camera>
      )}
      {!walletNumber && (
        <View style={{ margin: 20 }}>
          <Text style={{ textAlign: "center" }}>
            Create a wallet to make a QR Payment
          </Text>
        </View>
      )}
    </View>
  );
};

export default QRMakePaymentTab;

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  camera: { width: "100%", height: "100%" },
  container1: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    flex: 1,
  },
  container2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 2,
    zIndex: 1,
    backgroundColor: "transparent",
  },
  scanner: {
    backgroundColor: "transparent",
    position: "relative",
    width: 300,
    height: "100%",
  },
  scannerSide: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    width: "10%",
    flex: 1,
    zIndex: -2,
  },
  container3: {
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    flex: 2,
  },
  buttonText: {
    color: "black",
    fontFamily: "Euclid-Circular-A-Medium",
    fontSize: 14,
  },
  button: {
    marginTop: hp(100),
    marginBottom: "auto",
    backgroundColor: "#E7E9EA",
  },
});
