import React from "react";

import { CommonScreenProps } from "../../../../common/navigation/types";

import FeatureScreen from "../../../feature/FeatureScreen";
import { GiftEasy } from "../../../../../assets/images";
import { RequestIcon } from "../../../../../assets/svg";

const GiftCardChoice = ({
  navigation,
  route,
}: CommonScreenProps<"RecurringTransfer">) => {
  return (
    <FeatureScreen
      headerTitle="Giftcards"
      Icon={RequestIcon}
      navigation={navigation}
      route={route}
      featureTitle={"The choice is yours"}
      featureText={
        "Choose from a wide variety of Gift Cards, from multiple regions."
      }
      nextScreenToNavigateTo={"GiftCardFit"}
      isImage
      imageSource={GiftEasy}
      buttontitle={"Continue"}
    />
  );
};

export default GiftCardChoice;
