/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types/types.navigation";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/app")],
  config: {
    screens: {
      Welcome: {},
      QRCode: {
        path: "/qrcodes",
        parse: { accountNumber: Number },
        exact: true,
      },
      SignIn: { path: "/qrcode", parse: { accountNumber: Number } },
      SignUp: {},
      Root: {
        screens: {
          Home: {
            screens: {
              HomeTab: "one",
            },
          },
          Vault: {
            screens: {
              VaultTab: "two",
            },
          },
          Payments: { screens: {} },
          Profile: { screens: {} },
          Settings: { screens: {} },
        },
      },
      NotFound: "*",
    },
  },
};

export default linking;
