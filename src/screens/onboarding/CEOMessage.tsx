import { ScrollView } from "../../theme/Themed";
import { View, Text } from "../../theme/Themed";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { hp } from "../../common/util/LayoutUtil";
import { RootStackScreenProps } from "../../../types";
import React, { useState } from "react";
import { AZALogo, Signature, ZEAL } from "../../../assets/svg";
import { useNavigation } from "@react-navigation/core";
import CustomSwitch from "../../components/input/CustomSwitch";
import { storeItem } from "../../common/util/StorageUtil";
import { CEO_MESSAGE_STORAGE_KEY } from "../../constants/AppConstants";
import { useAppSelector } from "../../redux";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import { getAppTheme } from "../../theme";
import Colors from "../../constants/Colors";
import Button from "../../components/buttons/Button";

const CEOMessage = (_navigation: RootStackScreenProps<"CEOMessage">) => {
  const navigation = useNavigation();
  const selectedTheme = useAppSelector(selectAppTheme);
  const appTheme = getAppTheme(selectedTheme);
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    storeItem(CEO_MESSAGE_STORAGE_KEY, "true");
  };

  return (
    <ScrollView>
      <SpacerWrapper>
        <View
          style={{
            height: "4%",
            marginTop: hp(50),
            marginBottom: hp(35),
            alignItems: "center",
          }}
        >
          <AZALogo
            color={
              appTheme === "dark" ? Colors.dark.mainText : Colors.light.text
            }
            size={24}
          />
        </View>
        <View style={{ paddingHorizontal: 32 }}>
          <Text
            style={{
              alignSelf: "center",
              textAlign: "justify",
              fontSize: hp(24),
              fontFamily: "Euclid-Circular-A-Bold",
              marginBottom: hp(20),
              fontWeight: "600",
              lineHeight: hp(30),
            }}
          >
            Message from the CEO
          </Text>
          <Text
            style={{
              textAlign: "justify",
              fontSize: hp(15),
              fontFamily: "Euclid-Circular-A",
              lineHeight: hp(19),
              marginBottom: hp(35),
              fontWeight: "400",
            }}
          >
            Calling all Nigerians, the future is now. Gone are the times where
            we had to accept poorly made apps that frustrated the living out of
            us just because the companies were lazy, cared more about revenue,
            and couldn't deliver the bare minimum.{"\n"}
            {"\n"}I believe things should take a drastic turn. What we are doing
            at Aza isn't just going to exponentially optimize the financial
            lives of Nigerians, but also set a standard as to what a
            next-generation fintech company should look like. Therefore, we are
            on a journey to revolutionize the fintech space of Nigeria, and take
            Nigeria to the next level, side by side with the world's greatest
            nations.
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <ZEAL
              color={
                appTheme === "dark" ? Colors.dark.mainText : Colors.light.text
              }
              size={57}
            />
            <Signature
              color={
                appTheme === "dark" ? Colors.dark.mainText : Colors.light.text
              }
              size={52}
            />
          </View>
        </View>
        <View style={{ marginTop: hp(50) }}>
          <Button
            disabled={false}
            title="Continue"
            onPressButton={() => {
              navigation.goBack();
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: hp(50),
            }}
          >
            <CustomSwitch
              title="Don’t show this again"
              onValueChange={toggleSwitch}
              isEnabled={isEnabled}
            />
          </View>
        </View>
      </SpacerWrapper>
    </ScrollView>
  );
};

export default CEOMessage;
