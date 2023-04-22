import React, { useState } from "react";

import { View as View, Text as Text } from "../../../../theme/Themed";
import Button from "../../../../components/buttons/Button";
import BoxTextInput from "../../../../components/input/BoxTextInput";

import { CommonScreenProps } from "../../../../common/navigation/types";
import { hp } from "../../../../common/util/LayoutUtil";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import CommonStyles from "../../../../common/styles/CommonStyles";

import { useAppSelector } from "../../../../redux";
import { selectUser } from "../../../../redux/slice/userSlice";
import useNavigationHeader from "../../../../hooks/useNavigationHeader";
import * as yup from "yup";
import { Formik } from "formik";
import useSettings from "../hooks/useSettings";
import InputFormFieldNormal from "../../../../components/input/InputFormFieldNormal";

const ChangeEmailScreen = ({
  navigation,
  route,
}: CommonScreenProps<"ChangeEmail">) => {
  const { emailAddress } = useAppSelector(selectUser);
  const { changeEmailAddress, loading } = useSettings({ navigation, route });

  useNavigationHeader(navigation, "New Email");

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("New email is required!")
      .notOneOf([emailAddress])
      .email(),
  });

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <View
          style={{ marginBottom: 10, marginTop: 30, paddingHorizontal: hp(20) }}
        >
          <Text
            style={{
              fontSize: hp(16),
              fontFamily: "Euclid-Circular-A-Medium",
              fontWeight: "500",
              // marginTop: hp(30),
            }}
          >
            Change your email
          </Text>
          <BoxTextInput
            placeHolder="Current Email"
            required={true}
            value={emailAddress}
            onChange={() => {}}
            labelStyle={{
              fontSize: hp(16),
              fontFamily: "Euclid-Circular-A-Semi-Bold",
              marginLeft: hp(5),
              fontWeight: "500",
            }}
            inputStyle={undefined}
            containerStyle={undefined}
            inputProps={{
              keyboardType: "email-address",
              textContentType: "emailAddress",
              autoComplete: "email",
              editable: false,
            }}
          />
        </View>
        <Formik
          validationSchema={validationSchema}
          initialValues={{ email: "" }}
          onSubmit={(values, actions) => {
            changeEmailAddress(values.email, false);
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
                  placeholderVisible={true}
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
                  buttonLoading={loading}
                  disabled={!isValid}
                />
              </View>
            );
          }}
        </Formik>
      </View>
    </SpacerWrapper>
  );
};

export default ChangeEmailScreen;
