import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { View as View, Text2 as Text } from "../../../../theme/Themed";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { GAME } from "../../../../../assets/images";
import { RootTabScreenProps } from "../../../../../types";
import { hp, wp } from "../../../../common/util/LayoutUtil";
import useColorScheme from "../../../../hooks/useColorScheme";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
// import navigation from "navigation";
import { InfoIcon } from "../../../../../assets/svg";
import BackButton from "../../../../components/buttons/BackButton";

const GameScreen = ({ navigation }: RootTabScreenProps<"Payments">) => {
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
};

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
function useLayoutEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}

export default GameScreen;
