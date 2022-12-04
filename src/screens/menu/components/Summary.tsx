import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import Modal from "react-native-modal";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { CommonScreenProps } from "../../../common/navigation/types";
import CommonStyles from "../../../common/styles/CommonStyles";
import Button from "../../../components/buttons/Button";
import { Text, View } from "../../../components/Themed";
// import { useNavigation } from "@react-navigation/core";
import { RootTabScreenProps } from "../../../../types";
import navigation from "../../../navigation";
import { hp } from "../../../common/util/LayoutUtil";
// import navigation from "../../../navigation";

type DescriptionModalProps = {
  visible: boolean;
  setModalVisible: (value: boolean) => void;
  navigation: any;
};

const SummaryModal = ({
  visible,
  navigation,
  setModalVisible,
}: DescriptionModalProps) => {
  const colorScheme = useColorScheme();
  // const navigation = useNavigation();

  return (
    <Modal
      isVisible={visible}
      style={{ justifyContent: "flex-end", margin: 0 }}>
      <View
        style={{
          backgroundColor: colorScheme === "dark" ? "#3A3D42" : "#FFFFFF",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingHorizontal: 15,
          paddingTop: 20,
          paddingBottom: 50,
          height: 326,
        }}>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            textAlign: "center",
            marginBottom: hp(20),
            fontWeight: "400",
          }}>
          Download the Summary
        </Text>
        <Text
          // lightColor={Colors.light.text}
          // darkColor={Colors.dark.mainText}
          style={{
            fontSize: hp(16),
            fontFamily: "Euclid-Circular-A",
            textAlign: "center",
            marginBottom: hp(49),
            color: colorScheme === "dark" ? "#999999" : "#000000",
            fontWeight: "400",
          }}>
          Your Monthly Summary document will be sent to your email address
        </Text>

        <Button
          title={"Send PDF File"}
          onPressButton={() => {
            navigation.navigate("StatusScreen", {
              status: "Successful",
              statusIcon: "Success",
              //TODO update message to accept JSX
              statusMessage:
                "Your monthly transaction history has been sent to your email address",
              navigateTo: "Home",
            });
            setModalVisible(false);
          }}
          style={[
            CommonStyles.toAzabutton,
            {
              backgroundColor: colorScheme === "dark" ? "#EAEAEC" : "#121212",
              marginBottom: hp(10),
            },
          ]}
          styleText={{
            color: colorScheme === "dark" ? "#121212" : "#FFFFFF",
          }}
        />
        <Button
          title={"Cancel"}
          onPressButton={() => {
            navigation.goBack();
            setModalVisible(false);
          }}
          style={[
            {
              backgroundColor: colorScheme === "dark" ? "#FF361A" : "#FF361A",
            },
          ]}
          styleText={{
            color: colorScheme === "dark" ? "#FFFFFF" : "#FFFFFF",
          }}
        />
      </View>
    </Modal>
  );
};

export default SummaryModal;
