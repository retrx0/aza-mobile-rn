import React from "react";

import SpacerWrapper from "../../../common/util/SpacerWrapper";
import { CommonScreenProps } from "../../../common/navigation/types";
import TransactionConfirmationScreen from "../common/TransactionConfirmationScreen";

const RequestMoneyConfirmationScreen = ({
  navigation,
  route,
}: CommonScreenProps<"Common">) => {
  return (
    <SpacerWrapper>
      <TransactionConfirmationScreen
        navigation={navigation}
        route={route}
        confirmationType={"request"}
      />
    </SpacerWrapper>
  );
};

export default RequestMoneyConfirmationScreen;
