import { StyleSheet } from "react-native";

import { RootTabScreenProps } from "../../../../types";

import AccountDetails from "./components/AccountDetails";
import TransactionOptions from "./components/TransactionOptions";
import LinkBVN from "./components/LinkBVN";
import RecentTransactions from "./components/RecentTransactions";
import { useAppSelector } from "../../../redux";
import { useNotifications } from "../../../hooks/useNotifications";
import { selectUser } from "../../../redux/slice/userSlice";
import { View as View } from "../../../theme/Themed";
import NotificationsContainer from "./components/NotificationsContainer";

const Home = ({ navigation, route }: RootTabScreenProps<"Home">) => {
  const {
    schedulePushNotification,
    registerForPushNotificationsAsync,
    sendPushNotification,
  } = useNotifications();

  // Testing notification
  // schedulePushNåotification("Hi 👋", "Welcome to AZA!!", 1, { a: "b" });

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

  const user = useAppSelector(selectUser);

  return (
    <View style={styles.container}>
      <AccountDetails />
      <TransactionOptions navigation={navigation} route={route} />
      {!user.bvnVerified ? (
        <LinkBVN
          navigation={navigation}
          route={route}
          isBvnLinked={user.bvnVerified}
        />
      ) : // <NotificationsContainer navigation={navigation} route={route} />
      null}
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
