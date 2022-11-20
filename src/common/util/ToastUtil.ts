import Toast from "react-native-toast-message";

export const toastError = (text1: string) => {
  toastShow("error", text1);
};

export const toastWarning = (text1: string) => {
  toastShow("warning", text1);
};

export const toastInfo = (text1: string) => {
  toastShow("info", text1);
};

export const toastSuccess = (text1: string) => {
  toastShow("success", text1);
};

const toastShow = (
  type: "success" | "error" | "warning" | "info",
  text1: string
) => {
  Toast.show({ type: type, text1: text1 });
};
