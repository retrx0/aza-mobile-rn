import { StyleSheet } from "react-native";

import { CommonScreenProps } from "../../common/navigation/types";

import { View } from "../../theme/Themed";

import Button from "../../components/buttons/Button";
import CancelButtonWithUnderline from "../../components/buttons/CancelButtonWithUnderline";

import Colors from "../../constants/Colors";
import { hp } from "../../common/util/LayoutUtil";
import CommonStyles from "../../common/styles/CommonStyles";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CommonRequestDetailScreen from "./components/split/CommonRequestDetailScreen";
import useNavigationHeader from "../../hooks/useNavigationHeader";

const IncomingSplitRequestAcceptanceScreen = ({
  navigation,
  route,
}: CommonScreenProps<"IncomingSplitRequestAcceptance">) => {
  const insets = useSafeAreaInsets();
  const { requestItem } = route.params;

  useNavigationHeader(
    navigation,
    `${requestItem.type === "incoming" ? "Incoming" : "Outgoing"} Request`
  );

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <CommonRequestDetailScreen requestDetails={requestItem} />
        {requestItem.type === "incoming" && (
          <View
            style={[
              CommonStyles.passwordContainer,
              { bottom: insets.bottom || hp(45) },
            ]}
          >
            <Button
              title="Accept Request"
              onPressButton={() =>
                navigation.navigate("StatusScreen", {
                  status: "Successful",
                  statusIcon: "Success",
                  statusMessage:
                    "You have successfully accepted the incoming split bill request",
                  navigateTo: "IncomingSplitRequests",
                })
              }
              styleText={{}}
              style={[{}]}
            />
            <CancelButtonWithUnderline
              title="Decline"
              onPressButton={() => navigation.goBack()}
              style={{ borderBottomColor: Colors.general.red }}
              styleText={CommonStyles.cancelStyle}
            />
          </View>
        )}
      </View>
    </SpacerWrapper>
  );
};

export default IncomingSplitRequestAcceptanceScreen;
