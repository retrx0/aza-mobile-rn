import { Image, Alert, View as View2 } from "react-native";
import { captureRef } from "react-native-view-shot";
import * as MediaLibrary from "expo-media-library";
import QRCode from "react-native-qrcode-svg";
import { View, Text } from "../../theme/Themed";
import ButtonWithUnderline from "../../components/buttons/CancelButtonWithUnderline";

import Colors from "../../constants/Colors";
import { hp } from "../../common/util/LayoutUtil";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { RootStackScreenProps } from "../../types/types.navigation";

import { useAppDispatch, useAppSelector } from "../../redux";
import { selectUser } from "../../redux/slice/userSlice";
import { getDefaultPictureUrl } from "../../common/util/AppUtil";
import {
  selectTransaction,
  setQRPaymentAmount,
} from "../../redux/slice/transactionSlice";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getAppTheme } from "../../theme";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import { toastError, toastInfo } from "../../common/util/ToastUtil";
import useNavigationHeader from "../../hooks/useNavigationHeader";
import Button from "../../components/buttons/Button";
import { useRef, useState } from "react";
import { APP_SCHEME } from "../../constants/AppConstants";

const QRCodeScreen = ({ navigation }: RootStackScreenProps<"QRCode">) => {
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));
  const [, requestPermission] = MediaLibrary.usePermissions();

  const user = useAppSelector(selectUser);
  const { qrPaymentAmount } = useAppSelector(selectTransaction);
  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();

  const [amount, setAmount] = useState(0);
  const imageRef = useRef<React.LegacyRef<View2>>();

  useNavigationHeader(navigation, "QR Transactions");

  const captureScreenAndSaveToGallery = async () => {
    const permission = await requestPermission();

    if (permission.granted) {
      try {
        const localUri = await captureRef(imageRef, {
          quality: 1,
          format: "jpg",
        });

        await MediaLibrary.saveToLibraryAsync(localUri);
        if (localUri) {
          toastInfo("QR Code saved to images");
          navigation.goBack();
        }
      } catch (e) {
        console.error("Oops, snapshot failed", e);
        toastError("Could not save QR Code to images!");
      }
    } else {
      Alert.alert("Permission not granted");
    }
  };

  // JSON.stringify({
  //   azaAccountNumber: user.azaAccountNumber,
  //   fullName: user.fullName,
  //   amount: qrPaymentAmount,
  // } as IQRScanTransactionData)

  return (
    <SpacerWrapper>
      <View style={{ flex: 1, marginTop: 15 }}>
        <View2
          // @ts-ignore
          ref={imageRef}
          collapsable={false}
          style={{ padding: 10, margin: 15 }}
        >
          <View style={{ alignItems: "center" }}>
            <Image
              style={{
                borderRadius: 50,
                width: 50,
                height: 50,
              }}
              source={{
                uri:
                  user.pictureUrl && user.pictureUrl !== ""
                    ? user.pictureUrl
                    : getDefaultPictureUrl({
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
                fontSize: hp(14),
                marginVertical: 15,
              }}
            >
              {user.fullName}
            </Text>
            {/* <View style={[CommonStyles.row]}>
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
      {numberWithCommas(transaction.amount)}
    </Text>
  </View> */}
          </View>
          <View style={{ alignSelf: "center" }}>
            <QRCode
              value={`${APP_SCHEME}://app/qrcode?accountNumber=${
                user.azaAccountNumber
              }&fullName=${user.fullName}&amount=${
                qrPaymentAmount ? qrPaymentAmount : ""
              }`}
              size={280}
              logo={require("../../../assets/images/app/-aza-app-icon-white.png")}
              logoSize={50}
              logoBorderRadius={10}
              backgroundColor={Colors[appTheme].background}
              color={
                appTheme === "dark" ? Colors.dark.mainText : Colors.light.text
              }
            />
          </View>
        </View2>

        <View style={[]}>
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
          <Button
            title="Set Amount"
            styleText={{}}
            style={{ marginBottom: 10, marginTop: 20 }}
            onPressButton={() => {
              navigation.navigate("QRReceivePayment");
            }}
          />
          <ButtonWithUnderline
            title="Reset Amount"
            color={Colors[appTheme].backgroundSecondary}
            onPressButton={() => dispatch(setQRPaymentAmount(undefined))}
            style={{ marginVertical: 10 }}
          />
          <ButtonWithUnderline
            title="Save to Gallery"
            color={Colors[appTheme].backgroundSecondary}
            onPressButton={captureScreenAndSaveToGallery}
            style={{ marginVertical: 10 }}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default QRCodeScreen;
