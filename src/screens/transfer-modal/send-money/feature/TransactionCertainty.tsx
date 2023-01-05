import React from "react";
import { CommonScreenProps } from "../../../../common/navigation/types";

import { MoneyTick } from "../../../../../assets/svg";
import FeatureScreen from "../../../feature/FeatureScreen";

const TransactionCertainty = ({
  navigation,
  route,
}: CommonScreenProps<"RecurringTransfer">) => {
  return (
    <FeatureScreen
      headerTitle="Send Money"
      Icon={MoneyTick}
      navigation={navigation}
      route={route}
      featureTitle={"Transaction Certainty"}
      featureText={
        "Send money with Aza and instantly carry on with your life, knowing that the transaction will go through without fail."
      }
      nextScreenToNavigateTo={"InviteUsers"}
      imageSource={undefined}
      isImage={false}
      buttontitle={"Continue"}
    />
  );
};

export default TransactionCertainty;
