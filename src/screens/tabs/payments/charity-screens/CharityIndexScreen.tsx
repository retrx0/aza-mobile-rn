import React, { useState } from "react";
import { Image, ScrollView, StyleSheet } from "react-native";
import { View as View, Text as Text } from "../../../../theme/Themed";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { UnderlinedInput } from "../../../../components/input/UnderlinedInput";
import { AIrtimeStyles as styles } from "../airtime-screens/styles";
import ListItem from "../sub-components/ListItem";
// import {
//   Chess,
//   DORCAS,
//   FOUNTAIN,
//   HOPE,
//   ICICE,
//   IET,
//   IREDE,
//   OVIE,
//   REAL,
//   SAINTS,
//   SAVE,
//   TIMEOUT,
//   YARA,
// } from "../../../../../assets/images";
import { RootTabScreenProps } from "../../../../../types";
import { hp } from "../../../../common/util/LayoutUtil";
import { CharityCard, CharityList } from "../sub-components/Filters";
import { useAppSelector } from "../../../../redux";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../../theme";
export default function CharityIndexScreen({
  navigation,
}: RootTabScreenProps<"Payments">) {
  // set all the items in the array to state
  const [allCharity, setCharity] = useState([...CharityList]);

  // create filter function to be passed into thr onchangetext
  const filterSearch = (value: string) => {
    // assign item to be filtered to all the available item
    const ListtoFilter = allCharity;
    // return the overall items if value is not input yet
    if (!value) {
      return setCharity([...CharityList]);
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
        placeholder="Search for charitable organizations"
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

{
  /* <ListItem
          onPress={() => {}}
          route=""
          index={2}
          title="ICICE"
          Icon={() => <Image style={styles2.img} source={ICICE} />}
        />
        <ListItem
          onPress={() => {}}
          route=""
          index={2}
          title="IET"
          Icon={() => <Image style={styles2.img} source={IET} />}
        />
        <ListItem
          onPress={() => {}}
          route=""
          index={2}
          title="Living Fountain Orphange"
          Icon={() => <Image style={styles2.img} source={FOUNTAIN} />}
        />
        <ListItem
          onPress={() => {}}
          route=""
          index={2}
          title="Little Saints Orphanage"
          Icon={() => <Image style={styles2.img} source={SAINTS} />}
        />
        <ListItem
          onPress={() => {}}
          route=""
          index={2}
          title="Hope Motherless Babies Home"
          Icon={() => <Image style={styles2.img} source={HOPE} />}
        />
        <ListItem
          onPress={() => {
            navigation.navigate("Common", {
              screen: "CharityDetail",
              params: { name: "Chess in Slums" },
            });
          }}
          route=""
          index={0}
          title="Chess in Slums"
          Icon={() => <Image style={styles2.img} source={Chess} />}
        />

        <ListItem
          onPress={() => {}}
          route=""
          index={2}
          title="Aunty Dorcas Orphanage"
          Icon={() => <Image style={styles2.img} source={DORCAS} />}
        />
        <ListItem
          onPress={() => {}}
          route=""
          index={2}
          title="Timeout 4 Africa"
          Icon={() => <Image style={styles2.img} source={TIMEOUT} />}
        />
        <ListItem
          onPress={() => {}}
          route=""
          index={2}
          title="Save the Children"
          Icon={() => <Image style={styles2.img} source={SAVE} />}
        />
        <ListItem
          onPress={() => {}}
          route=""
          index={2}
          title="The Irede Foundation"
          Icon={() => <Image style={styles2.img} source={IREDE} />}
        />
        <ListItem
          onPress={() => {}}
          route=""
          index={2}
          title="The CeCe Yara Foundation"
          Icon={() => <Image style={styles2.img} source={YARA} />}
        />
        <ListItem
          onPress={() => {}}
          route=""
          index={2}
          title="Keeping it real Foundation"
          Icon={() => <Image style={styles2.img} source={REAL} />}
        />
        <ListItem
          onPress={() => {}}
          route=""
          index={2}
          title="Ovie Brume Foundation"
          Icon={() => <Image style={styles2.img} source={OVIE} />}
        /> */
}
