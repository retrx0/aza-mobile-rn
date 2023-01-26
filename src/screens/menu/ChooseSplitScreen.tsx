import { StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";

import { CommonScreenProps } from "../../common/navigation/types";

import BackButton from "../../components/buttons/BackButton";
import { View, Text } from "../../theme/Themed";

import Divider from "../../components/divider/Divider";
import SplitListItem from "./components/SplitListItem";

import { hp } from "../../common/util/LayoutUtil";
import { useAppSelector } from "../../redux";
import { selectUser } from "../../redux/slice/userSlice";

const ChooseSplitScreen = ({
  navigation,
}: CommonScreenProps<"ChooseSplit">) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "600",
          }}
        >
          Choose Transaction
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

  const user = useAppSelector(selectUser);

  return (
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
                  requestor={{ azaAccountNumber: "", fullName: "" }}
                  requestees={[]}
                />
              </TouchableOpacity>
              <Divider />
            </View>
          )
        )}
      </ScrollView>
    </View>
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
