import React from "react";
import { StyleSheet } from "react-native";

import { View } from "../../theme/Themed";

import { CommonScreenProps } from "../../common/navigation/types";
import { hp } from "../../common/util/LayoutUtil";
import CommonStyles from "../../common/styles/CommonStyles";
import SpacerWrapper from "../../common/util/SpacerWrapper";

import useNavigationHeader from "../../hooks/useNavigationHeader";
import BankSearchResultView from "../bvn/BankSearchResultView";

const SearchBankScreen = ({
  navigation,
  route,
}: CommonScreenProps<"SearchBank">) => {
  const { screenType } = route.params;

  useNavigationHeader(navigation, "Search Bank");

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.col, styles.container]}>
        <BankSearchResultView
          onPress={({ bankCode, bankName, logoUrl, id }) => {
            navigation.navigate("AddBankAccount", {
              id: id,
              bankName,

              bankCode,
              logoUrl,
              screenType,
            });
          }}
        />
      </View>
    </SpacerWrapper>
  );
};

export default SearchBankScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
});
