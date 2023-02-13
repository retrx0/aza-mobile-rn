import { CommonScreenProps } from "../../common/navigation/types";

import CommonRequestDetailScreen from "./components/split/CommonRequestDetailScreen";
import useNavigationHeader from "../../hooks/useNavigationHeader";
import SpacerWrapper from "../../common/util/SpacerWrapper";

const CompletedSplitRequestDetailsScreen = ({
  navigation,
  route,
}: CommonScreenProps<"CompletedSplitRequestDetails">) => {
  useNavigationHeader(navigation, "Request details");

  const { requestItem } = route.params;

  return (
    <SpacerWrapper>
      <CommonRequestDetailScreen requestDetails={requestItem} />
    </SpacerWrapper>
  );
};

export default CompletedSplitRequestDetailsScreen;
