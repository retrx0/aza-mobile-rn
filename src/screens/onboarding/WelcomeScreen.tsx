import React, { useState } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { AZALogo } from "../../../assets/svg";
import { RootStackScreenProps } from "../../../types";
import CommonStyles from "../../common/styles/CommonStyles";
import ButtonMd from "../../components/buttons/ButtonMd";
import WelcomeScrollIndicator from "../../components/indicators/WelcomeScrollIndicator";
import { View, SafeAreaView, useThemeColor } from "../../components/Themed";
import Colors from "../../constants/Colors";
import CarouselWrapper from "./CarouselWrapper";
import styles from "./OnboardingStyles";
import { carousel_data, logo } from "./OnboardingUtil";

const WelcomeScreen = ({ navigation }: RootStackScreenProps<"Welcome">) => {
  const color = useThemeColor({ light: Colors.light.text, dark: Colors.dark.text }, "text");

  const [carouselIndicatorState, setCarouselIndicatorState] = useState([
    { id: 1, active: true },
    { id: 2, active: false },
    { id: 3, active: false },
    { id: 4, active: false },
    { id: 5, active: false },
  ]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[CommonStyles.row]}>
        {carouselIndicatorState.map(({ active, id }) => (
          <WelcomeScrollIndicator key={id} count={5} active={active} />
        ))}
      </View>
      <View style={{ height: "4%", marginTop: 50, alignItems: "center" }}>
        <AZALogo color={color} size={16} />
      </View>

      <AppIntroSlider
        style={[{ height: "70%" }]}
        data={carousel_data}
        onSlideChange={(index) => {
          let tmpArray = [...carouselIndicatorState];
          if (!tmpArray[index].active) tmpArray[index].active = true;
          setCarouselIndicatorState([...tmpArray]);
        }}
        renderPagination={() => <></>}
        renderItem={(carousel) => {
          return <CarouselWrapper carousel={carousel.item} />;
        }}
      />
      <View style={[styles.row]}>
        <View style={[styles.col]}>
          <ButtonMd
            title="Login"
            color={Colors.general.white}
            alt={true}
            onPress={() => {
              navigation.navigate("SignIn");
            }}
          />
        </View>
        <View style={[styles.col]}>
          <ButtonMd
            title="Sign Up"
            color={Colors.general.black}
            alt={false}
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
