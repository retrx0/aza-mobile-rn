import { Image, Alert, ImageSourcePropType } from "react-native";
import { captureScreen } from "react-native-view-shot";
import * as MediaLibrary from "expo-media-library";
import QRCode from "react-native-qrcode-svg";
import { View, Text } from "../../theme/Themed";
import ButtonWithUnderline from "../../components/buttons/CancelButtonWithUnderline";

import Colors from "../../constants/Colors";
import { hp } from "../../common/util/LayoutUtil";
import CommonStyles from "../../common/styles/CommonStyles";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { RootStackScreenProps } from "../../types/types.navigation";

import { AZALightningLogo, NairaIcon } from "../../../assets/svg";
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
import { numberWithCommas } from "../../common/util/NumberUtils";
import useNavigationHeader from "../../hooks/useNavigationHeader";
import Button from "../../components/buttons/Button";
import { useState } from "react";
import { IQRScanTransactionData } from "../../types/types.redux";
import Constants from "expo-constants";
import * as Linking from "expo-linking";
import { APP_SCHEME } from "../../constants/AppConstants";

const QRCodeScreen = ({ navigation }: RootStackScreenProps<"QRCode">) => {
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));
  const [, requestPermission] = MediaLibrary.usePermissions();

  const user = useAppSelector(selectUser);
  const { qrPaymentAmount } = useAppSelector(selectTransaction);
  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();

  const [amount, setAmount] = useState(0);

  useNavigationHeader(navigation, "QR Transactions");

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
              toastInfo("QR Code saved to images");
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

  // JSON.stringify({
  //   azaAccountNumber: user.azaAccountNumber,
  //   fullName: user.fullName,
  //   amount: qrPaymentAmount,
  // } as IQRScanTransactionData)

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
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
        <View style={{ alignSelf: "center", marginTop: hp(40) }}>
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
          <Button
            title="Set Amount"
            styleText={{}}
            style={{ marginBottom: 10 }}
            onPressButton={() => {
              navigation.navigate("QRReceivePayment");
            }}
          />
          <ButtonWithUnderline
            title="Reset Amount"
            color={Colors.general.red}
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
