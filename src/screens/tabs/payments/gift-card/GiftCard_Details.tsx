import { ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView, View } from "../../../../components/Themed";
import { AIrtimeStyles as styles } from "../airtime-screens/styles";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { Header } from "../../../../components/text/header";
import HeadrImage from "../sub-components/HeadrImage";
import MyButton from "../sub-components/MyButton";
import { useRoute } from "@react-navigation/native";
import { CANADA, UK, USA } from "../../../../../assets/images";
import { RootTabScreenProps } from "../../../../../types";
import { hp } from "../../../../common/util/LayoutUtil";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useColorScheme from "../../../../hooks/useColorScheme";
import { ClockIcon, CloseIcon } from "../../../../../assets/svg";
import ListItem from "./List";

export default function GiftCardDetails({
  navigation,
}: RootTabScreenProps<"Payments">) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [currentIndex, setCurrent] = useState(0);
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={[CommonStyles.parentContainer, styles2.container]}>
      <Header
        style={styles.header}
        description=""
        descriptionStyle={null}
        headerStyle={{
          fontSize: hp(14),
          fontWeight: "500",
          fontFamily: "Euclid-Circular-A-Medium",
          marginLeft: hp(3),
          marginTop: hp(30),
        }}
        heading="Select Region"
      />

      <ScrollView horizontal style={CommonStyles.imageHeaderContainer}>
        <HeadrImage selected index={0} image={USA} title="USA" />
        <HeadrImage selected index={0} image={UK} title="UK" />
        <HeadrImage selected index={0} image={CANADA} title="CANADA" />
      </ScrollView>

      <ListItem
        onPress={() => {
          navigation.navigate("Common", {
            screen: "GiftCardConfirmation",
          });
        }}
        route=""
        index={0}
        title="iTunes USD10"
        amount={"\u20A66,000"}
      />
      <ListItem
        onPress={() => {
          navigation.navigate("Common", {
            screen: "GiftCardConfirmation",
          });
        }}
        route=""
        index={0}
        title="iTunes USD25"
        amount={"\u20A615,000"}
      />
      <ListItem
        onPress={() => {
          navigation.navigate("Common", {
            screen: "GiftCardConfirmation",
          });
        }}
        route=""
        index={0}
        title="iTunes USD50"
        amount={"\u20A630,000"}
      />
      <ListItem
        onPress={() => {
          navigation.navigate("Common", {
            screen: "GiftCardConfirmation",
          });
        }}
        route=""
        index={0}
        title="iTunes USD100"
        amount={"\u20A660,000"}
      />

      <View
        style={[
          CommonStyles.passwordContainer,
          { bottom: insets.bottom || hp(45) },
        ]}>
        <MyButton
          disabled={false}
          title="Continue"
          onPress={() => {
            navigation.navigate("Common", { screen: "WaterConfirmation" });
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles2 = StyleSheet.create({
  container: {
    marginTop: 70,
  },
  input: {
    marginTop: 0,
    marginBottom: 40,
  },
});
