import { ENV } from "@env";
import { ENV_DEVELOPMENT } from "../../constants/AppConstants";
import getSymbolFromCurrency from "currency-symbol-map";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";

export const isEnvDevelopent = ENV === ENV_DEVELOPMENT ? true : false;

export const getCurrencyUnicode = (currencyCode: string) => {
  return getSymbolFromCurrency(currencyCode);
};

export const getInitialsAvatar = (item: {
  firstName: string;
  lastName?: string;
  backgroundColor?: string;
  foreground?: string;
  scheme: "light" | "dark";
}) => {
  return `https://ui-avatars.com/api/?name=${item.firstName}+${
    item.lastName ? item.lastName : ""
  }&background=${Colors[item.scheme].backgroundSecondary}&color=${
    Colors[item.scheme].mainText
  }`;
};
