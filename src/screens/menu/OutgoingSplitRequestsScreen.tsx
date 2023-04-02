import React from "react";

import { CommonScreenProps } from "../../common/navigation/types";

import CommonRequestScreen from "./components/split/CommonRequestScreen";

const OutgoingSplitRequestsScreen = ({
  navigation,
  route,
}: CommonScreenProps<"OutgoingSplitRequests">) => {
  // OutgoingSplitRequest
  return (
    <CommonRequestScreen
      type="outgoing"
      navigation={navigation}
      route={route}
    />
  );
};

export default OutgoingSplitRequestsScreen;
