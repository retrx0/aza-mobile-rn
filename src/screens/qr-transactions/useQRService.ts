/// SOP

import { BarCodeScanner } from "expo-barcode-scanner";
import { BarCodeScanningResult, PermissionResponse } from "expo-camera";
import { toastError } from "../../common/util/ToastUtil";
import {
  APP_SCHEME,
  PSB_BANK_CODE,
  QR_CODE_SCAN_ISO,
} from "../../constants/AppConstants";
import { setTransaction } from "../../redux/slice/transactionSlice";
import { IQRScanTransactionData } from "../../types/types.redux";
import * as ImagePicker from "expo-image-picker";
import { useAppDispatch, useAppSelector } from "../../redux";
import { selectUser } from "../../redux/slice/userSlice";
import { useState } from "react";
import { RootStackScreenProps } from "../../types/types.navigation";

const useQRService = ({
  navigation,
  route,
}: RootStackScreenProps<"QRTransactions">) => {
  const [cameraPermission, setCameraPermission] =
    useState<PermissionResponse>();
  const dispatch = useAppDispatch();

  let flag = false;

  const handleCodeScanned = (scannedCodeData: IQRScanTransactionData) => {
    if (scannedCodeData.amount) {
      dispatch(
        setTransaction({
          amount: Number(scannedCodeData.amount),
          transferType: "send",
          beneficiary: {
            accountNumber: scannedCodeData.walletNumber,
            fullName: scannedCodeData.fullName,
            beneficiaryName: scannedCodeData.fullName,
            bankCode: PSB_BANK_CODE,
          },
          recurring: false,
          description: "",
        })
      );
      navigation.navigate("Common", {
        screen: "SendMoneyConfirmation",
        params: { transactionType: "INTRA" },
      });
    } else {
      navigation.navigate("Common", {
        screen: "TransactionKeypad",
        params: {
          transactionType: {
            type: "normal",
            transaction: "send",
            beneficiary: {
              accountNumber: scannedCodeData.walletNumber,
              fullName: scannedCodeData.fullName,
              bankCode: PSB_BANK_CODE,
            },
          },
          headerTitle: "QR Payment",
        },
      });
    }
  };

  const parseQueryString = (search: string): Record<string, string> =>
    (search || "")
      .replace(/^\?/g, "")
      .split("&")
      .reduce((acc, query) => {
        const [key, value] = query.split("=");

        if (key) {
          acc[key] = decodeURIComponent(value);
        }

        return acc;
      }, {} as Record<string, string>);

  const onBarCodeScanned = (code: BarCodeScanningResult) => {
    if (code.type === QR_CODE_SCAN_ISO && !flag) {
      if (code.data.includes(APP_SCHEME)) {
        const parsedString = JSON.parse(
          JSON.stringify(parseQueryString(code.data.split("?")[1]))
        ) as IQRScanTransactionData;
        if (parsedString && parsedString.walletNumber)
          handleCodeScanned(parsedString as IQRScanTransactionData);
        else toastError("Invalid QR code");
        flag = true;
      } else {
        toastError("QRCode not for Aza");
      }
    }
  };

  const selectImageFromGalleryAndDecode = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status === "granted") {
        const imageData = await ImagePicker.launchImageLibraryAsync();
        const { uri } = imageData as ImagePicker.ImageInfo;
        const results = await BarCodeScanner.scanFromURLAsync(uri);
        if (results.length > 0) {
          console.log("qr code data: ", results[0].data);

          const parsedString = JSON.parse(
            JSON.stringify(parseQueryString(results[0].data.split("?")[1]))
          );
          handleCodeScanned(parsedString as IQRScanTransactionData);
        } else {
          toastError("The QR code could not be decoded");
        }
      }
    } catch (error) {
      console.debug(error);
    }
  };

  return {
    selectImageFromGalleryAndDecode,
    onBarCodeScanned,
    handleCodeScanned,
  };
};

export default useQRService;
