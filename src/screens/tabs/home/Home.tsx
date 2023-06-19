import { RefreshControl, StyleSheet } from "react-native";

import {
  RootStackScreenProps,
  RootTabScreenProps,
} from "../../../types/types.navigation";

import AccountDetails from "./components/AccountDetails";
import TransactionOptions from "./components/TransactionOptions";
import LinkBVN from "./components/LinkBVN";
import RecentTransactions from "./components/RecentTransactions";
import { useAppDispatch, useAppSelector } from "../../../redux";
import {
  getUserAccountDetails,
  getUserTransactions,
  selectUser,
} from "../../../redux/slice/userSlice";
import { ScrollView, View as View } from "../../../theme/Themed";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import { useState } from "react";
import { ENV_DEVELOPMENT, ENV_TESTING } from "../../../constants/AppConstants";
import {
  API_BASE_URL_DEV,
  API_BASE_URL_PROD,
  API_BASE_URL_TST,
  API_KEY_DEV,
  API_KEY_PROD,
  API_KEY_TST,
} from "@env";
import CreateWallet from "./components/CreateWallet";

const Home = ({
  navigation,
  route,
}: RootTabScreenProps<"Home"> & RootStackScreenProps<"Root">) => {
  const user = useAppSelector(selectUser);
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useAppDispatch();

  const refreshData = async () => {
    setRefreshing(true);
    if (user.walletNumber !== null) {
      dispatch(
        getUserTransactions({
          accountNumber: user.walletNumber,
        })
      );
      await dispatch(getUserAccountDetails());
    }

    setRefreshing(false);
  };

  return (
    <SpacerWrapper>
      <View style={styles.container}>
        <View style={{ flex: user.bvnVerified ? 0.63 : 1.5 }}>
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={refreshData} />
            }
          >
            <AccountDetails />
            <TransactionOptions navigation={navigation} route={route} />
          </ScrollView>

          {!user.bvnVerified ? (
            <LinkBVN
              navigation={navigation}
              route={route}
              isBvnLinked={user.bvnVerified}
            />
          ) : // <NotificationsContainer navigation={navigation} route={route} />
          null}
          {user.bvnVerified && user.walletNumber === null ? (
            <CreateWallet
              navigation={navigation}
              route={route}
              isWalletCreated={user.walletNumber !== null}
            />
          ) : null}
        </View>
        <RecentTransactions navigation={navigation} route={route} />
      </View>
    </SpacerWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    display: "flex",
    flex: 1,
  },
});

export default Home;
