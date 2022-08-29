import { ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { PaymentStyles as styles } from "./styles";
import { SafeAreaView, Text, View } from "../../../components/Themed";
import { Header } from "../../../components/text/header";
import HeadrImage from "./sub-components/HeadrImage";
import Divider from "./sub-components/Divider";
import ListItem from "./sub-components/ListItem";
import {
  CableTvIcon,
  DataIcon,
  DropIcon,
  ElectricIcon,
  GiftIcon,
  LoveIcon,
  PieIcon,
  WifiIcon,
} from "../../../../assets/svg";
import { RootTabScreenProps } from "../../../../types";
import { Mtn } from "../../../../assets/images";

export default function Payments({ navigation }: RootTabScreenProps<"Payments">) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Payments</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Common", { screen: "Pie" });
          }}
          style={styles.icon}
        >
          <PieIcon style={styles.imageIcon} />
        </TouchableOpacity>
      </View>
      <Header
        description=""
        headerStyle={null}
        descriptionStyle={null}
        style={styles.subHead}
        heading="Recent Payments"
      />
      <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.imageHeaderContainer}>
        <HeadrImage selected index={0} header="Paid" title="MTN" amount="200" image={Mtn} />
      </ScrollView>

      <ScrollView style={styles.itemListContainer}>
        <Divider />

        <ListItem
          index={0}
          onPress={() => {
            navigation.navigate("Common", { screen: "AirtimeData" });
          }}
          Icon={() => <DataIcon color={"#753FF6"} />}
          title="Airtime & Data"
          route=""
        />

        <ListItem
          index={1}
          onPress={() => {
            navigation.navigate("Common", { screen: "InternetPlans" });
          }}
          Icon={() => <WifiIcon color={"#2A9E17"} />}
          title="Internet"
          route=""
        />

        <ListItem
          index={2}
          onPress={() => {
            navigation.navigate("Common", { screen: "CableTV" });
          }}
          Icon={() => <CableTvIcon color="#FFD200" />}
          title="Cable TV"
          route=""
        />

        <ListItem
          index={3}
          onPress={() => {
            navigation.navigate("Common", { screen: "Electricity" });
          }}
          Icon={() => <ElectricIcon color="#ED8A0A" />}
          title="Electricity"
          route=""
        />

        <ListItem
          index={4}
          onPress={() => {
            navigation.navigate("Common", { screen: "Water" });
          }}
          Icon={() => <DropIcon color="#1198F6" />}
          title="Water"
          route=""
        />

        <ListItem index={5} onPress={() => {}} Icon={() => <GiftIcon color="#BED600" />} title="Gift Cards" route="" />

        <ListItem
          index={6}
          onPress={() => {
            navigation.navigate("Common", { screen: "Charity" });
          }}
          Icon={() => <LoveIcon color="#FF361A" />}
          title="Charity"
          route=""
        />
      </ScrollView>
    </SafeAreaView>
  );
}
