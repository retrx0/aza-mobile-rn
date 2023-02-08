import { StyleSheet } from "react-native";

import { View, Text } from "../../../../theme/Themed";

import CancelButtonWithUnderline from "../../../../components/buttons/CancelButtonWithUnderline";

import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import CommonStyles from "../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { CommonScreenProps } from "../../../../common/navigation/types";
import { DebitCreditCardCurvesDesign } from "../../../../../assets/svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useNavigationHeader from "../../../../hooks/useNavigationHeader";

const ManageCardScreen = ({ navigation }: CommonScreenProps<"ManageCard">) => {
  useNavigationHeader(navigation, "Manage Card");

  const insets = useSafeAreaInsets();

  return (
    <SpacerWrapper>
      <View style={styles.container}>
        <View
          style={[
            CommonStyles.col,
            {
              borderRadius: 10,
              width: "100%",
              height: hp(150),
              backgroundColor: "black",
            },
          ]}
        >
          <View
            style={{
              marginLeft: 50,
              marginTop: "auto",
              backgroundColor: "transparent",
            }}
          >
            <Text
              style={{
                fontFamily: "Euclid-Circular-A-Medium",
                fontSize: hp(16),
                color: "white",
                fontWeight: "500",
              }}
            >
              **** **** **** 1234
            </Text>
            <Text
              style={{
                fontSize: 8,
                marginTop: 8,
                color: "white",
              }}
            >
              Visa - EXP Jul/2023
            </Text>
          </View>
          <View
            style={{
              marginTop: "auto",
              marginRight: "auto",
              backgroundColor: "transparent",
            }}
          >
            <DebitCreditCardCurvesDesign />
          </View>
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}
        >
          <CancelButtonWithUnderline
            title="Delete Card"
            styleText={[CommonStyles.cancelStyle]}
            onPressButton={() => navigation.goBack()}
            style={{ borderBottomColor: Colors.general.red }}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default ManageCardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: hp(25),
  },
});
