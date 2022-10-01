// `@expo/config` is installed with the `expo` package
// ensuring the versioning is correct.
import { ExpoConfig, ConfigContext } from "@expo/config";

// import Constants from 'expo-constants';

// const appConfig = Constants.manifest;

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  hooks: {
    postPublish: [
      {
        file: 'sentry-expo/upload-sourcemaps',
        config: {
          organization: process.env.SENTRY_ORG,
          project: process.env.SENTRY_PROJECT,
          authToken: process.env.SENTRY_AUTH_TOKEN,
        }
      }
    ]
  }
});
