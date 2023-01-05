import React from "react";

import { CommonScreenProps } from "../../../../common/navigation/types";

import FeatureScreen from "../../../feature/FeatureScreen";
import { GiftEasy } from "../../../../../assets/images";
import { RequestIcon } from "../../../../../assets/svg";

const GiftCardFit = ({
  navigation,
  route,
}: CommonScreenProps<"RecurringTransfer">) => {
  return (
    <FeatureScreen
      headerTitle="Giftcards"
      Icon={RequestIcon}
      navigation={navigation}
      route={route}
      featureTitle={"Anyhow you see fit"}
      featureText={
        "You can buy a Gift Card either for yourself or for another person and have the code swiftly delivered to the provided Email Address."
      }
      nextScreenToNavigateTo={"GiftCard"}
      isImage
      imageSource={GiftEasy}
      buttontitle={"Go Back To Giftcards"}
    />
  );
};

export default GiftCardFit;
