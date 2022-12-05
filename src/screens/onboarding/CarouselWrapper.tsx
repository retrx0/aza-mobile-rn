import React from "react";
import { Image, Text, View } from "react-native";
import CommonStyles from "../../common/styles/CommonStyles";
import { hp, wp } from "../../common/util/LayoutUtil";
import Layout from "../../constants/Layout";
import styles from "./OnboardingStyles";
import { CarouselItem } from "./OnboardingUtil";

const CarouselWrapper = (props: { carousel: CarouselItem }) => {
  return (
    <View
      style={[
        {
          height: "93%",
          width: Layout.window.width,
          flex: 1,
        },
      ]}>
      <Image style={[styles.image]} source={props.carousel.source} />
      <View style={{ marginHorizontal: 25, alignItems: "flex-start" }}>
        <Text
          style={{
            fontWeight: "600",
            fontSize: hp(23),
            fontFamily: "Euclid-Circular-A-Bold",
            marginTop: hp(29),
            marginLeft: hp(10),
          }}>
          {props.carousel.heading}
        </Text>
        <Text
          style={{
            fontFamily: "Euclid-Circular-A",
            fontSize: hp(14),
            fontWeight: "400",
            marginTop: hp(10),
            marginBottom: hp(50),
            marginLeft: hp(10),
          }}>
          {props.carousel.description}
        </Text>
      </View>
    </View>
  );
};

export default CarouselWrapper;
