import React, { useState } from "react";
import { View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { SafeAreaView } from "react-native-safe-area-context";
import { AZALogo } from "../../../assets/svg";
import { RootStackScreenProps } from "../../../types";
import CommonStyles from "../../common/styles/CommonStyles";
import { hp } from "../../common/util/LayoutUtil";
import ButtonMd from "../../components/buttons/ButtonMd";
import WelcomeScrollIndicator from "../../components/indicators/WelcomeScrollIndicator";
import Colors from "../../constants/Colors";
import CarouselWrapper from "./CarouselWrapper";
import styles from "./OnboardingStyles";
import { carousel_data } from "./OnboardingUtil";

const WelcomeScreen = ({ navigation }: RootStackScreenProps<"Welcome">) => {
  const [carouselIndicatorState, setCarouselIndicatorState] = useState([
    { id: 1, active: true },
    { id: 2, active: false },
    { id: 3, active: false },
    { id: 4, active: false },
    { id: 5, active: false },
  ]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.general.white }}>
      <View style={[CommonStyles.row]}>
        {carouselIndicatorState.map(({ active, id }) => (
          <WelcomeScrollIndicator key={id} count={5} active={active} />
        ))}
      </View>
      <View style={{ height: "4%", marginTop: 50, alignItems: "center" }}>
        <AZALogo color={"black"} size={16} />
      </View>

      <AppIntroSlider
        style={[{ height: "70%" }]}
        data={carousel_data}
        onSlideChange={(index) => {
          const tmpArray = [...carouselIndicatorState];
          if (!tmpArray[index].active) tmpArray[index].active = true;
          setCarouselIndicatorState([...tmpArray]);
        }}
        renderPagination={() => <></>}
        renderItem={(carousel) => {
          return <CarouselWrapper carousel={carousel.item} />;
        }}
      />
      <View style={[CommonStyles.row]}>
        <View style={[{ marginLeft: 10, marginRight: 7.5, marginTop: 0, marginBottom: hp(100) }, CommonStyles.col]}>
          <ButtonMd
            title="Login"
            color={Colors.general.white}
            alt={true}
            onPress={() => {
              navigation.navigate("SignIn");
            }}
          />
        </View>
        <View style={[{ marginLeft: 7.5, marginRight: 10, marginTop: 0, marginBottom: hp(100) }, CommonStyles.col]}>
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
