import { Image, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { View } from "../../../../components/Themed";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { Input } from "../../../../components/input/input";
import { AIrtimeStyles as styles } from "../airtime-screens/styles";
import ListItem from "../sub-components/ListItem";
import {
  AMAZON,
  GOOGLEPLAY,
  ITUNES,
  NETFLIX,
  NINTENDO,
  PSN,
  RAZER,
  SEPHORA,
  STEAM,
  XBOX,
} from "../../../../../assets/images";
import { RootTabScreenProps } from "../../../../../types";
import { hp } from "../../../../common/util/LayoutUtil";
import useColorScheme from "../../../../hooks/useColorScheme";

export default function GiftCardScreen({
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
        placeholder="Search for gift card"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ListItem
          onPress={() => {
            navigation.navigate("Common", {
              screen: "GiftCardDetails",
            });
          }}
          route=""
          index={2}
          title="iTunes"
          Icon={() => <Image style={styles2.img} source={ITUNES} />}
        />
        <ListItem
          onPress={() => {}}
          route=""
          index={2}
          title="Google Play"
          Icon={() => <Image style={styles2.img} source={GOOGLEPLAY} />}
        />
        <ListItem
          onPress={() => {}}
          route=""
          index={2}
          title="Amazon"
          Icon={() => <Image style={styles2.img} source={AMAZON} />}
        />
        <ListItem
          onPress={() => {}}
          route=""
          index={2}
          title="PSN"
          Icon={() => <Image style={styles2.img} source={PSN} />}
        />
        <ListItem
          onPress={() => {}}
          route=""
          index={2}
          title="Xbox"
          Icon={() => <Image style={styles2.img} source={XBOX} />}
        />
        <ListItem
          route=""
          index={0}
          title="Razer"
          Icon={() => <Image style={styles2.img} source={RAZER} />}
          onPress={undefined}
        />

        <ListItem
          onPress={() => {}}
          route=""
          index={2}
          title="Netflix"
          Icon={() => <Image style={styles2.img} source={NETFLIX} />}
        />
        <ListItem
          onPress={() => {}}
          route=""
          index={2}
          title="Steam"
          Icon={() => <Image style={styles2.img} source={STEAM} />}
        />
        <ListItem
          onPress={() => {}}
          route=""
          index={2}
          title="Sephora"
          Icon={() => <Image style={styles2.img} source={SEPHORA} />}
        />
        <ListItem
          onPress={() => {}}
          route=""
          index={2}
          title="Nintendo"
          Icon={() => <Image style={styles2.img} source={NINTENDO} />}
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
  },
  img: {
    width: 45,
    height: 45,
  },
});
