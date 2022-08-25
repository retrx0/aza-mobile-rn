import React, { useState } from "react";
import { StyleSheet, Switch, TouchableOpacity } from "react-native";
import Button from "../../../components/buttons/Button";
import { Text, View } from "../../../components/Themed";
import { hp, wp } from "../../../common/util/LayoutUtil";
import { Header } from "../../../components/text/header";
import { Input } from "../../../components/input/input";
import {
  DaysCard,
  DaysList,
  PercentageCard,
  PercentageList,
} from "./components/VaultCard";
import { SelectArrow } from "../../../../assets/svg";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../../../constants/Colors";
import useColorScheme from "../../../hooks/useColorScheme";
import CommonStyles from "../../../common/styles/CommonStyles";
import { RootTabScreenProps } from "../../../../types";

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
          heading='Vault'
          description='Save and lock part of your Aza funds temporarily,
        for future use.'
        />

        <View style={CommonStyles.vaultInputContainer}>
          <Input
            label={"Vault Name"}
            labelStyle={undefined}
            placeholder='Give your vault a name'
            // style={styles.vaultInput}
            inputStyle={CommonStyles.inputStyle}
            icon={undefined}
          />
          <View style={styles.separator} />
        </View>
        <View style={CommonStyles.vaultInputcontainer}>
          <Input
            label={"Amount"}
            labelStyle={undefined}
            placeholder='Enter an amount you wish to save'
            style={CommonStyles.vaultInput}
            inputStyle={CommonStyles.inputStyle}
            icon={undefined}
          />
          <View style={styles.separator} />
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
              <SelectArrow />
            </TouchableOpacity>
          </View>
        </View>
        <View style={CommonStyles.daysContainer}>
          {DaysList.map((item, index) => {
            return <DaysCard key={index} days={item.days} onPress={() => {}} />;
          })}
        </View>
        <View style={[CommonStyles.SwitchContainer, { bottom: hp(35) }]}>
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
              navigation.navigate("Common", { screen: "DeleteVault" })
            }
            style={[CommonStyles.button]}
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
    borderWidth: 0.7,
    borderColor: "#EAEAEC",
    width: 335,
  },
});

export default NewVault;
