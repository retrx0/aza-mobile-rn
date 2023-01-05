import React from "react";

import { CommonScreenProps } from "../../../../common/navigation/types";

import FeatureScreen from "../../../feature/FeatureScreen";
import { Text } from "../../../../theme/Themed";
import { GAMES } from "../../../../../assets/images";
import { RequestIcon } from "../../../../../assets/svg";

const GameCredit = ({
  navigation,
  route,
}: CommonScreenProps<"RecurringTransfer">) => {
  return (
    <FeatureScreen
      headerTitle="Game Credits"
      navigation={navigation}
      route={route}
      featureTitle={"Maximum gaming experience"}
      featureText={
        "Enhance your gameplay by purchasing in-game credits for your favorite video games.."
      }
      nextScreenToNavigateTo={"GameFeature"}
      imageSource={GAMES}
      isImage
      Icon={RequestIcon}
      buttontitle={"Continue"}
    />
  );
};

export default GameCredit;
