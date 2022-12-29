import { Modal, StyleSheet } from "react-native";

// import { View } from "../../../theme/components/View";
// import { Text } from "../../../theme/components/Text";
import { RootTabScreenProps } from "../../../../types";

import AccountDetails from "./components/AccountDetails";
import TransactionOptions from "./components/TransactionOptions";
import LinkBVN from "./components/LinkBVN";
import RecentTransactions from "./components/RecentTransactions";
import { useAppSelector } from "../../../redux";
import { useNotifications } from "../../../hooks/useNotifications";
import { useState } from "react";
import { selectUser } from "../../../redux/slice/userSlice";
import { View2 as View } from "../../../theme/Themed";

const Home = ({ navigation, route }: RootTabScreenProps<"Home">) => {
  const [ceoMessageVisible, setceoMessageVisible] = useState(true);

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
      <LinkBVN
        navigation={navigation}
        route={route}
        isBvnLinked={user.bvnVerified}
      />
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
