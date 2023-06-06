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
    dispatch(
      getUserTransactions({
        accountNumber: user.aza9PSBAccountNumber,
      })
    );
    await dispatch(getUserAccountDetails());
    setRefreshing(false);
  };

  // fetch(
  //   process.env.ENV === ENV_DEVELOPMENT
  //     ? API_BASE_URL_DEV.replace("\\", "")
  //     : process.env.ENV === ENV_TESTING
  //     ? API_BASE_URL_TST.replace("\\", "")
  //     : API_BASE_URL_PROD.replace("\\", "") +
  //       `/api/v1/account/${user.aza9PSBAccountNumber}/transactions`,
  //   {
  //     headers: {
  //       "X-API-KEY":
  //         process.env.ENV === ENV_DEVELOPMENT
  //           ? API_KEY_DEV
  //           : process.env.ENV === ENV_TESTING
  //           ? API_KEY_TST
  //           : API_KEY_PROD,
  //       "Content-Type": "application/json",
  //     },
  //   }
  // )
  //   .then((data) => console.log(data))
  //   .catch((e) => console.log(e));

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
          {user.bvnVerified && user.aza9PSBAccountNumber === null ? (
            <CreateWallet
              navigation={navigation}
              route={route}
              isWalletCreated={user.aza9PSBAccountNumber !== null}
            />
          ) : // <NotificationsContainer navigation={navigation} route={route} />
          null}
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
