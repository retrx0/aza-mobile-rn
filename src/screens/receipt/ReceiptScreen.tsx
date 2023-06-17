import {
  StyleSheet,
  View as SCView,
  ScrollView as SCScrollView,
} from "react-native";

import Button from "../../components/buttons/Button";
import ButtonWithUnderline from "../../components/buttons/CancelButtonWithUnderline";
import { UnderlinedInput } from "../../components/input/UnderlinedInput";
import { ScrollView, Text, View } from "../../theme/Themed";

import { AZALightningLogo } from "../../../assets/svg";
import { NAIRA_UNICODE } from "../../constants/AppConstants";
import Colors from "../../constants/Colors";
import { CommonScreenProps } from "../../common/navigation/types";
import { hp } from "../../common/util/LayoutUtil";
import { numberWithCommas } from "../../common/util/NumberUtils";
import { getAppTheme } from "../../theme";

import { useAppSelector } from "../../redux";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import { selectUser } from "../../redux/slice/userSlice";
import { selectTransaction } from "../../redux/slice/transactionSlice";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { toastError, toastInfo } from "../../common/util/ToastUtil";
import { useRef } from "react";
import * as MediaLibrary from "expo-media-library";
import { captureRef } from "react-native-view-shot";
import { Alert } from "react-native";

const ReceiptScreen = ({ navigation, route }: CommonScreenProps<"Receipt">) => {
  const selectedTheme = useAppSelector(selectAppTheme);
  const user = useAppSelector(selectUser);
  const transaction = useAppSelector(selectTransaction);
  const {
    amount,
    beneficiaryName,
    description,
    receivingBank,
    referenceId,
    transactionDate,
    transactionFee,
    transactionType,
  } = route.params;

  const appTheme = getAppTheme(selectedTheme);
  const [, requestPermission] = MediaLibrary.usePermissions();

  const imageRef = useRef();

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
          toastInfo("Receipt saved to images");
          navigation.goBack();
        }
      } catch (e) {
        console.error("Oops, snapshot failed", e);
        toastError("Could not save receipt to images!");
      }
    } else {
      Alert.alert("Permission not granted");
    }
  };

  return (
    <SpacerWrapper>
      <SCView
        // @ts-ignore
        ref={imageRef}
        collapsable={false}
        style={[
          styles.container,
          {
            backgroundColor: Colors[appTheme].background,
            flex: 5,
          },
        ]}
      >
        <AZALightningLogo
          size={25}
          color={appTheme === "dark" ? Colors.dark.mainText : Colors.light.text}
        />
        <Text
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            marginTop: 15,
          }}
        >
          Transaction Receipt
        </Text>
        <Text
          lightColor={Colors.light.error}
          darkColor={Colors.dark.error}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: 24,
            marginVertical: hp(10),
          }}
        >
          {NAIRA_UNICODE + "" + numberWithCommas(amount)}
        </Text>
        <Text
          lightColor={Colors.light.secondaryText}
          darkColor={Colors.dark.secondaryText}
          style={{
            fontSize: 14,
            fontFamily: "Euclid-Circular-A-Medium",
            marginBottom: 5,
          }}
        >
          To
        </Text>
        <Text
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
          }}
        >
          {beneficiaryName}
        </Text>
        <SCScrollView>
          <UnderlinedInput
            icon={null}
            showSoftInputOnFocus={false}
            inputStyle={styles.input}
            labelStyle={[
              styles.label,
              {
                color: Colors[appTheme].secondaryText,
              },
            ]}
            label={"Paid On"}
            value={transactionDate}
          />
          <UnderlinedInput
            icon={null}
            showSoftInputOnFocus={false}
            inputStyle={styles.input}
            labelStyle={[
              styles.label,
              {
                color: Colors[appTheme].secondaryText,
              },
            ]}
            label={"Sender"}
            value={user.fullName}
          />
          <UnderlinedInput
            icon={null}
            showSoftInputOnFocus={false}
            inputStyle={styles.input}
            labelStyle={[
              styles.label,
              {
                color: Colors[appTheme].secondaryText,
              },
            ]}
            label={"Transaction Type"}
            value={transactionType ? transactionType : ""}
          />
          <UnderlinedInput
            icon={null}
            showSoftInputOnFocus={false}
            inputStyle={styles.input}
            labelStyle={[
              styles.label,
              {
                color: Colors[appTheme].secondaryText,
              },
            ]}
            label={"Receiving Bank"}
            value={receivingBank ? receivingBank : undefined}
          />
          <UnderlinedInput
            icon={null}
            showSoftInputOnFocus={false}
            inputStyle={styles.input}
            labelStyle={[
              styles.label,
              {
                color: Colors[appTheme].secondaryText,
              },
            ]}
            label={"Transaction Fee"}
            value={transactionFee}
          />
          <UnderlinedInput
            icon={null}
            showSoftInputOnFocus={false}
            inputStyle={styles.input}
            labelStyle={[
              styles.label,
              {
                color: Colors[appTheme].secondaryText,
              },
            ]}
            label={"Reference ID"}
            value={referenceId ? referenceId : ""}
          />
          <UnderlinedInput
            icon={null}
            showSoftInputOnFocus={false}
            inputStyle={styles.input}
            labelStyle={[
              styles.label,
              {
                color: Colors[appTheme].secondaryText,
              },
            ]}
            label={"Description"}
            value={description}
          />
        </SCScrollView>
      </SCView>
      <View style={{ flex: 1.2 }}>
        <Button
          title="Close Receipt"
          onPressButton={() => navigation.getParent()?.navigate("Home")}
          style={{
            marginTop: 5,
            marginBottom: 15,
          }}
        />
        <ButtonWithUnderline
          title="Save Receipt to gallery"
          color={Colors[appTheme].text}
          onPressButton={captureScreenAndSaveToGallery}
        />
      </View>
    </SpacerWrapper>
  );
};

export default ReceiptScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 30,
  },
  input: {
    width: "100%",
    borderColor: "#EAEAEC",
    borderBottomWidth: 0.3,
    fontFamily: "Euclid-Circular-A-Medium",
    fontWeight: "500",
    fontSize: hp(16),
  },
  label: {
    fontFamily: "Euclid-Circular-A-Medium",
    fontSize: hp(14),
  },
});
