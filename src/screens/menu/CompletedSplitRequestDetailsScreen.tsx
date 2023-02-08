import { CommonScreenProps } from "../../common/navigation/types";

import CommonRequestDetailScreen from "./components/split/CommonRequestDetailScreen";
import useNavigationHeader from "../../hooks/useNavigationHeader";

const CompletedSplitRequestDetailsScreen = ({
  navigation,
  route,
}: CommonScreenProps<"CompletedSplitRequestDetails">) => {
  useNavigationHeader(navigation, "Request details");

  const { requestItem } = route.params;

  return <CommonRequestDetailScreen requestDetails={requestItem} />;
};

export default CompletedSplitRequestDetailsScreen;
