import * as LocalAuthentication from "expo-local-authentication";

const useAppBiometricAuthentication = () => {
  const authenticateWithBiometrics = async (enabled: boolean | undefined) => {
    const hasBiometricHardware = await LocalAuthentication.hasHardwareAsync();
    const biometricEnrolled = await LocalAuthentication.isEnrolledAsync();

    if (hasBiometricHardware && biometricEnrolled) {
      console.debug("biometric enroled");
      // Check if user enabled biometrics
      if (enabled) {
        console.debug("biometric preference is enabled");
        const authenticated = await LocalAuthentication.authenticateAsync({
          disableDeviceFallback: true,
        });
        if (authenticated.success) {
          // biometrics authenticated
          return true;
        }
      } else {
        console.debug("biometric preference is disabled");
        return false;
      }
    } else {
      console.debug("biometric not enroled");
      return false;
    }
  };

  return { authenticateWithBiometrics };
};

export default useAppBiometricAuthentication;
