import { Camera, CameraType, FlashMode } from "expo-camera";
import { PermissionResponse } from "expo-image-picker";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, TouchableOpacity } from "react-native";
import { RootStackScreenProps } from "../../../types";
import CommonStyles from "../../common/styles/CommonStyles";
import { hp } from "../../common/util/LayoutUtil";
import ButtonLg from "../../components/buttons/ButtonLg";
import ButtonMd from "../../components/buttons/ButtonMd";
import CancelButtonWithUnderline from "../../components/buttons/CancelButtonWithUnderline";

import { Text, View } from "../../components/Themed";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons";

const ModalScreen = ({ navigation }: RootStackScreenProps<"QRCodeModal">) => {
  const [cameraPermission, setCameraPermission] =
    useState<PermissionResponse>();

  const theme = useColorScheme();

  const [flashLight, setFlashLight] = useState(FlashMode.off);

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
            flashMode={flashLight}
            style={{ width: "95%", height: "70%" }}
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
      <View
        style={[
          CommonStyles.row,
          {
            bottom: 150,
            padding: 20,
            borderRadius: 15,
          },
        ]}
      >
        <View style={[CommonStyles.col, { marginHorizontal: 20 }]}>
          <CancelButtonWithUnderline
            onPressButton={() => navigation.goBack()}
            title="Close"
            color={Colors[theme].text}
          />
        </View>
        <View style={[CommonStyles.col, { marginHorizontal: 20 }]}>
          <TouchableOpacity
            onPress={() =>
              flashLight === FlashMode.torch
                ? setFlashLight(FlashMode.off)
                : setFlashLight(FlashMode.torch)
            }
          >
            <Ionicons
              name="flashlight"
              size={35}
              style={{ color: Colors[theme].Text }}
            />
          </TouchableOpacity>
        </View>
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
