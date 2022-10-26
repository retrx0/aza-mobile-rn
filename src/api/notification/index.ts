import * as SecureStore from "expo-secure-store";
import { STORAGE_KEY_JWT_TOKEN } from "@env";
import api from "..";
import { Alert } from "react-native";

export const sendInviteToNonAzaContact = () => {
  SecureStore.getItemAsync(STORAGE_KEY_JWT_TOKEN)
    .then((jwt) => {
      if (jwt) {
        api
          .post(
            "/api/v1/user/invite",
            { phoneNumber: "", email: "" },
            { headers: { Authorization: `Bearer ${jwt}` } }
          )
          .then(() =>
            Alert.alert(
              "Invitation Sent",
              "Your invitation was sent successfully!"
            )
          )
          .catch((e) => {
            console.error(e);
            Alert.alert("Invitation failed", "Your invitation failed to send!");
          });
      }
    })
    .catch((e) => {
      console.error(e);
      Alert.alert("Invitation failed!", "Your invitation failed to send!");
    });
};
