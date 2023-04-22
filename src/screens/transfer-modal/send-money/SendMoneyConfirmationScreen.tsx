import React from "react";

import { CommonScreenProps } from "../../../common/navigation/types";
import TransactionConfirmationScreen from "../common/TransactionConfirmationScreen";

const SendMoneyConfirmationScreen = ({
  navigation,
  route,
}: CommonScreenProps<"SendMoneyConfirmation">) => {
  return (
    <TransactionConfirmationScreen
      navigation={navigation}
      route={route}
      confirmationType={"send"}
    />
  );
};

export default SendMoneyConfirmationScreen;
