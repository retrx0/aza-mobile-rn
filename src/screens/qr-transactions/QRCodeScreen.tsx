import React, { useLayoutEffect } from "react";
import { Image, Alert } from "react-native";
import { captureScreen } from "react-native-view-shot";
import * as MediaLibrary from "expo-media-library";
import { QRCode } from "react-native-custom-qr-codes-expo";
import BackButton from "../../components/buttons/BackButton";
import { View, Text } from "../../theme/Themed";
import Button from "../../components/buttons/Button";
import ButtonWithUnderline from "../../components/buttons/CancelButtonWithUnderline";

import Colors from "../../constants/Colors";
import { hp } from "../../common/util/LayoutUtil";
import CommonStyles from "../../common/styles/CommonStyles";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { RootStackScreenProps } from "../../../types";

import { NairaIcon } from "../../../assets/svg";
import { useAppSelector } from "../../redux";
import { selectUser } from "../../redux/slice/userSlice";
import { getInitialsAvatar } from "../../common/util/AppUtil";
import { selectTransaction } from "../../redux/slice/transactionSlice";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getAppTheme } from "../../theme";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import { toastError, toastSuccess } from "../../common/util/ToastUtil";

const QRCodeScreen = ({ navigation }: RootStackScreenProps<"QRCode">) => {
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));
  const [, requestPermission] = MediaLibrary.usePermissions();

  const user = useAppSelector(selectUser);
  const transaction = useAppSelector(selectTransaction);
  const insets = useSafeAreaInsets();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: 16,
          }}
        >
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
          format: "png",
          quality: 0.8,
        })
          .then(
            (uri) => {
              MediaLibrary.saveToLibraryAsync(uri);
              toastSuccess("QR Code saved to images");
              navigation.goBack();
            },
            (error) => {
              console.error("Oops, snapshot failed", error);
              toastError("Could not save QR Code to images!");
            }
          )
          .catch((e) => {
            console.debug(e as Error);
            toastError("Could not save QR Code to images!");
          })
      : Alert.alert("Permission not granted");
  };

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
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
                      scheme: appTheme,
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
            }}
          >
            {user.fullName}
          </Text>
          <View style={[CommonStyles.row]}>
            <NairaIcon
              color={
                appTheme === "dark" ? Colors.dark.mainText : Colors.light.text
              }
            />
            <Text
              style={{
                color:
                  appTheme === "dark"
                    ? Colors.dark.mainText
                    : Colors.light.text,
                fontFamily: "Euclid-Circular-A-Semi-Bold",
                fontSize: hp(24),
                marginLeft: 5,
              }}
            >
              {transaction.amount}
            </Text>
          </View>
        </View>
        <View style={{ alignSelf: "center", marginTop: hp(40) }}>
          <QRCode
            content={JSON.stringify({
              azaNumber: user.azaAccountNumber,
              amount: transaction.amount,
            })}
            codeStyle="circle"
            color={
              appTheme === "dark" ? Colors.dark.mainText : Colors.light.text
            }
          />
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.bottom || hp(45) },
          ]}
        >
          {/* <Button
            title="Copy Link"
            styleText={{
              color: Colors[colorScheme].buttonText,
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(14),
            }}
            style={{
              backgroundColor: Colors[colorScheme].button,
            }}
            onPressButton={() => {
              Toast.show({
                type: "info",
                text1: "👍🏻 Link successfully copied!",
              });
            }}
          /> */}
          <ButtonWithUnderline
            title="Save to Gallery"
            color={Colors[appTheme].text}
            onPressButton={captureScreenAndSaveToGallery}
            style={{ marginTop: 5 }}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default QRCodeScreen;
