import React from "react";
import { Image, Text, View } from "react-native";
import CommonStyles from "../../common/styles/CommonStyles";
import { hp } from "../../common/util/LayoutUtil";
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
      <Image
        style={[styles.image]}
        source={props.carousel.source}
        resizeMode="contain"
      />
      <View style={{ marginHorizontal: 20 }}>
        <Text
          style={{
            fontWeight: "600",
            fontSize: hp(24),
            fontFamily: "Euclid-Circular-A-Bold",
            marginTop: hp(29),
            marginLeft: 10,
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
            marginLeft: 10,
          }}>
          {props.carousel.description}
        </Text>
      </View>
    </View>
  );
};

export default CarouselWrapper;
