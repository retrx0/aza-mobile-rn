import { StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";

import { CommonScreenProps } from "../../common/navigation/types";

import BackButton from "../../components/buttons/BackButton";
import { View, Text } from "../../theme/Themed";

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
          // lightColor={Colors.light.text}
          // darkColor={Colors.dark.mainText}
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

  const splitsListItems = [
    {
      name: "Genesis Cinemas",
      amount: "20000",
      date: "4 July 2022 04:26",
      splitImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwCw2MbJZQFCcrpjKNlU9z6nui49AWU1_ugpJSQ_wnCQ&s",
    },

    {
      name: "Dominos Pizza",
      amount: "20000",
      date: "4 July 2022 04:26",
      splitImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaMOJNvXvTf1AXZPV2rb9mTsLmmbOmpP6HRpY1m7Shrg&s",
    },
    {
      name: "Shoprite",
      amount: "20000",
      date: "4 July 2022 04:26",
      splitImage:
        "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/euekjcgbe0dvisaiaave",
    },
    {
      name: "Coldstone",
      amount: "20000",
      date: "4 July 2022 04:26",
      splitImage:
        "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0015/5896/brand.gif?itok=zz5CU4h4",
    },
    {
      name: "KFC",
      amount: "20000",
      date: "4 July 2022 04:26",
      splitImage:
        "https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png",
    },
    {
      name: "Spar",
      amount: "20000",
      date: "4 July 2022 04:26",
      splitImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCn5MDl2t5R6q_ruYa59ci9jC1YcnODV75m7xUJSw&s",
    },
    {
      name: "Burger King",
      amount: "20000",
      date: "4 July 2022 04:26",
      splitImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6onjv5GD_gILUQtKFV4kXBKWGwwKGPdAQa7CfdXkw3Q&s",
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
