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
import useColorScheme from "../../../hooks/useColorScheme";
import { hp } from "../../../common/util/LayoutUtil";

export default function Payments({
  navigation,
}: RootTabScreenProps<"Payments">) {
  const scheme = useColorScheme();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Payments</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Common", { screen: "Pie" });
          }}
          style={styles.icon}>
          <PieIcon style={styles.imageIcon} />
        </TouchableOpacity>
      </View>
      <Header
        description=""
        headerStyle={{
          fontFamily: "Euclid-Circular-A",
          fontSize: hp(16),
          fontWeight: "400",
        }}
        descriptionStyle={null}
        style={styles.subHead}
        heading="Recent Payments"
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.imageHeaderContainer}>
        <HeadrImage
          selected
          index={0}
          header="Paid"
          title="MTN"
          amount="2,050"
          image={Mtn}
        />
      </ScrollView>

      <ScrollView style={styles.itemListContainer}>
        <ListItem
          index={0}
          onPress={() => {
            navigation.navigate("Common", { screen: "AirtimeData" });
          }}
          Icon={() => (
            <DataIcon
              color={scheme == "dark" ? "white" : "#753FF6"}
              size={20}
            />
          )}
          title="Airtime & Data"
          route=""
        />

        <ListItem
          index={1}
          onPress={() => {
            navigation.navigate("Common", { screen: "InternetPlans" });
          }}
          Icon={() => (
            <WifiIcon
              color={scheme == "dark" ? "white" : "#2A9E17"}
              size={20}
            />
          )}
          title="Internet"
          route=""
        />

        <ListItem
          index={2}
          onPress={() => {
            navigation.navigate("Common", { screen: "CableTV" });
          }}
          Icon={() => (
            <CableTvIcon
              color={scheme == "dark" ? "white" : "#FFD200"}
              size={20}
            />
          )}
          title="Cable TV"
          route=""
        />

        <ListItem
          index={3}
          onPress={() => {
            navigation.navigate("Common", { screen: "Electricity" });
          }}
          Icon={() => (
            <ElectricIcon
              color={scheme == "dark" ? "white" : "#ED8A0A"}
              size={20}
            />
          )}
          title="Electricity"
          route=""
        />

        <ListItem
          index={4}
          onPress={() => {
            navigation.navigate("Common", { screen: "Water" });
          }}
          Icon={() => (
            <DropIcon
              color={scheme == "dark" ? "white" : "#1198F6"}
              size={20}
            />
          )}
          title="Water"
          route=""
        />

        <ListItem
          index={5}
          onPress={() => {}}
          Icon={() => (
            <GiftIcon
              color={scheme == "dark" ? "white" : "#BED600"}
              size={20}
            />
          )}
          title="Gift Cards"
          route=""
        />

        <ListItem
          index={6}
          onPress={() => {
            navigation.navigate("Common", { screen: "Charity" });
          }}
          Icon={() => (
            <LoveIcon
              color={scheme == "dark" ? "white" : "#FF361A"}
              size={20}
            />
          )}
          title="Charity"
          route=""
        />
      </ScrollView>
    </SafeAreaView>
  );
}
