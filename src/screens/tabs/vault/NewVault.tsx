import React, { useState } from "react";
import { StyleSheet, Switch } from "react-native";
import Button from "../../../components/buttons/Button";
import { Text, View } from "../../../components/Themed";
import { hp } from "../../../common/util/LayoutUtil";
import { Header } from "../../../components/text/header";
import { Input } from "../../../components/input/input";
import CustomDropdown from "../../../components/dropdown/CustomDropdown";
import { PercentageCard, PercentageList } from "./components/VaultCard";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import Colors from "../../../constants/Colors";
import useColorScheme from "../../../hooks/useColorScheme";
import CommonStyles from "../../../common/styles/CommonStyles";
import { RootTabScreenProps } from "../../../../types";
import BackButton from "../../../components/buttons/BackButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const NewVault = ({ navigation }: RootTabScreenProps<"Vault">) => {
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [isEnabled, setIsEnabled] = useState(false);
  const [periodValue, setPeriodValue] = useState("");
  const insets = useSafeAreaInsets();

  const period = [
    { label: "2 Days", value: "1" },
    { label: "4 Days", value: "1" },
    { label: "1 Week", value: "1" },
    { label: "2 Weeks", value: "1" },
    { label: "1 Month", value: "1" },
  ];

  const colorScheme = useColorScheme();

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: hp(30),
          }}>
          <View style={{ marginLeft: 20 }}>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Bold",
              fontSize: hp(16),
              fontWeight: "500",
              marginLeft: hp(85),
            }}>
            New Vault
          </Text>
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={CommonStyles.descriptionStyle}>
            Save and lock part of your Aza funds temporarily, for future use
          </Text>
          <View style={CommonStyles.vaultInputContainer}>
            <Input
              label={"Vault Name"}
              labelStyle={undefined}
              placeholder="Give your vault a name"
              inputStyle={[
                CommonStyles.inputStyle,
                {
                  borderColor: colorScheme === "dark" ? "#262626" : "#EAEAEC",
                },
              ]}
              icon={undefined}
              containerStyle={undefined}
            />
          </View>
          <View
            style={{
              marginTop: hp(20),
            }}>
            <Text
              // lightColor={Colors.light.secondaryText}
              // darkColor={Colors.dark.secondaryText}
              style={{
                fontSize: hp(16),
                fontWeight: "400",
                lineHeight: hp(17.75),
                marginBottom: hp(11),
                fontFamily: "Euclid-Circular-A",
              }}>
              Period
            </Text>
            <CustomDropdown
              data={period}
              placeholder="Choose a period to lock funds away"
              setValue={setPeriodValue}
              value={periodValue}
              label={""}
            />
          </View>
        </View>

        {/* <View style={CommonStyles.vaultInputcontainer}>
          <Input
            label={"Amount"}
            labelStyle={undefined}
            placeholder="Enter an amount you wish to save"
            style={CommonStyles.vaultInput}
            inputStyle={CommonStyles.inputStyle}
            icon={undefined}
            containerStyle={{ marginBottom: 2 }}
          />
        </View> */}
        {/* <View style={CommonStyles.percentageContainer}>
          {PercentageList.map((item, index) => {
            return <PercentageCard key={index} percentage={item.percentage} />;
          })}
        </View> */}

        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}>
          {/* <View style={CommonStyles.periodContainer}>
            <Text style={CommonStyles.everyMonth}>
              Save this amount every month
            </Text>
            <Switch
              trackColor={{ false: switchColor, true: switchOnColor }}
              thumbColor={isEnabled ? "white" : "grey"}
              ios_backgroundColor={switchColor}
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={{
                marginLeft: hp(13),
              }}
            />
          </View>
          <Separator /> */}
          <Button
            title={"Continue"}
            onPressButton={() =>
              navigation.navigate("Common", {
                screen: "AddCoverImage",
              })
            }
            styleText={{
              color: Colors[colorScheme].buttonText,
            }}
            style={[
              {
                backgroundColor: Colors[colorScheme].button,
              },
            ]}
            disabled={!periodValue}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

const Separator = () => {
  return (
    <View
      lightColor={Colors.light.separator}
      darkColor={Colors.dark.separator}
      style={[CommonStyles.separator]}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    borderWidth: hp(0.3),
    borderColor: "#EAEAEC",
    width: "100%",
  },
});

export default NewVault;
