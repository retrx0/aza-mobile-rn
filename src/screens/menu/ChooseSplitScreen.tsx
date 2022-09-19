import { StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";

import { CommonScreenProps } from "../../common/navigation/types";

import BackButton from "../../components/buttons/BackButton";
import { Text, View } from "../../components/Themed";
import Divider from "../../components/divider/Divider";
import SplitListItem from "./components/SplitListItem";

import Colors from "../../constants/Colors";
import { hp } from "../../common/util/LayoutUtil";

const ChooseSplitScreen = ({
  navigation,
}: CommonScreenProps<"ChooseSplit">) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: 16,
          }}
        >
          Split
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

  const splitsListItems = [
    {
      name: "Coldstone",
      amount: "2000000",
      date: "4 July 2022 04:26",
      splitImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThTumpKjOB5PtCkHk3DUZ_6px9A073NcfLPA&usqp=CAU",
    },
    {
      name: "Burger King",
      amount: "120000",
      date: "4 July 2022 04:26",
      splitImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT07WdeXexZ8Igvtni6pY013Wc0K1i9uuWfPA&usqp=CAU",
    },
    {
      name: "KFC",
      amount: "480000",
      date: "4 July 2022 04:26",
      splitImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiwr_jykU8Gdf9mpFXyUFwKAbCEaLFPFJbfA&usqp=CAU",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <Divider />
        {splitsListItems.map(({ amount, date, splitImage, name }, i) => (
          <View key={i}>
            <TouchableOpacity
              style={{}}
              onPress={() =>
                navigation.navigate("SplitSelectContacts", {
                  amount,
                  date,
                  splitImage,
                  name,
                })
              }
            >
              <SplitListItem
                key={i}
                amount={amount}
                date={date}
                splitImage={splitImage}
                name={name}
                showChevron
              />
            </TouchableOpacity>
            <Divider />
          </View>
        ))}
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
