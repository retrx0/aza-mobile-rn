import { Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { View as View, Text as Text } from "../../../../../theme/Themed";
import CommonStyles from "../../../../../common/styles/CommonStyles";
import { UnderlinedInput } from "../../../../../components/input/UnderlinedInput";
import { AIrtimeStyles as styles } from "../../airtime-screens/styles";
// import ListItem from "../sub-components/ListItem";
// import {
//   cobra,
//   ipnx,
//   legend,
//   Ntel,
//   smile,
//   Spectranet,
//   SWIFT,
// } from "../../../../../assets/images";
import { RootTabScreenProps } from "../../../../../../types";
import { hp } from "../../../../../common/util/LayoutUtil";
import { InternetCard, InternetList } from "../../sub-components/Filters";
import { useAppSelector } from "../../../../../redux";
import { selectAppTheme } from "../../../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../../../theme";
export default function InternetRecurring({
  navigation,
}: RootTabScreenProps<"Payments">) {
  // set all the items in the array to state
  const [allInternet, setInternet] = useState([...InternetList]);

  // create filter function to be passed into thr onchangetext
  const filterSearch = (value: string) => {
    // assign item to be filtered to all the available item
    const ListtoFilter = allInternet;
    // return the overall items if value is not input yet
    if (!value) {
      return setInternet([...InternetList]);
    }
    // filter the item here and check for all cases of input(its included in the data to filter, and not case sensitive )
    const filterItem = ListtoFilter.filter((item: { title: string }) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    // display filtered data
    setInternet([...filterItem]);
  };

  const handleAction = (title: string) => {
    if (title === "Spectranet") {
      return navigation.navigate("Common", {
        screen: "InternetPlanDetail",
        params: { name: "Spectranet" },
      });
    }
  };

  const dataLength = allInternet.length;
  const selectedTheme = useAppSelector(selectAppTheme);
  const appTheme = getAppTheme(selectedTheme);

  return (
    <View style={[CommonStyles.parentContainer, styles2.container]}>
      <UnderlinedInput
        icon={null}
        inputStyle={[
          styles2.input,
          { borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC" },
        ]}
        labelStyle={[styles.label]}
        label=""
        placeholder="Search for internet provider"
        placeholderStyle={{
          fontSize: hp(16),
          fontWeight: "500",
        }}
        onChangeText={(text: any) => filterSearch(text)}
      />

      <View>
        {dataLength < 1
          ? null
          : allInternet.map((item, index) => {
              return (
                <InternetCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  ImageSource={item.ImageSource}
                  index={0}
                  onPress={() => handleAction(item.title)}
                />
              );
            })}
      </View>
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
    width: 36,
    height: 36,
  },
});

{
  /* <ListItem
        onPress={() => {
          navigation.navigate("Common", {
            screen: "InternetPlanDetail",
            params: { name: "Spectranet" },
          });
        }}
        route=""
        index={0}
        title="Spectranet"
        Icon={() => <Image style={styles2.img} source={{ uri: Spectranet }} />}
      />

      <ListItem
        onPress={() => {}}
        route=""
        index={2}
        title="NTEL"
        Icon={() => <Image style={styles2.img} source={{ uri: Ntel }} />}
      />
      <ListItem
        onPress={() => {}}
        route=""
        index={2}
        title="Smile Communications"
        Icon={() => <Image style={styles2.img} source={{ uri: smile }} />}
      />
      <ListItem
        onPress={() => {}}
        route=""
        index={2}
        title="Swift Networks"
        Icon={() => <Image style={styles2.img} source={{ uri: SWIFT }} />}
      />
      <ListItem
        onPress={() => {}}
        route=""
        index={2}
        title="Legend"
        Icon={() => <Image style={styles2.img} source={{ uri: legend }} />}
      />
      <ListItem
        onPress={() => {}}
        route=""
        index={2}
        title="ipNX"
        Icon={() => <Image style={styles2.img} source={{ uri: ipnx }} />}
      />
      <ListItem
        onPress={() => {}}
        route=""
        index={2}
        title="CobraNet"
        Icon={() => <Image style={styles2.img} source={{ uri: cobra }} />}
      /> */
}
