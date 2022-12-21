import { Modal, StyleSheet } from "react-native";

import { Text, View } from "../../../components/Themed";
import { RootTabScreenProps } from "../../../../types";

import AccountDetails from "./components/AccountDetails";
import TransactionOptions from "./components/TransactionOptions";
import LinkBVN from "./components/LinkBVN";
import RecentTransactions from "./components/RecentTransactions";
import { selectAuthIsLoggedIn } from "../../../redux/slice/authSlice";
import { useAppSelector } from "../../../redux";
import { selectNewUser } from "../../../redux/slice/newUserSlice";
import { useNotifications } from "../../../hooks/useNotifications";
import { hp, wp } from "../../../common/util/LayoutUtil";
import { CautionIcon } from "../../../../assets/svg";
import CEOMessage from "../../onboarding/CEOMessage";
import { useState } from "react";

const Home = ({ navigation, route }: RootTabScreenProps<"Home">) => {
  const [ceoMessageVisible, setceoMessageVisible] = useState(true);

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
      <LinkBVN navigation={navigation} route={route} isBvnLinked={false} />
      <RecentTransactions navigation={navigation} route={route} />
      {/* <Modal visible={ceoMessageVisible}>
        <CEOMessage navigation={navigation} route={route} />
      </Modal> */}
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
