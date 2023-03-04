import { View, Text } from "react-native";
import { ToastConfig, ToastData, ToastProps } from "react-native-toast-message";
import { hp } from "../../../common/util/LayoutUtil";

export const toastConfig: ToastConfig = {
  error: ({ text1, text2 }: ToastData) => (
    <ToastFrame
      text1={text1!}
      backgroundColor={"#FF624D"}
      textColor={"white"}
      title={""}
    />
  ),
  success: ({ text1, text2 }: ToastData) => (
    <ToastFrame
      text1={text1!}
      backgroundColor={"#35C81D"}
      textColor={"white"}
      title={""}
    />
  ),
  warning: ({ text1, text2 }: ToastData) => (
    <ToastFrame
      text1={text1!}
      backgroundColor={"#FEF2DE"}
      textColor={"black"}
      title={""}
    />
  ),
  info: ({ text1, text2 }: ToastData) => (
    <ToastFrame
      text1={text1!}
      backgroundColor={"#EAEAEC"}
      textColor={"black"}
      title={""}
    />
  ),
};

const ToastFrame = ({
  text1,
  backgroundColor,
  textColor,
}: {
  textColor: string;
  backgroundColor: string;
  title: string;
  text1: string;
}) => {
  return (
    <View
      style={{
        height: hp(55),
        width: "90%",
        backgroundColor: backgroundColor,
        borderRadius: 4,
        paddingHorizontal: 20,
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          marginTop: "auto",
          marginBottom: "auto",
          fontSize: 14,
          fontFamily: "Euclid-Circular-A-Medium",
          color: textColor,
        }}
      >
        {text1}
      </Text>
    </View>
  );
};
