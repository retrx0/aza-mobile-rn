import { KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import { CloseCircleLargeIcon } from "../../../../assets/svg";
import Button from "../../../components/buttons/Button";
import { TextInput, View, Text } from "../../../theme/Themed";
import Colors from "../../../constants/Colors";
import Modal from "react-native-modal";
import { TransactionKeypadParamsType } from "../../../common/navigation/types";
import { hp } from "../../../common/util/LayoutUtil";
import { useAppDispatch, useAppSelector } from "../../../redux";
import { getAppTheme } from "../../../theme";
import { selectAppTheme } from "../../../redux/slice/themeSlice";

type DescriptionModalProps = {
  visible: boolean;
  setModalVisible: (value: boolean) => void;
  setDescription: (value: string) => void;
  navigation: any;
  description: string;
  // transactionParams: TransactionKeypadParamsType;
  normalTransaction?: boolean;
  recurringTransaction?: boolean;
  // TODO fix to a proper type
  transactionType: any;
};

const DescriptionModal = ({
  visible,
  setModalVisible,
  navigation,
  description,
  setDescription,
  // transactionParams,
  normalTransaction,
  recurringTransaction,
  transactionType,
}: DescriptionModalProps) => {
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));

  return (
    <Modal
      isVisible={visible}
      style={{ justifyContent: "flex-end", margin: 0 }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "android" ? -900 : 0}
      >
        <TouchableOpacity
          onPress={() => setModalVisible(false)}
          style={{
            backgroundColor: "transparent",
            alignItems: "flex-end",
            marginBottom: 20,
            marginRight: 15,
          }}
        >
          <CloseCircleLargeIcon color={Colors[appTheme].backgroundSecondary} />
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: Colors[appTheme].backgroundSecondary,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingHorizontal: 15,
            paddingTop: 20,
            paddingBottom: 50,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Text
            lightColor={Colors.light.text}
            darkColor={Colors.dark.mainText}
            style={{
              fontFamily: "Euclid-Circular-A-Semi-Bold",
              fontSize: 16,
            }}
          >
            Description
          </Text>
          <Text
            lightColor={Colors.light.text}
            darkColor={Colors.dark.mainText}
            style={{
              marginTop: 10,
              fontSize: 14,
            }}
          >
            You can add a note to this transaction
          </Text>
          <TextInput
            lightColor={Colors.light.mainText}
            darkColor={Colors.dark.mainText}
            placeholder="Description (optional)"
            placeholderTextColor={Colors[appTheme].secondaryText}
            style={{
              backgroundColor: "transparent",
              fontFamily: "Euclid-Circular-A",
              paddingBottom: 5,
              marginVertical: hp(35),
              borderBottomWidth: 1,
              borderBottomColor: Colors[appTheme].separator,
            }}
            onChangeText={(e) => setDescription(e)}
            value={description}
          />
          <Button
            title="Continue"
            onPressButton={() => {
              setModalVisible(false);
              // TODO create and pass proper type for qr transactions
              if (transactionType === null) {
                navigation.navigate("QRCode");
              }
              if (normalTransaction && transactionType.transaction === "send") {
                // TODO create and pass required params
                navigation.navigate("SendMoneyConfirmation");
              } else if (
                normalTransaction &&
                transactionType.transaction === "request"
              ) {
                // TODO create and pass required params
                navigation.navigate("RequestMoneyConfirmation");
              }
            }}
            style={{
              marginVertical: 10,
              width: "100%",
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default DescriptionModal;
