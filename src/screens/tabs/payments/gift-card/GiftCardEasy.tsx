import React from "react";

import { CommonScreenProps } from "../../../../common/navigation/types";

import FeatureScreen from "../../../feature/FeatureScreen";
import { GiftEasy } from "../../../../../assets/images";
import { RequestIcon } from "../../../../../assets/svg";

const GiftCardEasy = ({
  navigation,
  route,
}: CommonScreenProps<"RecurringTransfer">) => {
  return (
    <FeatureScreen
      headerTitle="Giftcards"
      Icon={RequestIcon}
      navigation={navigation}
      route={route}
      featureTitle={"Gift Cards made easy"}
      featureText={
        "Purchase any Gift Card of your choice effortlessly with affordable rates."
      }
      nextScreenToNavigateTo={"GiftCardChoice"}
      isImage
      imageSource={GiftEasy}
    />
  );
};

export default GiftCardEasy;
