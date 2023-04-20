// `@expo/config` is installed with the `expo` package
// ensuring the versioning is correct.
import { ExpoConfig, ConfigContext } from "@expo/config";

import Constants from "expo-constants";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "Aza",
  slug: "aza",
  scheme: "azaapp",
  hooks: {
    postPublish: [
      {
        file: "sentry-expo/upload-sourcemaps",
        config: {
          organization: process.env.SENTRY_ORG,
          project: process.env.SENTRY_PROJECT,
          authToken: process.env.SENTRY_AUTH_TOKEN,
        },
      },
    ],
  },
  android: {
    googleServicesFile: process.env.GOOGLE_SERVICES_JSON,
    package: "com.aza.azaapp",
    permissions: ["NOTIFICATIONS"],
  },
});
