import React, { useState } from "react";
import { StyleSheet, Switch, TouchableOpacity } from "react-native";
import Button from "../../../components/buttons/Button";
import { View, Text } from "../../../theme/Themed";
import { hp } from "../../../common/util/LayoutUtil";
import { Header } from "../../../components/text/header";
import { UnderlinedInput } from "../../../components/input/UnderlinedInput";
import CustomDropdown from "../../../components/dropdown/CustomDropdown";
import { PercentageCard, PercentageList } from "./components/VaultCard";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import Colors from "../../../constants/Colors";
import CommonStyles from "../../../common/styles/CommonStyles";
import { RootTabScreenProps } from "../../../../types";
import BackButton from "../../../components/buttons/BackButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { InfoIcon } from "../../../../assets/svg";
import { getAppTheme } from "../../../theme";
import { useAppSelector } from "../../../redux";
import { selectAppTheme } from "../../../redux/slice/themeSlice";
import { CommonScreenProps } from "../../../common/navigation/types";

const NewVault = ({ navigation }: CommonScreenProps<"NewVault">) => {
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

  const appTheme = getAppTheme(useAppSelector(selectAppTheme));

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: hp(30),
            justifyContent: "space-between",
          }}
        >
          <View style={{ marginLeft: 20 }}>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Bold",
              fontSize: hp(16),
              fontWeight: "500",
              marginRight: hp(20),
            }}
          >
            New Vault
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("VaultFeature")}>
            <InfoIcon
              style={{ marginRight: hp(20) }}
              color={appTheme === "dark" ? "#999999" : "#000000"}
            />
          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={CommonStyles.descriptionStyle}>
            Save and lock part of your Aza funds temporarily, for future use
          </Text>
          <View style={CommonStyles.vaultInputContainer}>
            <UnderlinedInput
              label={"Vault Name"}
              labelStyle={undefined}
              placeholder="Give your vault a name"
              inputStyle={[CommonStyles.inputStyle]}
              icon={undefined}
              containerStyle={undefined}
            />
          </View>
          <View
            style={{
              marginTop: hp(20),
            }}
          >
            <Text
              style={{
                fontSize: hp(16),
                fontWeight: "400",
                lineHeight: hp(17.75),
                marginBottom: hp(11),
                fontFamily: "Euclid-Circular-A",
              }}
            >
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
          ]}
        >
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
            onPressButton={() => navigation.navigate("AddCoverImage")}
            styleText={{
              color: Colors[appTheme].buttonText,
            }}
            style={[]}
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

export default NewVault;
