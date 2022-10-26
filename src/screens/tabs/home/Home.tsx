import { StyleSheet } from "react-native";

import { View } from "../../../components/Themed";
import { RootTabScreenProps } from "../../../../types";

import AccountDetails from "./components/AccountDetails";
import TransactionOptions from "./components/TransactionOptions";
import LinkBVN from "./components/LinkBVN";
import RecentTransactions from "./components/RecentTransactions";
import { selectAuthIsLoggedIn } from "../../../redux/slice/authSlice";
import { useAppSelector } from "../../../hooks/redux";
import { selectNewUser } from "../../../redux/slice/newUserSlice";
import { useNotifications } from "../../../hooks/useNotifications";

const Home = ({ navigation, route }: RootTabScreenProps<"Home">) => {
  const isLoggedIn = useAppSelector(selectAuthIsLoggedIn);
  console.log("Logged in state: " + isLoggedIn);
  const newUserData = useAppSelector(selectNewUser);
  console.log(newUserData);

  const {
    schedulePushNotification,
    registerForPushNotificationsAsync,
    sendPushNotification,
  } = useNotifications();

  // Testing notification
  // schedulePushNotification("Hi 👋", "Welcome to AZA!!", 1, { a: "b" });

  // registerForPushNotificationsAsync().then((token) => {
  //   if (token) {
  //     sendPushNotification(
  //       token,
  //       "Hello Again 👀",
  //       "This is a push notification",
  //       {}
  //     );
  //   }
  // });

  return (
    <View style={styles.container}>
      <AccountDetails />
      <TransactionOptions navigation={navigation} route={route} />
      <LinkBVN navigation={navigation} route={route} isBvnLinked={true} />
      <RecentTransactions navigation={navigation} route={route} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
});

export default Home;
