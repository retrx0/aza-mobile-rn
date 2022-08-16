import React from "react";
import { Image } from "react-native";
import CommonStyles from "../../common/styles/CommonStyles";
import { Text, View } from "../../components/Themed";
import Layout from "../../constants/Layout";
import styles from "./OnboardingStyles";
import { CarouselItem } from "./OnboardingUtil";

const CarouselWrapper = (props: { carousel: CarouselItem }) => {
  return (
    <View style={[{ height: "100%", width: Layout.window.width }]}>
      <Image style={[styles.image]} source={props.carousel.source} />
      <Text style={[CommonStyles.headerText]}>{props.carousel.heading}</Text>
      <Text style={[CommonStyles.bodyText, { width: "90%" }]}>{props.carousel.description}</Text>
    </View>
  );
};

export default CarouselWrapper;
