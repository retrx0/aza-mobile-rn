import React from "react";
import CommonStyles from "../../common/styles/CommonStyles";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import BackButton from "../../components/buttons/BackButton";
import { View as View, Text as Text } from "../../theme/Themed";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import { useAppSelector } from "../../redux";
import { getAppTheme } from "../../theme";
import { CommonScreenProps } from "../../common/navigation/types";
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
        <View style={[CommonStyles.phoneContainer, { marginBottom: 0 }]}>
          <Text style={[CommonStyles.headerText]}>Edit Name</Text>
          <Text style={[CommonStyles.bodyText]}>
            Edit your name to match BVN
          </Text>
          <Text style={[CommonStyles.bodyText]}>
            Select bank name and type in an existing bank account number
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
