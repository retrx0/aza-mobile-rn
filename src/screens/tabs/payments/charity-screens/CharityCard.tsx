import React from "react";
import { ICharity } from "../../../../redux/types";
import CommonPaymentCard from "../../common/CommonPaymentCard";

export const CharityCard = ({
  index,
  charity,
  onPress,
}: {
  index: number;
  charity: ICharity;
  onPress: () => void;
}) => {
  return (
    <CommonPaymentCard
      index={index}
      itemPictureUrl={charity.pictureUrl}
      itemTitle={charity.charityName}
      onPress={onPress}
    />
  );
};
export default CharityCard;
