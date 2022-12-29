import { Image, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { View } from "../../../../theme/components/View";
import { Text } from "../../../../theme/components/Text";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { Input } from "../../../../components/input/input";
import { AIrtimeStyles as styles } from "../airtime-screens/styles";
import ListItem from "../sub-components/ListItem";
import {
  AMAZON,
  GAME,
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
import { hp, wp } from "../../../../common/util/LayoutUtil";
import useColorScheme from "../../../../hooks/useColorScheme";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";

export default function GameScreen({
  navigation,
}: RootTabScreenProps<"Payments">) {
  const colorScheme = useColorScheme();

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <Text
          style={{
            marginTop: hp(30),
            textAlign: "center",
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: hp(16),
            fontWeight: "600",
            marginBottom: hp(30),
            color: "#2A9E17",
          }}
        >
          Coming Soon
        </Text>
        <Text
          style={{
            marginTop: hp(30),
            textAlign: "center",
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: hp(16),
            fontWeight: "500",
          }}
        >
          Choose from hundreds of game brands
        </Text>
        <Image
          source={GAME}
          resizeMode="cover"
          style={{
            width: wp(301),
            height: hp(202),
            marginTop: hp(101),
            alignSelf: "center",
          }}
        />
      </View>
    </SpacerWrapper>
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
    width: 36,
    height: 36,
  },
});
