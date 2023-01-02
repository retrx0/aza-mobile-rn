import React from "react";

import { CommonScreenProps } from "../../../../common/navigation/types";

import { AddUsers } from "../../../../../assets/svg";
import FeatureScreen from "../../../feature/FeatureScreen";

const InviteUsers = ({
  navigation,
  route,
}: CommonScreenProps<"RecurringTransfer">) => {
  return (
    <FeatureScreen
      headerTitle="Send Money"
      Icon={AddUsers}
      navigation={navigation}
      route={route}
      featureTitle={"Invite new users to Aza"}
      featureText={
        " Azarians can send money to users who don't even use Aza, after which an sms will be sent to those users with a guide on how to create an Aza account."
      }
      nextScreenToNavigateTo={"SendMoney"}
    />
  );
};

export default InviteUsers;
