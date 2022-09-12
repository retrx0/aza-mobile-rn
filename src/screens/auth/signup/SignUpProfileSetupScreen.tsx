import React, { useState } from "react";
import CommonStyles from "../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import BackButton from "../../../components/buttons/BackButton";
import BoxTextInput from "../../../components/input/BoxTextInput";
import { Text, View } from "../../../components/Themed";
import Colors from "../../../constants/Colors";
import { SignUpScreenProps } from "../../../../types";
import Button from "../../../components/buttons/Button";
import { hp, wp } from "../../../common/util/LayoutUtil";
import RNPickerSelect from "react-native-picker-select";
import { GENDER } from "../../../constants/Gender";
import { TextHeader } from "../../../components/text/textHeader";
import { SelectIcon } from "../../../../assets/svg";

const SignUpProfileSetupScreen = ({
  navigation,
}: SignUpScreenProps<"SignUpProfileSetup">) => {
  const [gender, setGender] = useState(GENDER);
  const placeholder = {
    label: "Select Gender",
    value: null,
    color: Colors.general.black,
    icon: { SelectIcon },
  };
  return (
    <SpacerWrapper>
      <View style={{ marginLeft: 20 }}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <View style={[CommonStyles.phoneContainer]}>
        <Text style={[CommonStyles.headerText]}>Profile setup</Text>
        <Text style={[CommonStyles.bodyText]}>Set up your account</Text>
      </View>
      <View style={{ width: "90%", alignSelf: "center" }}>
        <BoxTextInput
          placeHolder="Full Name"
          required
          value="Chiazondu Joseph"
          onChange={() => {}}
        />
      </View>
      <View style={{ width: "90%", alignSelf: "center" }}>
        <BoxTextInput
          placeHolder="Email"
          required
          value="chiazo@examplemail.com"
          onChange={() => {}}
        />
      </View>
      <TextHeader label="Gender" style={[CommonStyles.genderstyle]} />

      <View
        style={{ flexDirection: "row", alignItems: "center", width: "100%" }}>
        <RNPickerSelect
          placeholder={placeholder}
          onValueChange={(value) => {
            setGender(value);
            console.log(value);
          }}
          value={gender}
          items={GENDER}
          style={{
            viewContainer: {
              paddingHorizontal: wp(10),
              width: "90%",
              height: hp(50),
              borderRadius: 5,
              marginTop: hp(7),
              marginLeft: hp(20),
              paddingVertical: hp(15),
              alignSelf: "center",
              backgroundColor: "#F2F2F2",
            },
            placeholder: {
              fontSize: hp(16),
              lineHeight: hp(20),
              fontFamily: "Euclid-Circular-A",
              color: Colors.general.black,
              fontWeight: "400",
            },
          }}
        />
      </View>

      <Button
        title="Continue"
        onPressButton={() =>
          navigation.navigate("SignUpPassword", {
            passwordScreenType: "Create",
          })
        }
        style={[CommonStyles.container, { bottom: hp(60) }]}
      />
    </SpacerWrapper>
  );
};

export default SignUpProfileSetupScreen;
