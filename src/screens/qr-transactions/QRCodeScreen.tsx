import React, { useLayoutEffect } from "react";
import { StyleSheet, Image, Alert } from "react-native";
import { captureScreen } from "react-native-view-shot";
import * as MediaLibrary from "expo-media-library";
import { QRCode } from "react-native-custom-qr-codes-expo";

import BackButton from "../../components/buttons/BackButton";
import { Text, View } from "../../components/Themed";
import Button from "../../components/buttons/Button";
import ButtonWithUnderline from "../../components/buttons/CancelButtonWithUnderline";

import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { hp } from "../../common/util/LayoutUtil";
import CommonStyles from "../../common/styles/CommonStyles";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { RootStackScreenProps } from "../../../types";

import { NairaIcon } from "../../../assets/svg";
import { useAppSelector } from "../../redux";
import { selectUser } from "../../redux/slice/userSlice";
import { getInitialsAvatar } from "../../common/util/AppUtil";
import { selectTransaction } from "../../redux/slice/transactionSlice";

const QRCodeScreen = ({ navigation }: RootStackScreenProps<"QRCode">) => {
  const colorScheme = useColorScheme();
  const [, requestPermission] = MediaLibrary.usePermissions();

  const user = useAppSelector(selectUser);
  const transaction = useAppSelector(selectTransaction);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: 16,
          }}>
          QR Transactions
        </Text>
      ),
      // hide default back button which only shows in android
      headerBackVisible: false,
      //center it in android
      headerTitleAlign: "center",
      headerShadowVisible: false,
      headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
    });
  }, []);

  const captureScreenAndSaveToGallery = async () => {
    const permission = await requestPermission();
    permission.granted
      ? captureScreen({
          format: "jpg",
          quality: 0.8,
        }).then(
          (uri) => MediaLibrary.saveToLibraryAsync(uri),
          (error) => console.error("Oops, snapshot failed", error)
        )
      : Alert.alert("Permission not granted");
  };

  return (
    <SpacerWrapper>
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ borderRadius: 50, width: 50, height: 50 }}
            source={{
              uri:
                user.pictureUrl && user.pictureUrl !== ""
                  ? user.pictureUrl
                  : getInitialsAvatar({
                      firstName: user.firstName,
                      lastName: user.lastName,
                      scheme: colorScheme,
                    }),
            }}
          />
          <Text
            lightColor={Colors.light.text}
            darkColor={Colors.dark.mainText}
            style={{
              fontFamily: "Euclid-Circular-A-Semi-Bold",
              fontSize: 14,
              marginVertical: 15,
            }}>
            {user.fullName}
          </Text>
          <View style={[CommonStyles.row]}>
            <NairaIcon
              color={
                colorScheme === "dark"
                  ? Colors.dark.mainText
                  : Colors.light.text
              }
            />
            <Text
              style={{
                color:
                  colorScheme === "dark"
                    ? Colors.dark.mainText
                    : Colors.light.text,
                fontFamily: "Euclid-Circular-A-Semi-Bold",
                fontSize: 24,
                marginLeft: 5,
              }}>
              {transaction.amount}
            </Text>
          </View>
        </View>
        <View style={{ alignSelf: "center" }}>
          <QRCode
            content={JSON.stringify({
              azaNumber: user.azaAccountNumber,
              amount: transaction.amount,
            })}
            codeStyle="circle"
            color={
              colorScheme === "dark" ? Colors.dark.mainText : Colors.light.text
            }
          />
        </View>
        <View
          style={[CommonStyles.col, { marginBottom: hp(100), width: "100%" }]}>
          <Button
            title="Copy Link"
            styleText={{
              color: Colors[colorScheme].buttonText,
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: 14,
            }}
            style={{
              marginBottom: hp(10),
              backgroundColor: Colors[colorScheme].button,
            }}
          />
          <ButtonWithUnderline
            title="Save to Gallery"
            color={Colors[colorScheme].text}
            onPressButton={captureScreenAndSaveToGallery}
            style={{ marginTop: 5 }}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default QRCodeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
});
