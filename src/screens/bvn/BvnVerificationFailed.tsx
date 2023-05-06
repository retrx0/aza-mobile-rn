import React from "react";
import Button from "../../components/buttons/Button";
import { View, Text } from "../../theme/Themed";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import CommonStyles from "../../common/styles/CommonStyles";
import { hp } from "../../common/util/LayoutUtil";
import BackButton from "../../components/buttons/BackButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getAppTheme } from "../../theme";
import { useAppSelector } from "../../redux";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import { CommonScreenProps } from "../../common/navigation/types";
import { BvnError } from "../../../assets/svg";

const BvnVerificationFailed = ({
  navigation,
}: CommonScreenProps<"BvnVerificationFailed">) => {
  const insets = useSafeAreaInsets();
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: hp(20),
            marginBottom: hp(64),
          }}
        >
          <View>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Bold",
              fontSize: hp(16),
              fontWeight: "600",
              marginRight: hp(85),
            }}
          >
            Couldn’t Verify BVN?
          </Text>
        </View>
        <View style={{ alignSelf: "center", marginBottom: 60 }}>
          <BvnError />
        </View>
        <Text
          style={{
            fontFamily: "Euclid-Circular-A-Bold",
            fontSize: hp(24),
            fontWeight: "600",
            alignSelf: "center",
            marginBottom: hp(20),
          }}
        >
          Why can’t i verify my BVN?
        </Text>
        <Text
          style={{
            fontFamily: "Euclid-Circular-A",
            fontSize: hp(16),
            fontWeight: "400",
            maxWidth: 335,
            textAlign: "center",
            alignSelf: "center",
          }}
        >
          A possible reason for that could be due to a name mismatch. Ensure
          that the first and last name provided during sign up matches the name
          format on your other bank accounts..{"\n"}
          {"\n"}
          Use the
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Bold",
              fontSize: hp(16),
              fontWeight: "400",
            }}
          >
            {" "}
            ‘Edit Name’
          </Text>{" "}
          button below to change the name you provided during sign up.
        </Text>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}
        >
          <Button
            title="Edit Name"
            onPressButton={() => navigation.navigate("BvnEditName")}
            styleText={{}}
            style={[{}]}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default BvnVerificationFailed;
