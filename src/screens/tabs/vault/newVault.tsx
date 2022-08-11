import React, { useState } from "react";
import { StyleSheet, Switch, TouchableOpacity } from "react-native";
import Button from "../../../components/buttons/Button";
import { Text, View } from "../../../components/Themed";
import { hp } from "../../../common/utils";
import { Header } from "../../../components/text/header";
import { Input } from "../../../components/input/input";
import {
  DaysCard,
  DaysList,
  PercentageCard,
  PercentageList,
} from "./vautlCard";
import { SelectArrow } from "../../../../assets/svg";

const NewVault = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <Header
        headerStyle={styles.headerStyle}
        descriptionStyle={styles.descriptionStyle}
        heading='Vault'
        description='Save and lock part of your Aza funds temporarily,
        for future use.'
      />
      <View style={styles.vaultInputContainer}>
        <Input
          label={"Vault Name"}
          labelStyle={undefined}
          placeholder='Give your vault a name'
          style={styles.vaultInput}
          inputStyle={styles.inputStyle}
          icon={undefined}
        />
        <View style={styles.line} />
      </View>
      <View style={styles.vaultInputcontainer}>
        <Input
          label={"Amount"}
          labelStyle={undefined}
          placeholder='Enter an amount you wish to save'
          style={styles.vaultInput}
          inputStyle={styles.inputStyle}
          icon={undefined}
        />
        <View style={styles.line} />
      </View>
      <View style={styles.percentageContainer}>
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
      <View style={styles.Container}>
        <Text style={styles.period}>Period</Text>
        <View style={styles.periodContainer}>
          <Text style={styles.choose}>Choose a period to lock funds away</Text>
          <TouchableOpacity>
            <SelectArrow />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.daysContainer}>
        {DaysList.map((item, index) => {
          return <DaysCard key={index} days={item.days} onPress={() => {}} />;
        })}
      </View>
      <View style={styles.SwitchContainer}>
        <View style={styles.periodContainer}>
          <Text style={styles.everyMonth}>Save this amount every month</Text>
          <Switch
            trackColor={{ false: "white", true: "white" }}
            thumbColor={isEnabled ? "black" : "white"}
            ios_backgroundColor='white'
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.line} />
      </View>
      <Button
        title={"Continue"}
        onPressButton={() => navigation.navigate("vaultpassword")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    borderWidth: 0.7,
    borderColor: "#EAEAEC",
    width: 335,
    alignSelf: "center",
  },

  everyMonth: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 17.75,
    color: "#A6A6A6",
    alignSelf: "center",
  },
  SwitchContainer: {
    marginTop: 16,
    justifyContent: "space-between",
    paddingHorizontal: 60,
    marginBottom: 23,
  },
  Container: {
    paddingHorizontal: 20,
  },
  choose: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 17.75,
    color: "#A6A6A6",
    alignSelf: "center",
  },
  period: {
    color: "#4D4D4D",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 17.75,
    marginBottom: 12,
  },
  periodContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  daysContainer: {
    width: 340,
    height: 200,
    alignSelf: "center",
    justifyContent: "center",
  },
  percentageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 20,
    marginTop: 10,
  },
  inputStyle: {
    color: "#A6A6A6",
    fontWeight: "600",
  },
  vaultInput: {
    marginBottom: 5,
    marginTop: 11,
  },
  // line: {
  //   borderWidth: 0.7,
  //   borderColor: "#EAEAEC",
  // },
  vaultInputcontainer: {
    paddingHorizontal: 20,
  },
  vaultInputContainer: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  headerStyle: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 20.29,
    color: "#4D4D4D",
    marginBottom: 20,
    alignSelf: "center",
    marginTop: 50,
  },
  descriptionStyle: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 17.75,
    color: "#4D4D4D",
    marginBottom: 10,
    width: 326,
  },
  undraw: {
    marginTop: hp(159),
  },
  createVault: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 17.75,
    marginBottom: hp(158),
  },
  container: {
    flex: 1,
  },
});

export default NewVault;
