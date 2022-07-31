import React from "react";
import { ScrollView, Image, StyleSheet, FlatList } from "react-native";
import { RootStackScreenProps } from "../../types";
import ButtonMd from "../components/buttons/ButtonMd";
import { View, SafeAreaView, Text } from "../components/Themed";

const WelcomeScreen = ({ navigation }: RootStackScreenProps<"Welcome">) => {
  const carousel_data = [
    {
      id: 1,
      source: require("../../assets/images/banner/Home-onboard-1.png"),
      heading: "Life made easy",
      description: "Enjoy your experience on Aza while making your payments and exploring unprecedented features",
    },
    {
      id: 2,
      source: require("../../assets/images/banner/Home-onboard-5.png"),
      heading: "Lightning fast transactions",
      description: "Make payments 24/7 at the speed of light with a 100% transaction certainty",
    },
    {
      id: 3,
      source: require("../../assets/images/banner/Home-onboard-2.png"),
      heading: "Bills & Payments",
      description: "Settle all your bills effortlessly without stepping out of your house",
    },
    {
      id: 4,
      source: require("../../assets/images/banner/Home-onboard-3.png"),
      heading: "Save your funds",
      description: "Save and lock up your funds for a specified time frame for future use",
    },
    {
      id: 5,
      source: require("../../assets/images/banner/Home-onboard-4.png"),
      heading: "Cutting Edge Analysis",
      description: "Keep track of your expenditure with our expert analysis",
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: "4%", marginTop: 50 }}>
        <Image style={[styles.image]} source={require("../../assets/images/logo/AZA-logo-4.png")} />
      </View>
      <View style={{ height: "70%" }}>
        <FlatList
          style={[]}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={true}
          data={carousel_data}
          keyExtractor={(item) => "key" + item.id}
          renderItem={(carousel) => {
            return <CarouselWrapper carousel={carousel.item} />;
          }}
        />
      </View>
      <View style={[styles.row]}>
        <View style={[styles.col]}>
          <ButtonMd
            title="Login"
            color={"#FFFFFF"}
            alt={true}
            onPress={() => {
              navigation.navigate("Root");
            }}
          />
        </View>
        <View style={[styles.col]}>
          <ButtonMd
            title="Sign Up"
            color={"#000000"}
            alt={false}
            onPress={() => {
              navigation.navigate("Root");
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const CarouselWrapper = ({ carousel }: any) => {
  return (
    <View style={[{ height: "100%", width: 390 }]}>
      <Image style={[styles.image]} source={carousel.source} />
      <Text style={[styles.carouselText, { fontWeight: "500", fontSize: 24 }]}>{carousel.heading}</Text>
      <Text style={[styles.carouselText, { width: "90%" }]}>{carousel.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    alignSelf: "center",
    margin: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
    marginHorizontal: 10,
    padding: 10,
  },
  col: {
    flexDirection: "column",
    alignSelf: "center",
    margin: 10,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "column",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  carouselText: {
    padding: 5,
    margin: 4,
  },
  showme: {
    borderColor: "red",
    borderWidth: 1,
  },
});

export default WelcomeScreen;
