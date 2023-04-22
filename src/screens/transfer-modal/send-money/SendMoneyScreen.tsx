import React from "react";

import { CommonScreenProps } from "../../../common/navigation/types";

import TransactionScreen from "../common/TransactionScreen";

const SendMoneyScreen = ({
  navigation,
  route,
}: CommonScreenProps<"SendMoney">) => {
  return (
    <TransactionScreen
      navigation={navigation}
      route={route}
      headerTitle={"Send Money"}
      featureNavigationScreen={"SendMoneyFeature"}
      screenFor={"send"}
      type={"normal"}
    />
  );
};

export default SendMoneyScreen;
