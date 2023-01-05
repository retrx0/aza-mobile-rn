import React from "react";

import FeatureScreen from "../../feature/FeatureScreen";
import { QRFEATURE } from "../../../../assets/images";
import { RequestIcon } from "../../../../assets/svg";
import { CommonScreenProps } from "../../../common/navigation/types";

const QRFeature = ({
  navigation,
  route,
}: CommonScreenProps<"RecurringTransfer">) => {
  return (
    <FeatureScreen
      headerTitle="Giftcards"
      Icon={RequestIcon}
      navigation={navigation}
      route={route}
      featureTitle={"Effortless Payments"}
      featureText={
        "Use our QR Code feature to securely make swift transactions across Aza."
      }
      nextScreenToNavigateTo={"QRTransactions"}
      isImage
      imageSource={QRFEATURE}
      buttontitle={"Go Back to QR Transaction"}
    />
  );
};

export default QRFeature;
