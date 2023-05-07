import React, { useState } from "react";
import CommonStyles from "../../common/styles/CommonStyles";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import BackButton from "../../components/buttons/BackButton";
import { View as View, Text as Text, TextInput } from "../../theme/Themed";
import { SignUpScreenProps } from "../../types/types.navigation";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import HideKeyboardOnTouch from "../../common/util/HideKeyboardOnTouch";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import { useAppSelector, useAppDispatch } from "../../redux";
import { getAppTheme } from "../../theme";
import { CommonScreenProps } from "../../common/navigation/types";
import InputFormFieldNormal from "../../components/input/InputFormFieldNormal";
import { Formik } from "formik";
import Button from "../../components/buttons/Button";
import { hp, wp } from "../../common/util/LayoutUtil";
import { Colors } from "react-native/Libraries/NewAppScreen";
import * as yup from "yup";
import BvnEdit from "./Edit";

const BvnEditName = ({
  navigation,
  route,
}: CommonScreenProps<"BvnEditName">) => {
  const selectedTheme = useAppSelector(selectAppTheme);
  const appTheme = getAppTheme(selectedTheme);
  const EdiNameValidationSchema = yup.object().shape({
    firstname: yup.string().required("Firstname is required"),
    lastname: yup.string().required("Lastname is required"),
  });
  return (
    <SpacerWrapper>
      <View style={{ marginLeft: 20 }}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>

      <View>
        <View style={[CommonStyles.phoneContainer]}>
          <Text style={[CommonStyles.headerText]}>Edit Name</Text>
          <Text style={[CommonStyles.bodyText]}>
            Edit your name to match BVN
          </Text>
        </View>
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <BvnEdit navigation={navigation} route={route} />
      </TouchableWithoutFeedback>
    </SpacerWrapper>
  );
};

export default BvnEditName;
