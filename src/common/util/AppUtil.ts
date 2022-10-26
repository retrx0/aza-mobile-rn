import { ENV } from "@env";
import { ENV_DEVELOPMENT } from "../../constants/AppConstants";
import getSymbolFromCurrency from "currency-symbol-map";

export const isEnvDevelopent = ENV === ENV_DEVELOPMENT ? true : false;

export const getCurrencyUnicode = (currencyCode: string) => {
  return getSymbolFromCurrency(currencyCode);
};

export const getInitialsAvatar = (item: {
  firstName: string;
  lastName: string;
  backgroundColor: string;
  foreground: string;
}) => {
  return `https://ui-avatars.com/api/?name=${item.firstName}+${
    item.lastName ? item.lastName : ""
  }&background=${item.backgroundColor}&color=${item.foreground}`;
};
