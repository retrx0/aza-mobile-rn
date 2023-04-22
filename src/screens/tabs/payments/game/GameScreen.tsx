import { Image } from "react-native";
import React from "react";
import { View as View, Text as Text } from "../../../../theme/Themed";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { GAME } from "../../../../../assets/images";
import { hp, wp } from "../../../../common/util/LayoutUtil";
import useColorScheme from "../../../../hooks/useColorScheme";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { CommonScreenProps } from "../../../../common/navigation/types";
import Colors from "../../../../constants/Colors";

const GameScreen = ({ navigation }: CommonScreenProps<"GameScreen">) => {
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
            color: Colors.general.green,
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

export default GameScreen;
