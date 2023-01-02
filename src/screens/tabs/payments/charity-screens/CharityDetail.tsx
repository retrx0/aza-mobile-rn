import { TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { View2 as View, Text2 as Text } from "../../../../theme/Themed";
import { CharityStyles as styles } from "../styles";
import { InfoIcon } from "../../../../../assets/svg";
import { UnderlinedInput } from "../../../../components/input/UnderlinedInput";
import MySwitch from "../sub-components/MySwitch";
import Divider from "../sub-components/Divider";
import MyButton from "../sub-components/MyButton";
import { useRoute } from "@react-navigation/native";
import { RootTabScreenProps } from "../../../../../types";
import CustomSwitch from "../../../../components/input/CustomSwitch";
import CancelButtonWithUnderline from "../../../../components/buttons/CancelButtonWithUnderline";
import CommonStyles from "../../../../common/styles/CommonStyles";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useColorScheme from "../../../../hooks/useColorScheme";

export default function CharityDetail({
  navigation,
}: RootTabScreenProps<"Payments">) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const route = useRoute();
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();

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
          <UnderlinedInput
            style={styles.mainInput}
            icon={null}
            inputStyle={[
              styles.input,
              {
                borderBottomColor:
                  colorScheme === "dark" ? "#262626" : "#EAEAEC",
              },
            ]}
            labelStyle={styles.label}
            label=""
            placeholder="Name and Surname"
          />

          <UnderlinedInput
            style={styles.mainInput}
            icon={null}
            inputStyle={[
              styles.input,
              {
                borderBottomColor:
                  colorScheme === "dark" ? "#262626" : "#EAEAEC",
              },
            ]}
            labelStyle={styles.label}
            label=""
            placeholder="Email Address"
          />
        </>
      )}
      <UnderlinedInput
        style={styles.mainInput}
        icon={null}
        inputStyle={[
          styles.input,
          {
            borderBottomColor: colorScheme === "dark" ? "#262626" : "#EAEAEC",
          },
        ]}
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

      <View
        style={[
          CommonStyles.passwordContainer,
          { bottom: insets.top || hp(45) },
        ]}
      >
        <View style={styles.check}>
          <CustomSwitch
            title="Recurring monthly donation"
            onValueChange={toggleSwitch}
            isEnabled={isEnabled}
          />
        </View>

        <Divider
          style={{
            marginTop: hp(5),
            marginBottom: hp(5),
            width: "85%",
          }}
        />
        <MyButton
          style={styles.btn}
          disabled={false}
          title="Continue"
          onPress={() => {
            navigation.navigate("Common", { screen: "CharityConfirmation" });
          }}
        />
        <CancelButtonWithUnderline
          onPressButton={() => {
            navigation.goBack();
          }}
          style={{ borderBottomColor: Colors.general.red }}
          title="Cancel"
          styleText={{
            textAlign: "center",
            color: Colors.general.red,
            fontSize: hp(16),
            fontWeight: "500",
            lineHeight: hp(17),
            fontFamily: "Euclid-Circular-A",
          }}
        />
      </View>
    </View>
  );
}
