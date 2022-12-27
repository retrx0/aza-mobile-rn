import React, { useState } from "react";
import CommonStyles from "../../../common/styles/CommonStyles";
import { PhoneInput, Text, View } from "../../../components/Themed";
import Colors from "../../../constants/Colors";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import BackButton from "../../../components/buttons/BackButton";
import Button from "../../../components/buttons/Button";
import { SignUpScreenProps } from "../../../../types";
import CancelButtonWithUnderline from "../../../components/buttons/CancelButtonWithUnderline";
import useColorScheme from "../../../hooks/useColorScheme";
import { useAppDispatch } from "../../../redux";
import {
  requestOtp,
  setEmail as setReduxStoreEmail,
} from "../../../redux/slice/newUserSlice";
import * as WebBrowser from "expo-web-browser";
import InputFormFieldNormal from "../../../components/input/InputFormFieldNormal";
import { requestOtpApi } from "../../../api/auth";
import { Formik } from "formik";
import * as yup from "yup";
import HideKeyboardOnTouch from "../../../common/util/HideKeyboardOnTouch";
import ThirdPartyAuthButtons from "../common/ThirdPartyAuthButtons";
import { toastError } from "../../../common/util/ToastUtil";
import ActivityModal from "../../../components/modal/ActivityModal";
import styles from "../../onboarding/OnboardingStyles";
import { hp } from "../../../common/util/LayoutUtil";

WebBrowser.maybeCompleteAuthSession();

const validationSchema = yup.object({
  email: yup.string().required("Email is required!").email(),
});

const SignUpScreen = ({ navigation }: SignUpScreenProps<"SignUpRoot">) => {
  const colorScheme = useColorScheme();
  const dispatch = useAppDispatch();

  const [buttonLoading, setButtonLoading] = useState(false);

  const handleSubmission = (email: string, emailValidated: boolean) => {
    dispatch(setReduxStoreEmail(email));
    requestOtpApi({
      email: email,
      phoneNumber: "",
    })
      .then((r) => {
        if (r) {
          !emailValidated
            ? navigation.navigate("SignUpOTP", {
                otpScreenType: "email",
              })
            : navigation.navigate("SignUpPhoneNumber");
        }
        setButtonLoading(false);
      })
      .catch(() => {
        toastError("Could not request OTP! try again");
        setButtonLoading(false);
      });
  };

  return (
    <SpacerWrapper>
      <HideKeyboardOnTouch>
        <View>
          <View style={{ marginLeft: 17, marginTop: 20 }}>
            <BackButton
              onPress={() => {
                navigation.getParent()?.navigate("Welcome");
              }}
            />
          </View>
          <View style={[CommonStyles.phoneContainer]}>
            <Text style={[CommonStyles.headerText]}>Sign Up for Aza</Text>
            <Text
              style={{
                padding: hp(3),
                margin: hp(3),
                fontFamily: "Euclid-Circular-A-Medium",
                marginLeft: hp(15),
                fontSize: hp(16),
                fontWeight: "500",
                marginBottom: hp(30),
              }}
            >
              Enter your email address to continue
            </Text>
            <Text
              style={{
                padding: hp(5),
                margin: hp(4),
                fontFamily: "Euclid-Circular-A-Semi-Bold",
                marginLeft: hp(15),
                fontSize: hp(18),
                fontWeight: "500",
              }}
            >
              Email Address <Text style={[CommonStyles.phoneNumber]}>*</Text>
            </Text>
          </View>
          <Formik
            validationSchema={validationSchema}
            initialValues={{ email: "" }}
            onSubmit={(values, actions) => {
              setButtonLoading(true);
              handleSubmission(values.email, false);
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              isValid,
              errors,
              touched,
            }) => {
              return (
                <View>
                  <InputFormFieldNormal
                    value={values.email}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    placeholderVisible={false}
                    type="email"
                    formikProps={{
                      errors: errors.email,
                      touched: touched.email,
                    }}
                    autoFocus={false}
                  />
                  <Button
                    title="Continue"
                    onPressButton={handleSubmit}
                    styleText={{ color: Colors[colorScheme].buttonText }}
                    style={[{ backgroundColor: Colors[colorScheme].button }]}
                    buttonLoading={buttonLoading}
                    disabled={!isValid}
                  />
                </View>
              );
            }}
          </Formik>
          <View style={[CommonStyles.row, CommonStyles.user]}>
            <Text style={[CommonStyles.account]}>
              Already have an account?{" "}
            </Text>
            <CancelButtonWithUnderline
              title="Login"
              onPressButton={() => navigation.getParent()?.navigate("SignIn")}
              color={Colors[colorScheme].text}
              styleText={{
                fontSize: hp(14),
                fontWeight: "500",
                fontFamily: "Euclid-Circular-A-Semi-Bold",
              }}
            />
          </View>
          {/* <Text style={[CommonStyles.orText]}>OR</Text> */}
          {/* // TODO TO BE IMPLEMENTED LATER */}
          {/* <ThirdPartyAuthButtons
            authType="signup"
            onValidated={(email) => handleSubmission(email, true)}
          /> */}
        </View>
      </HideKeyboardOnTouch>
    </SpacerWrapper>
  );
};

export default SignUpScreen;
