import React from "react";

import { CommonScreenProps } from "../../../../common/navigation/types";

import FeatureScreen from "../../../feature/FeatureScreen";
import { RequestIcon } from "../../../../../assets/svg";
import { GAMES } from "../../../../../assets/images";

const GameFeature = ({
  navigation,
  route,
}: CommonScreenProps<"RecurringTransfer">) => {
  return (
    <FeatureScreen
      headerTitle="GameCredits"
      Icon={RequestIcon}
      navigation={navigation}
      route={route}
      featureTitle={"You can have it all"}
      featureText={
        "Azarians have the liberty to choose from multiple regions and platforms of their choice. What are you waiting for?."
      }
      nextScreenToNavigateTo={"GameScreen"}
      isImage
      imageSource={GAMES}
    />
  );
};

export default GameFeature;
