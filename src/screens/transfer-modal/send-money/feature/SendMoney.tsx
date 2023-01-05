import React from "react";

import { CommonScreenProps } from "../../../../common/navigation/types";

import { AzaLOGO } from "../../../../../assets/svg";
import FeatureScreen from "../../../feature/FeatureScreen";

const SendMoneyFeature = ({
  navigation,
  route,
}: CommonScreenProps<"RecurringTransfer">) => {
  return (
    <FeatureScreen
      headerTitle="Send Money"
      Icon={AzaLOGO}
      navigation={navigation}
      route={route}
      featureTitle={"Lightning-fast transaction speed"}
      featureText={
        "Send money to anyone on Aza or other banks at lightning speeds"
      }
      nextScreenToNavigateTo={"TransactionCertainty"}
      imageSource={undefined}
      isImage={false}
      buttontitle={"Continue"}
    />
  );
};

export default SendMoneyFeature;
