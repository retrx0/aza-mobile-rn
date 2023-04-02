import React from "react";

import { CommonScreenProps } from "../../../common/navigation/types";
import TransactionScreen from "../common/TransactionScreen";

const RequestMoneyScreen = ({
  navigation,
  route,
}: CommonScreenProps<"RequestMoney">) => {
  return (
    <TransactionScreen
      navigation={navigation}
      route={route}
      headerTitle={"Request Money"}
      featureNavigationScreen={"RequestMoneyFeature"}
      screenFor={"request"}
      type={"normal"}
    />
  );
};

export default RequestMoneyScreen;
