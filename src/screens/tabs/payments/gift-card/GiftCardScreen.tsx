import { Image, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { View as View } from "../../../../theme/Themed";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { UnderlinedInput } from "../../../../components/input/UnderlinedInput";
import { AIrtimeStyles as styles } from "../airtime-screens/styles";
import ListItem from "../sub-components/ListItem";
// import {
//   AMAZON,
//   GOOGLEPLAY,
//   ITUNES,
//   NETFLIX,
//   Nintendo,
//   PSN,
//   RAZER,
//   SEPHORA,
//   STEAM,
//   XBOX,
// } from "../../../../../assets/images";
import { RootTabScreenProps } from "../../../../../types";
import { hp } from "../../../../common/util/LayoutUtil";
import { CharityCard, GiftCardList } from "../sub-components/Filters";
import { useAppSelector } from "../../../../redux";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../../theme";
export default function GiftCardScreen({
  navigation,
}: RootTabScreenProps<"Payments">) {
  // set all the items in the array to state
  const [allCharity, setCharity] = useState([...GiftCardList]);

  // create filter function to be passed into thr onchangetext
  const filterSearch = (value: string) => {
    // assign item to be filtered to all the available item
    const ListtoFilter = allCharity;
    // return the overall items if value is not input yet
    if (!value) {
      return setCharity([...GiftCardList]);
    }
    // filter the item here and check for all cases of input(its included in the data to filter, and not case sensitive )
    const filterItem = ListtoFilter.filter((item: { title: string }) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    // display filtered data
    setCharity([...filterItem]);
  };

  const dataLength = allCharity.length;
  const selectedTheme = useAppSelector(selectAppTheme);
  const appTheme = getAppTheme(selectedTheme);

  return (
    <View style={[CommonStyles.parentContainer, styles2.container]}>
      <UnderlinedInput
        style={styles2.mainInput}
        icon={null}
        inputStyle={[
          styles2.input,
          { borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC" },
        ]}
        labelStyle={styles.label}
        label=""
        placeholder="Search for gift card"
        onChangeText={(text: any) => filterSearch(text)}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {dataLength < 1
          ? null
          : allCharity.map((item, index) => {
              return (
                <CharityCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  ImageSource={item.ImageSource}
                  index={0}
                />
              );
            })}
      </ScrollView>
    </View>
  );
}

const styles2 = StyleSheet.create({
  container: {
    paddingTop: 80,
    padding: 20,
  },
  input: {
    width: "100%",
    borderBottomWidth: 0.3,
    height: 40,
    fontSize: hp(16),
    fontWeight: "500",
    fontFamily: "Euclid-Circular-A",
  },
  mainInput: {
    marginTop: 0,
  },
  img: {
    width: 45,
    height: 45,
  },
});

//  <ListItem
// onPress={() => {
//   navigation.navigate("Common", {
//     screen: "GiftCardDetails",
//   });
// }}
// route=""
// index={2}
// title="iTunes"
// Icon={() => <Image style={styles2.img} source={ITUNES} />}
// />
// <ListItem
// onPress={() => {}}
// route=""
// index={2}
// title="Google Play"
// Icon={() => <Image style={styles2.img} source={GOOGLEPLAY} />}
// />
// <ListItem
// onPress={() => {}}
// route=""
// index={2}
// title="Amazon"
// Icon={() => <Image style={styles2.img} source={AMAZON} />}
// />
// <ListItem
// onPress={() => {}}
// route=""
// index={2}
// title="PSN"
// Icon={() => <Image style={styles2.img} source={PSN} />}
// />
// <ListItem
// onPress={() => {}}
// route=""
// index={2}
// title="Xbox"
// Icon={() => <Image style={styles2.img} source={XBOX} />}
// />
// <ListItem
// route=""
// index={0}
// title="Razer"
// Icon={() => <Image style={styles2.img} source={RAZER} />}
// onPress={undefined}
// />

// <ListItem
// onPress={() => {}}
// route=""
// index={2}
// title="Netflix"
// Icon={() => <Image style={styles2.img} source={NETFLIX} />}
// />
// <ListItem
// onPress={() => {}}
// route=""
// index={2}
// title="Steam"
// Icon={() => <Image style={styles2.img} source={STEAM} />}
// />
// <ListItem
// onPress={() => {}}
// route=""
// index={2}
// title="Sephora"
// Icon={() => <Image style={styles2.img} source={SEPHORA} />}
// />
// <ListItem
// onPress={() => {}}
// route=""
// index={2}
// title="Nintendo"
// Icon={() => <Image style={styles2.img} source={Nintendo} />}
// />
