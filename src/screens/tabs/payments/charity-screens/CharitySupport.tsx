import React from "react";

import { CommonScreenProps } from "../../../../common/navigation/types";

import FeatureScreen from "../../../feature/FeatureScreen";
import { CHARITY } from "../../../../../assets/images";

const CharitySupport = ({
  navigation,
  route,
}: CommonScreenProps<"RecurringTransfer">) => {
  return (
    <FeatureScreen
      headerTitle="Giftcards"
      navigation={navigation}
      route={route}
      featureTitle={"Personalized experience"}
      featureText={
        "Learn more about the charities you support, and donate either in your name or someone else. Azarians can also setup a recurring transfer to automatically donate a certain amount to any charity of their choice at periodic time frames."
      }
      nextScreenToNavigateTo={"Charity"}
      isImage
      imageSource={CHARITY}
    />
  );
};

export default CharitySupport;
