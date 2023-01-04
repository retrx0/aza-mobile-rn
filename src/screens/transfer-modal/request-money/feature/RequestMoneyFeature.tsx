import React from "react";

import { CommonScreenProps } from "../../../../common/navigation/types";

import { RequestIcon } from "../../../../../assets/svg";
import FeatureScreen from "../../../feature/FeatureScreen";

const RequestMoneyFeature = ({
  navigation,
  route,
}: CommonScreenProps<"RecurringTransfer">) => {
  return (
    <FeatureScreen
      headerTitle="Request Money"
      Icon={RequestIcon}
      navigation={navigation}
      route={route}
      featureTitle={"Easy and convinient"}
      featureText={
        "Request money from your family and friends in a friendly manner, effortlessly."
      }
      nextScreenToNavigateTo={"RequestMoney"}
      imageSource={undefined}
      isImage={false}
    />
  );
};

export default RequestMoneyFeature;
