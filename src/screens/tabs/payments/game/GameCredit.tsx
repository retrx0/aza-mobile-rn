import React from "react";

import { CommonScreenProps } from "../../../../common/navigation/types";

import FeatureScreen from "../../../feature/FeatureScreen";
import { Text } from "../../../../theme/Themed";
import { GAMES } from "../../../../../assets/images";

const GameCredit = ({
  navigation,
  route,
}: CommonScreenProps<"RecurringTransfer">) => {
  return (
    <FeatureScreen
      headerTitle="GameCredits"
      navigation={navigation}
      route={route}
      featureTitle={"Maximum gaming experience"}
      featureText={
        "Enhance your gameplay by purchasing in-game credits for your favorite video games.."
      }
      nextScreenToNavigateTo={"GameFeature"}
      source={GAMES}
      isImage
    />
  );
};

export default GameCredit;
