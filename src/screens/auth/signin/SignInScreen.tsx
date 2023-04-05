/* eslint-disable no-console */
import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";

import Colors from "../../../constants/Colors";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import CommonStyles from "../../../common/styles/CommonStyles";
// import { View, Text } from "../../../theme/Themed";
//
import BackButton from "../../../components/buttons/BackButton";
import Button from "../../../components/buttons/Button";
import InputFormEmail from "../../../components/input/InputFormFieldNormal";

import { requestOtpApi } from "../../../api/auth";
import { getUserLoginInfoAPI } from "../../../api/user";

import { useAppDispatch } from "../../../redux";
import { setUserPhoneAndFullName } from "../../../redux/slice/userSlice";

import { SignInScreenProps } from "../../../types/types.navigation";
import useColorScheme from "../../../hooks/useColorScheme";
import { hp } from "../../../common/util/LayoutUtil";
import ThirdPartyAuthButtons from "../common/ThirdPartyAuthButtons";
import HideKeyboardOnTouch from "../../../common/util/HideKeyboardOnTouch";
import { toastError } from "../../../common/util/ToastUtil";
import { Text as Text, View as View } from "../../../theme/Themed";

const SignInScreen = ({ navigation }: SignInScreenProps<"SignInRoot">) => {
  const dispatch = useAppDispatch();

  const [buttonLoading, setButtonLoading] = useState(false);

  const validationSchema = yup.object({
    email: yup.string().required("Email is required!").email(),
  });

  const handleSubmission = async (email: string) => {
    setButtonLoading(true);
    const userLoginInfo = await getUserLoginInfoAPI(email);
    if (userLoginInfo) {
      dispatch(
        setUserPhoneAndFullName({
          phoneNumber: userLoginInfo.data.phoneNumber,
          fullName: userLoginInfo.data.fullName,
        })
      );
      requestOtpApi({
        email: "",
        phoneNumber: userLoginInfo.data.phoneNumber,
      }).then(() => setButtonLoading(false));

      navigation.navigate("SignInOTP");
    } else {
      toastError("Invalid email!");
      setButtonLoading(false);
    }
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
          <View style={CommonStyles.phoneContainer}>
            <Text style={[CommonStyles.headerText]}>Login</Text>
            <Text style={[CommonStyles.bodyText]}>
              Enter your email to continue
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
              Email Address <Text style={{ color: "red" }}>*</Text>
            </Text>
          </View>

          <Formik
            validationSchema={validationSchema}
            initialValues={{ email: "" }}
            onSubmit={(values, actions) => {
              handleSubmission(values.email);
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
                  <InputFormEmail
                    value={values.email}
                    onChangeText={handleChange("email")}
                    placeholderVisible={false}
                    type="email"
                    formikProps={{
                      errors: errors.email,
                      touched: touched.email,
                    }}
                    autoFocus={false}
                    onBlur={handleBlur("blur")}
                  />
                  <Button
                    title="Continue"
                    onPressButton={handleSubmit}
                    style={[
                      {
                        marginTop: 20,
                      },
                    ]}
                    buttonLoading={buttonLoading}
                    disabled={!isValid}
                  />
                </View>
              );
            }}
          </Formik>

          {/* <Text style={[CommonStyles.orText]}>OR</Text> */}
          {/* // TODO TO BE IMPLEMENTED LATER */}
          {/* <ThirdPartyAuthButtons
            onValidated={(email) => handleSubmission(email)}
            authType="signin"
          /> */}
        </View>
      </HideKeyboardOnTouch>
    </SpacerWrapper>
  );
};

export default SignInScreen;
