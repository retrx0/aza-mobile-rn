import { StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import React from "react";

import { CommonScreenProps } from "../../common/navigation/types";

import { View } from "../../theme/Themed";

import Divider from "../../components/divider/Divider";
import SplitListItem from "./components/SplitListItem";

import { hp } from "../../common/util/LayoutUtil";
import SpacerWrapper from "../../common/util/SpacerWrapper";

import { useAppSelector } from "../../redux";
import { selectUser } from "../../redux/slice/userSlice";
import useNavigationHeader from "../../hooks/useNavigationHeader";

const ChooseSplitScreen = ({
  navigation,
}: CommonScreenProps<"ChooseSplit">) => {
  useNavigationHeader(navigation, "Choose Transaction");

  const user = useAppSelector(selectUser);

  return (
    <SpacerWrapper>
      <View style={styles.container}>
        <ScrollView>
          <Divider />
          {user.payments.data.map(
            ({ amount, date, vendorLogo, vendorName }, i) => (
              <View key={i}>
                <TouchableOpacity
                  style={{}}
                  onPress={() =>
                    navigation.navigate("SplitSelectContacts", {
                      amount,
                      date,
                      splitImage: vendorLogo,
                      name: vendorName,
                    })
                  }
                >
                  <SplitListItem
                    key={i}
                    amount={amount}
                    date={date}
                    splitImage={vendorLogo}
                    name={vendorName}
                    showChevron
                    requestor={{ accountNumber: "", fullName: "" }}
                    requestees={[]}
                  />
                </TouchableOpacity>
                <Divider />
              </View>
            )
          )}
        </ScrollView>
      </View>
    </SpacerWrapper>
  );
};

export default ChooseSplitScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
});
