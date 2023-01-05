import React from "react";

import { CommonScreenProps } from "../../../../common/navigation/types";

import FeatureScreen from "../../../feature/FeatureScreen";
import { CHARITY } from "../../../../../assets/images";
import { RequestIcon } from "../../../../../assets/svg";

const CharityFeature = ({
  navigation,
  route,
}: CommonScreenProps<"RecurringTransfer">) => {
  return (
    <FeatureScreen
      Icon={RequestIcon}
      headerTitle="Giftcards"
      navigation={navigation}
      route={route}
      featureTitle={"Be the difference"}
      featureText={
        "Make a difference by donating to charities you genuinely believe in. Azarians are also making a difference just by using Aza, since 10% of Aza's quarterly profits goes to charity organizations."
      }
      nextScreenToNavigateTo={"CharitySupport"}
      isImage
      imageSource={CHARITY}
      buttontitle={"Continue"}
    />
  );
};

export default CharityFeature;
