import * as Notifications from "expo-notifications";
import { Platform } from "react-native";
import * as Device from "expo-device";

export const useNotifications = () => {
  //register and get token
  const registerForPushNotificationsAsync = async () => {
    let token;
    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
    } else {
      alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    return token;
  };

  // Local notification
  const schedulePushNotification = async (
    title: string,
    body: string,
    seconds: number,
    data: Record<any, string>
  ) => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title,
        body,
        data,
      },
      trigger: { seconds: seconds },
    });
  };

  // push notification
  const sendPushNotification = async (
    expoPushToken: string,
    title: string,
    body: string,
    data: any
  ) => {
    if (expoPushToken == null || expoPushToken == "null") return;

    const message = {
      to: expoPushToken,
      sound: "default",
      title,
      body,
      data,
      autoDismiss: false,
    };

    const result = await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
    const expoPushResponse = await result.json();
    console.log("expoPushResponse: ", expoPushResponse);
  };

  return {
    registerForPushNotificationsAsync,
    schedulePushNotification,
    sendPushNotification,
  };
};
