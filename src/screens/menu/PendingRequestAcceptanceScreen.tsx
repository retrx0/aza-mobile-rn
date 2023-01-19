import React, { useLayoutEffect } from "react";
import { StyleSheet, Image, ScrollView } from "react-native";

import { CommonScreenProps } from "../../common/navigation/types";

import BackButton from "../../components/buttons/BackButton";
import { View, Text } from "../../theme/Themed";

import Button from "../../components/buttons/Button";
import CancelButtonWithUnderline from "../../components/buttons/CancelButtonWithUnderline";

import Colors from "../../constants/Colors";
import { hp } from "../../common/util/LayoutUtil";
import CommonStyles from "../../common/styles/CommonStyles";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CommonRequestDetailScreen from "./components/split/CommonRequestDetailScreen";

const IncomingSplitRequestAcceptanceScreen = ({
  navigation,
  route,
}: CommonScreenProps<"IncomingSplitRequestAcceptance">) => {
  const insets = useSafeAreaInsets();
  const { requestItem } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "500",
          }}
        >
          {requestItem.type === "incoming" ? "Incoming" : "Outgoing"} Request
        </Text>
      ),
      // hide default back button which only shows in android
      headerBackVisible: false,
      //center it in android
      headerTitleAlign: "center",
      headerShadowVisible: false,
      headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
    });
  }, []);

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
});
