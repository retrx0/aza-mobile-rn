/* eslint-disable no-console */
import React, { useState } from "react";
import Colors from "../../../constants/Colors";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import CommonStyles from "../../../common/styles/CommonStyles";
// import { View } from "../../../theme/components/View";
// import { Text } from "../../../theme/components/Text";
import BackButton from "../../../components/buttons/BackButton";
import Button from "../../../components/buttons/Button";
import { SignInScreenProps } from "../../../../types";
import useColorScheme from "../../../hooks/useColorScheme";
import { useAppDispatch } from "../../../redux";
import { hp } from "../../../common/util/LayoutUtil";
import InputFormEmail from "../../../components/input/InputFormFieldNormal";
import { Formik } from "formik";
import * as yup from "yup";
import { getUserLoginInfoAPI, requestOtpApi } from "../../../api/auth";
import { setUserPhoneAndFullName } from "../../../redux/slice/userSlice";
import ThirdPartyAuthButtons from "../common/ThirdPartyAuthButtons";
import HideKeyboardOnTouch from "../../../common/util/HideKeyboardOnTouch";
import { toastError } from "../../../common/util/ToastUtil";
import { Text2 as Text } from "../../../theme/components/Text2";
import { View2 as View } from "../../../theme/components/View2";

const SignInScreen = ({ navigation }: SignInScreenProps<"SignInRoot">) => {
  const dispatch = useAppDispatch();

  const [buttonLoading, setButtonLoading] = useState(false);

  const validationSchema = yup.object({
    email: yup.string().required("Email is required!").email(),
  });

  const handleSubmission = (email: string) => {
    setButtonLoading(true);
    getUserLoginInfoAPI(email)
      .then((data) => {
        setButtonLoading(false);
        if (data) {
          dispatch(
            setUserPhoneAndFullName({
              phoneNumber: data.phoneNumber,
              fullName: data.fullName,
            })
          );
          // requestOtpApi({
          //   email: "",
          //   phoneNumber: data.phoneNumber,
          // }).then(() => setButtonLoading(false));
          navigation.navigate("SignInOTP");
        }
      })
      .catch(() => {
        toastError("Invalid email!");
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
