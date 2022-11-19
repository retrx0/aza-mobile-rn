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

WebBrowser.maybeCompleteAuthSession();

const validationSchema = yup.object({
  email: yup.string().required("Email is required!").email(),
});

const SignUpScreen = ({ navigation }: SignUpScreenProps<"SignUpRoot">) => {
  const colorScheme = useColorScheme();
  const dispatch = useAppDispatch();

  return (
    <SpacerWrapper>
      <HideKeyboardOnTouch>
        <View>
          <View style={{ marginLeft: 20 }}>
            <BackButton
              onPress={() => {
                navigation.getParent()?.navigate("Welcome");
              }}
            />
          </View>
          <View style={[CommonStyles.phoneContainer]}>
            <Text style={[CommonStyles.headerText]}>Sign Up for Aza</Text>
            <Text style={[CommonStyles.bodyText]}>
              Enter your email address to continue
            </Text>
            <Text style={[CommonStyles.phoneText]}>
              Email Address <Text style={[CommonStyles.phoneNumber]}>*</Text>
            </Text>
          </View>
          <Formik
            validationSchema={validationSchema}
            initialValues={{ email: "" }}
            onSubmit={(values, actions) => {
              dispatch(setReduxStoreEmail(values.email));
              requestOtpApi({
                email: values.email,
                phoneNumber: "",
              })
                .then((r) => {
                  if (r)
                    navigation.navigate("SignUpOTP", {
                      otpScreenType: "email",
                    });
                })
                .catch((e) => {
                  console.error(e);
                  toastError("Could not request OTP! try again");
                });
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
                    style={[
                      { backgroundColor: Colors[colorScheme].button },
                      CommonStyles.otpbutton,
                    ]}
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
            />
          </View>
          <Text style={[CommonStyles.orText]}>OR</Text>
          <ThirdPartyAuthButtons />
        </View>
      </HideKeyboardOnTouch>
    </SpacerWrapper>
  );
};

export default SignUpScreen;
