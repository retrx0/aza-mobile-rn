/* eslint-disable no-console */
import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";

import SpacerWrapper from "../../../common/util/SpacerWrapper";
import CommonStyles from "../../../common/styles/CommonStyles";
import BackButton from "../../../components/buttons/BackButton";
import Button from "../../../components/buttons/Button";
import InputFormEmail from "../../../components/input/InputFormFieldNormal";

import { requestOtpApi } from "../../../api/auth";
import { getUserLoginInfoAPI } from "../../../api/user";

import { useAppDispatch } from "../../../redux";
import {
  setProfilePicture,
  setUserEmail,
  setUserPhoneAndFullName,
} from "../../../redux/slice/userSlice";

import { SignInScreenProps } from "../../../types/types.navigation";
import { hp } from "../../../common/util/LayoutUtil";
import ThirdPartyAuthButtons from "../common/ThirdPartyAuthButtons";
import HideKeyboardOnTouch from "../../../common/util/HideKeyboardOnTouch";
import { toastError } from "../../../common/util/ToastUtil";
import { Text, View } from "../../../theme/Themed";
import { WhatsAppLogo } from "../../../../assets/svg";
import { TouchableOpacity } from "react-native";
import Colors from "../../../constants/Colors";
import SecondaryButton from "../../../components/buttons/SecondaryButton";

const SignInScreen = ({ navigation }: SignInScreenProps<"SignInRoot">) => {
  const dispatch = useAppDispatch();

  const [buttonLoading, setButtonLoading] = useState(false);
  const [whatsAppButtonLoading, setWhatsAppButtonLoading] = useState(false);

  const validationSchema = yup.object({
    email: yup.string().required("Email is required!").email(),
    isWhatsAppOTP: yup.bool().required(),
  });

  const handleSubmission = async (email: string, whatsAppOTP: boolean) => {
    whatsAppOTP ? setWhatsAppButtonLoading(true) : setButtonLoading(true);
    getUserLoginInfoAPI(email)
      .then((userLoginInfo) => {
        if (userLoginInfo) {
          whatsAppOTP ? setWhatsAppButtonLoading(true) : setButtonLoading(true);
          dispatch(
            setUserPhoneAndFullName({
              phoneNumber: userLoginInfo.data.phoneNumber,
              fullName: userLoginInfo.data.fullName,
            })
          );
          dispatch(setProfilePicture(userLoginInfo.data.profilePictureUrl));
          dispatch(setUserEmail(email));
          requestOtpApi({
            email: "",
            phoneNumber: userLoginInfo.data.phoneNumber,
            sendToWhatsApp: whatsAppOTP,
          })
            .then(() =>
              whatsAppOTP
                ? setWhatsAppButtonLoading(false)
                : setButtonLoading(false)
            )
            .catch(() =>
              whatsAppOTP
                ? setWhatsAppButtonLoading(false)
                : setButtonLoading(false)
            );

          navigation.navigate("SignInOTP");
        } else {
          toastError("Invalid email!");
          setButtonLoading(false);
          whatsAppOTP
            ? setWhatsAppButtonLoading(false)
            : setButtonLoading(false);
        }
      })
      .catch((e) => {
        console.error("Error fetching user data: ", e);
        toastError("Invalid email!");
        setButtonLoading(false);
        whatsAppOTP ? setWhatsAppButtonLoading(false) : setButtonLoading(false);
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
            initialValues={{ email: "", isWhatsAppOTP: false }}
            onSubmit={(values, actions) => {
              handleSubmission(values.email, values.isWhatsAppOTP);
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
                  <View style={{ marginBottom: hp(30) }}>
                    <Button
                      title="SMS OTP"
                      onPressButton={() => {
                        values.isWhatsAppOTP = false;
                        handleSubmit();
                      }}
                      style={[
                        {
                          marginTop: 20,
                        },
                      ]}
                      buttonLoading={buttonLoading}
                      disabled={!isValid}
                    />
                  </View>
                  <SecondaryButton
                    title="Whatsapp OTP"
                    Icon={() => (
                      <WhatsAppLogo color={Colors.general.whatsapp} size={20} />
                    )}
                    onPress={() => {
                      values.isWhatsAppOTP = true;
                      handleSubmit();
                    }}
                    disabled={!isValid}
                    isLoading={whatsAppButtonLoading}
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
