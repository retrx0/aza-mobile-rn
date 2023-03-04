import { ENV } from "@env";
import { ENV_DEVELOPMENT } from "../../constants/AppConstants";
import getSymbolFromCurrency from "currency-symbol-map";
import Colors from "../../constants/Colors";
import * as Clipboard from "expo-clipboard";

export const isEnvDevelopent = ENV === ENV_DEVELOPMENT ? true : false;

export const getCurrencyUnicode = (currencyCode: string) => {
  return getSymbolFromCurrency(currencyCode);
};

export const getDefaultPictureUrl = (item: {
  firstName: string;
  lastName?: string;
  backgroundColor?: string;
  foreground?: string;
  pictureUrl?: string;
  scheme: "light" | "dark";
}) => {
  if (item.pictureUrl && item.pictureUrl !== "") {
    return item.pictureUrl;
  } else
    return `https://ui-avatars.com/api/?name=${item.firstName}+${
      item.lastName ? item.lastName : ""
    }&background=${Colors[item.scheme].backgroundSecondary}&color=${
      Colors[item.scheme].mainText
    }`;
};

export const copyToClipboard = async (text: string) => {
  await Clipboard.setStringAsync(text);
};
