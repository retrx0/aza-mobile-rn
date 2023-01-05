import React from "react";
import { DEPOSITFEATURE } from "../../../../../../assets/images";
import { RequestIcon } from "../../../../../../assets/svg";
import { CommonScreenProps } from "../../../../../common/navigation/types";

import FeatureScreen from "../../../../feature/FeatureScreen";

const DWithdrawFeature = ({
  navigation,
  route,
}: CommonScreenProps<"RecurringTransfer">) => {
  return (
    <FeatureScreen
      headerTitle="Withdraw"
      Icon={RequestIcon}
      navigation={navigation}
      route={route}
      featureTitle={"Withdraw anytime"}
      featureText={
        "Link your personal bank account to Aza and easily withdraw your Aza funds to your bank."
      }
      nextScreenToNavigateTo={"DepositFeature"}
      isImage
      imageSource={DEPOSITFEATURE}
      buttontitle={"Continue"}
    />
  );
};

export default DWithdrawFeature;
