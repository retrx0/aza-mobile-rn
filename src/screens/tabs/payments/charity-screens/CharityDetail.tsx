import { TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Text, View } from "../../../../components/Themed";
import { CharityStyles as styles } from "../styles";
import { InfoIcon } from "../../../../../assets/svg";
import { Input } from "../../../../components/input/input";
import MySwitch from "../sub-components/MySwitch";
import Divider from "../sub-components/Divider";
import MyButton from "../sub-components/MyButton";
import { useRoute } from "@react-navigation/native";
import { RootTabScreenProps } from "../../../../../types";
import CustomSwitch from "../../../../components/input/CustomSwitch";
import CancelButtonWithUnderline from "../../../../components/buttons/CancelButtonWithUnderline";
import CommonStyles from "../../../../common/styles/CommonStyles";
import Colors from "../../../../constants/Colors";

export default function CharityDetail({
  navigation,
}: RootTabScreenProps<"Payments">) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const route = useRoute();
  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <InfoIcon />
        <Text style={styles.text}>
          The Chess in Slums, Africa is reimagining education using chess as a
          tool/framework to aid cognition and empower the minds of children in
          impoverished areas of Nigeria.
        </Text>
      </View>
      {route.name == "For Someone Else" && (
        <>
          <Input
            style={styles.mainInput}
            icon={null}
            inputStyle={styles.input}
            labelStyle={styles.label}
            label=""
            placeholder="Name and Surname"
          />

          <Input
            style={styles.mainInput}
            icon={null}
            inputStyle={styles.input}
            labelStyle={styles.label}
            label=""
            placeholder="Email Address"
          />
        </>
      )}
      <Input
        style={styles.mainInput}
        icon={null}
        inputStyle={styles.input}
        labelStyle={styles.label}
        label=""
        placeholder="Donation Amount"
      />

      <View style={styles.suggestions}>
        <TouchableOpacity style={styles.mainSuggestion}>
          <Text style={styles.amount}>₦100</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.mainSuggestion}>
          <Text style={styles.amount}>₦200</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.mainSuggestion}>
          <Text style={styles.amount}>₦500</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.mainSuggestion}>
          <Text style={styles.amount}>₦1000</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttons}>
        <View style={styles.check}>
          <CustomSwitch
            title="Recurring monthly donation"
            onValueChange={toggleSwitch}
            isEnabled={isEnabled}
          />
        </View>
        <Divider
          style={{
            marginTop: 10,
            marginBottom: 20,
            width: "85%",
          }}
        />
        <MyButton
          style={styles.btn}
          disabled={false}
          title="Continue"
          onPress={() => {
            navigation.navigate("Common", { screen: "Confirm" });
          }}
        />
        <CancelButtonWithUnderline
          onPressButton={() => {
            navigation.goBack();
          }}
          style={{ borderBottomColor: Colors.general.red }}
          title="Cancel"
          styleText={CommonStyles.cancelStyle}
        />
      </View>
    </View>
  );
}
