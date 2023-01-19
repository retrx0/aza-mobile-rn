import React from "react";

import { CommonScreenProps } from "../../common/navigation/types";

import CommonRequestScreen from "./components/split/CommonRequestScreen";

const IncomingSplitRequestsScreen = ({
  navigation,
  route,
}: CommonScreenProps<"IncomingSplitRequests">) => {
  return (
    <CommonRequestScreen
      type="incoming"
      navigation={navigation}
      route={route}
    />
  );
};

export default IncomingSplitRequestsScreen;
