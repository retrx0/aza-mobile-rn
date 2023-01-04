import React, { useLayoutEffect, useState, useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet } from "react-native";
import { Camera, CameraType, PermissionResponse } from "expo-camera";
import Svg, { Path } from "react-native-svg";

import { View, Text } from "../../../../theme/Themed";

import BackButton from "../../../../components/buttons/BackButton";
import Button from "../../../../components/buttons/Button";

import { CommonScreenProps } from "../../../../common/navigation/types";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";

const ScanCardScreen = ({ navigation }: CommonScreenProps<"ScanCard">) => {
  const [cameraPermission, setCameraPermission] =
    useState<PermissionResponse>();
  const [isScannerOnTop, setScannerIsOnTop] = useState(true);

  const animatedValue = useRef(new Animated.Value(0)).current;

  const startAnimation = (toValue: number) => {
    Animated.timing(animatedValue, {
      toValue,
      duration: 1500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      setScannerIsOnTop(!isScannerOnTop);
    });
  };

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-200, 50],
    extrapolate: "clamp",
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            color: "#E7E9EA",
            fontWeight: "500",
          }}
        >
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
    startAnimation(isScannerOnTop ? 1 : 0);
  }, [isScannerOnTop]);

  useEffect(() => {
    (async () => {
      const permission = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(permission);
    })();
  }, []);

  const renderCurve = (
    edgePosition: "bottomRight" | "bottomLeft" | "topRight" | "topLeft"
  ) => {
    return (
      <View
        style={{
          position: "absolute",
          top:
            edgePosition === "topLeft" || edgePosition === "topRight"
              ? -2
              : undefined,
          right:
            edgePosition === "topRight" || edgePosition === "bottomRight"
              ? -2
              : undefined,
          bottom:
            edgePosition === "bottomRight" || edgePosition === "bottomLeft"
              ? -2
              : undefined,
          left:
            edgePosition === "topLeft" || edgePosition === "bottomLeft"
              ? -2
              : undefined,
          transform: [
            {
              rotate: `${
                edgePosition === "topRight"
                  ? "0deg"
                  : edgePosition === "bottomRight"
                  ? "90deg"
                  : edgePosition === "bottomLeft"
                  ? "180deg"
                  : edgePosition === "topLeft" && "270deg"
              }`,
            },
          ],
          backgroundColor: "transparent",
        }}
      >
        <Svg width={30} height={30}>
          <Path d="M19,0 H 30 V 12 Q27,2 18,0" fill={"rgba(0,0,0, 0.7)"} />
        </Svg>
      </View>
    );
  };

  return (
    <>
      {cameraPermission?.granted && (
        <Camera style={{ flex: 1 }} type={CameraType.back}>
          <View style={styles.container1}>
            <Text
              darkColor={Colors.dark.mainText}
              style={{
                color: "#E7E9EA",
                fontFamily: "Euclid-Circular-A-Medium",
                fontSize: 16,
                textAlign: "center",
                lineHeight: 35,
              }}
            >
              1/2{"\n"}
              Place the front side of card in the purple box
            </Text>
          </View>

          <View style={styles.container2}>
            <Animated.View
              style={[
                styles.scanner,
                {
                  transform: [{ translateY }],
                },
              ]}
            />
            <View style={styles.cardSide} />
            <View style={styles.cardBorder}>
              {renderCurve("topLeft")}
              {renderCurve("topRight")}
              {renderCurve("bottomLeft")}
              {renderCurve("bottomRight")}
            </View>
            <View style={styles.cardSide} />
          </View>

          <View style={styles.container3}>
            <Button
              title="Add Card Manually"
              onPressButton={() =>
                navigation.navigate("AddNewCard", {
                  navigateBackTo: "DebitCreditCards",
                })
              }
              styleText={styles.buttonText}
              style={styles.button}
            />
          </View>
        </Camera>
      )}
    </>
  );
};

export default ScanCardScreen;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: hp(120),
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  container2: {
    backgroundColor: "transparent",
    flexDirection: "row",
    position: "relative",
  },
  scanner: {
    position: "absolute",
    width: "95%",
    margin: "auto",
    borderBottomColor: "#753FF6",
    borderBottomWidth: 2,
    bottom: 50,
    right: 10,
    zIndex: 20,
  },
  cardBorder: {
    position: "relative",
    width: "80%",
    height: 250,
    backgroundColor: "transparent",
    borderRadius: 15,
    borderColor: "#753FF6",
    borderWidth: 2,
  },
  cardSide: { backgroundColor: "rgba(0,0,0, 0.7)", width: "20%", flex: 1 },
  container3: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    flex: 2,
  },
  buttonText: {
    color: "black",
    fontFamily: "Euclid-Circular-A-Medium",
    fontSize: hp(14),
  },
  button: {
    backgroundColor: "#E7E9EA",
    marginTop: "auto",
    marginBottom: "auto",
  },
});
