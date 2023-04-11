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

  return (
    <SpacerWrapper>
      <View style={styles.container}>
        <View style={{ flex: user.bvnVerified ? 0.63 : 1 }}>
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={refreshData} />
            }>
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
        </View>
        <RecentTransactions navigation={navigation} route={route} />
      </View>
    </SpacerWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,

    flex: 1,
  },
});

export default Home;
