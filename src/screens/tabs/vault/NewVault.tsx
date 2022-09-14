import React, { useState } from "react";
import { StyleSheet, Switch, TouchableOpacity } from "react-native";
import Button from "../../../components/buttons/Button";
import { Text, View } from "../../../components/Themed";
import { hp } from "../../../common/util/LayoutUtil";
import { Header } from "../../../components/text/header";
import { Input } from "../../../components/input/input";
import {
  DaysCard,
  DaysList,
  PercentageCard,
  PercentageList,
} from "./components/VaultCard";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import Colors from "../../../constants/Colors";
import useColorScheme from "../../../hooks/useColorScheme";
import CommonStyles from "../../../common/styles/CommonStyles";
import { RootTabScreenProps } from "../../../../types";
import { SelectIcon } from "../../../../assets/svg";

const NewVault = ({ navigation }: RootTabScreenProps<"Vault">) => {
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [isEnabled, setIsEnabled] = useState(false);

  const colorScheme = useColorScheme();

  const switchColor = Colors[colorScheme].backgroundSecondary;
  const switchOnColor = Colors[colorScheme].success;

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <Header
          headerStyle={CommonStyles.vault}
          descriptionStyle={CommonStyles.descriptionStyle}
          heading="Vault"
          description="Save and lock part of your Aza funds temporarily,
        for future use."
        />

        <View style={CommonStyles.vaultInputContainer}>
          <Input
            label={"Vault Name"}
            labelStyle={undefined}
            placeholder="Give your vault a name"
            inputStyle={CommonStyles.inputStyle}
            icon={undefined}
            containerStyle={undefined}
          />
        </View>
        <View style={CommonStyles.vaultInputcontainer}>
          <Input
            label={"Amount"}
            labelStyle={undefined}
            placeholder="Enter an amount you wish to save"
            style={CommonStyles.vaultInput}
            inputStyle={CommonStyles.inputStyle}
            icon={undefined}
            containerStyle={{ marginBottom: 2 }}
          />
        </View>
        <View style={CommonStyles.percentageContainer}>
          {PercentageList.map((item, index) => {
            return (
              <PercentageCard
                key={index}
                percentage={item.percentage}
                onPress={() => {}}
              />
            );
          })}
        </View>
        <View style={CommonStyles.Container}>
          <Text style={CommonStyles.period}>Period</Text>
          <View style={CommonStyles.chooseContainer}>
            <Text style={CommonStyles.choose}>
              Choose a period to lock funds away
            </Text>
            <TouchableOpacity>
              <SelectIcon />
            </TouchableOpacity>
          </View>
        </View>
        <View style={CommonStyles.daysContainer}>
          {DaysList.map((item, index) => {
            return <DaysCard key={index} days={item.days} onPress={() => {}} />;
          })}
        </View>
        <View style={[CommonStyles.SwitchContainer, { bottom: hp(20) }]}>
          <View style={CommonStyles.periodContainer}>
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
          <Separator />
          <Button
            title={"Continue"}
            onPressButton={() =>
              navigation.navigate("Common", {
                screen: "LockVault",
              })
            }
            styleText={{
              color: Colors[colorScheme].buttonText,
            }}
            style={[
              {
                backgroundColor: Colors[colorScheme].button,
              },
              CommonStyles.button,
            ]}
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
