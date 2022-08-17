import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import CommonStyles from "../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import BackButton from "../../../components/buttons/BackButton";
import ButtonLg from "../../../components/buttons/ButtonLg";
import BoxTextInput from "../../../components/input/BoxTextInput";
import { Text, View } from "../../../components/Themed";
import { SignUpStackProps } from "./SignUpNavigator";
<<<<<<< HEAD
import RNPickerSelect from "react-native-picker-select";
import { GENDER } from "../Password/SignInCard";
import { Primary } from "../../../common/colors";
// import { wp } from "../../../common/utils";
// import { hp } from "../../../common/util/utils";
=======
>>>>>>> 3c3de3ccf8ce68a77a835de75831bed65131f8a3
import { Picker } from "@react-native-picker/picker";
import Colors from "../../../constants/Colors";

<<<<<<< HEAD
const SignUpEmailScreen = ({
  navigation,
}: NativeStackScreenProps<SignUpStackProps>) => {
  // const [gender, setGender] = useState(GENDER);
  // const placeholder = {
  //   label: "Select gender..",
  //   value: null,
  //   color: Primary,
  // };
=======
const SignUpEmailScreen = ({ navigation }: NativeStackScreenProps<SignUpStackProps>) => {
>>>>>>> 3c3de3ccf8ce68a77a835de75831bed65131f8a3
  return (
    <SpacerWrapper>
      <BackButton onPress={() => navigation.goBack()} />
      <View>
        <Text style={[CommonStyles.headerText]}>Profile Setup</Text>
        <Text style={[CommonStyles.bodyText]}>Set up your account</Text>
      </View>
<<<<<<< HEAD
      <BoxTextInput
        placeHolder='Full Name'
        required
        value='John Appleased'
        onChange={() => {}}
      />
      <BoxTextInput
        placeHolder='Email'
        required
        value='johnappleased@apple.com'
        onChange={() => {}}
      />
      {/* <RNPickerSelect
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
            height: hp(55),
            borderWidth: 0.7,
            borderColor: Primary,
            borderRadius: 10,
            marginTop: hp(7),
            marginLeft: hp(20),
            paddingVertical: hp(20),
          },
          placeholder: {
            fontSize: 20,
            paddingVertical: hp(10),
          },
        }}
      /> */}
=======
      <BoxTextInput placeHolder="Full Name" required value="John Appleased" onChange={() => {}} />
      <BoxTextInput placeHolder="Email" required value="johnappleased@apple.com" onChange={() => {}} />
>>>>>>> 3c3de3ccf8ce68a77a835de75831bed65131f8a3
      <Picker collapsable>
        <Picker.Item label='male' value={"Male"} />
        <Picker.Item label='female' value={"Female"} />
      </Picker>
      <ButtonLg
        color={Colors.general.black}
        alt={false}
        onPress={() => {
          navigation.navigate("SignUpPassword");
        }}
        title='Continue'
      />
    </SpacerWrapper>
  );
};

export default SignUpEmailScreen;
