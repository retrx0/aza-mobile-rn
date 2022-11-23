import { Image, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { View } from "../../../../components/Themed";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { Input } from "../../../../components/input/input";
import { AIrtimeStyles as styles } from "../airtime-screens/styles";
import ListItem from "../sub-components/ListItem";
import {
  Chess,
  DORCAS,
  FOUNTAIN,
  HOPE,
  ICICE,
  IET,
  IREDE,
  Ntel,
  OVIE,
  REAL,
  SAINTS,
  SAVE,
  Spectranet,
  TIMEOUT,
  YARA,
} from "../../../../../assets/images";
import { RootTabScreenProps } from "../../../../../types";
import { hp } from "../../../../common/util/LayoutUtil";
import useColorScheme from "../../../../hooks/useColorScheme";

export default function CharityIndexScreen({
  navigation,
}: RootTabScreenProps<"Payments">) {
  const colorScheme = useColorScheme();

  return (
    <View style={[CommonStyles.parentContainer, styles2.container]}>
      <Input
        style={styles2.mainInput}
        icon={null}
        inputStyle={[
          styles2.input,
          {
            borderBottomColor: colorScheme === "dark" ? "#262626" : "#EAEAEC",
          },
        ]}
        labelStyle={styles.label}
        label=""
        placeholder="Search for charitable organizations"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ListItem
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
        />
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
    borderBottomColor: "#EAEAEC",
    borderBottomWidth: 1,
    height: 40,
    fontSize: hp(16),
    fontWeight: "500",
    fontFamily: "Euclid-Circular-A",
  },
  mainInput: {
    marginTop: 0,
    marginBottom: 25,
  },
  img: {
    width: 45,
    height: 45,
  },
});
