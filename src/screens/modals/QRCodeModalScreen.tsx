import { Camera, CameraType } from "expo-camera";
import { PermissionResponse } from "expo-image-picker";
import { useEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import { RootStackScreenProps } from "../../../types";
import { hp } from "../../common/util/LayoutUtil";

import { View } from "../../components/Themed";

const ModalScreen = ({ navigation }: RootStackScreenProps<"QRCodeModal">) => {
  const [cameraPermission, setCameraPermission] =
    useState<PermissionResponse>();

  useEffect(() => {
    (async () => {
      const permission = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(permission);
    })();
  }, []);

  return (
    <View style={styles.container}>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      {/* <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} /> */}
      <View
        style={{
          flex: 1,
          alignItems: "center",
          width: "100%",
          paddingHorizontal: 15,
          paddingTop: hp(120),
          paddingBottom: hp(50),
        }}
      >
        {/* TODO fix camera not shuting down after closing modal */}
        {cameraPermission?.granted && (
          <Camera
            style={{ width: "90%", height: "50%" }}
            type={CameraType.back}
            onBarCodeScanned={(code) => {
              if (code.type === "org.iso.QRCode") {
                Alert.alert("Code Scanned " + code.data);
                navigation.navigate("Root");
              }
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default ModalScreen;
