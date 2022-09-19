import { StyleSheet } from "react-native";

import { View } from "../../../components/Themed";
import { RootTabScreenProps } from "../../../../types";

import AccountDetails from "./components/AccountDetails";
import TransactionOptions from "./components/TransactionOptions";
import LinkBVN from "./components/LinkBVN";
import RecentTransactions from "./components/RecentTransactions";
import { selectAuthIsLoggedIn } from "../../../redux/slice/authSlice";
import { useAppSelector } from "../../../hooks/redux";

const Home = ({ navigation, route }: RootTabScreenProps<"Home">) => {
  const isLoggedIn = useAppSelector(selectAuthIsLoggedIn);
  console.log("Logged in state: " + isLoggedIn);
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
