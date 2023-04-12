/// SOP

import { BarCodeScanner } from "expo-barcode-scanner";
import { BarCodeScanningResult, PermissionResponse } from "expo-camera";
import { toastError } from "../../common/util/ToastUtil";
import { QR_CODE_SCAN_ISO } from "../../constants/AppConstants";
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
    console.log(scannedCodeData);
    if (scannedCodeData.amount) {
      dispatch(
        setTransaction({
          amount: Number(scannedCodeData.amount),
          transferType: "send",
          beneficiary: {
            azaAccountNumber: scannedCodeData.azaAccountNumber,
            fullName: scannedCodeData.fullName,
            beneficiaryName: scannedCodeData.azaAccountNumber,
          },
          recurring: false,
          description: "",
        })
      );
      navigation.navigate("Common", {
        screen: "SendMoneyConfirmation",
      });
    } else {
      navigation.navigate("Common", {
        screen: "TransactionKeypad",
        params: {
          transactionType: {
            type: "normal",
            transaction: "send",
            beneficiary: {
              azaAccountNumber: scannedCodeData.azaAccountNumber,
              fullName: scannedCodeData.fullName,
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
      console.log("Code Scanned " + code.data);
      const parsedString = JSON.parse(
        JSON.stringify(parseQueryString(code.data.split("?")[1]))
      );
      handleCodeScanned(parsedString as IQRScanTransactionData);
      flag = true;
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
