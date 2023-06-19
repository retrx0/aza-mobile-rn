import React, { useState } from "react";
import CommonStyles from "../../common/styles/CommonStyles";
import HideKeyboardOnTouch from "../../common/util/HideKeyboardOnTouch";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import { useAppDispatch, useAppSelector } from "../../redux";
import { getAppTheme } from "../../theme";
import { CommonScreenProps } from "../../common/navigation/types";
import InputFormFieldNormal from "../../components/input/InputFormFieldNormal";
import { Formik } from "formik";
import Button from "../../components/buttons/Button";
import { hp } from "../../common/util/LayoutUtil";
import * as yup from "yup";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { editNameAPI } from "../../api/user";
import { toastError } from "../../common/util/ToastUtil";
import { getUserInfo, selectUser } from "../../redux/slice/userSlice";
import { ScrollView, Text, TextInput, View } from "../../theme/Themed";
import BankSearchResultView from "./BankSearchResultView";
import Divider from "../../components/divider/Divider";
import {
  InputProps,
  UnderlinedInput,
} from "../../components/input/UnderlinedInput";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import Colors from "../../constants/Colors";
import { IBank } from "../../types/types.redux";
import { verifyBankAccountAPI } from "../../api/account";
import { updateStoredCredentials } from "../../common/util/StorageUtil";
import BoxTextInput from "../../components/input/BoxTextInput";

const BvnEdit = ({ navigation }: CommonScreenProps<"BvnEditName">) => {
  const selectedTheme = useAppSelector(selectAppTheme);
  const appTheme = getAppTheme(selectedTheme);
  const dispatch = useAppDispatch();
  const [selectedBank, setSelectedBank] = useState<IBank>();
  const [searchBanksModalVisisble, setSearchBanksModalVisisble] =
    useState(false);
  const [accountNumber, setAccountNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [loading, setLoading] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const { walletNumber } = useAppSelector(selectUser);

  const EdiNameValidationSchema = yup.object().shape({
    firstname: yup.string().required("Firstname is required"),
  });

  const getNameFromFullName = (
    type: "firstname" | "lastname",
    fullname: string
  ) => {
    if (fullname.length > 0) {
      const names = fullname.split(" ");
      const length = fullname.split(" ").length;
      if (type === "firstname") {
        return length > 2 ? names[0] + " " + names[1] : names[0];
      } else {
        return names[names.length - 1];
      }
    } else return "";
  };
  return (
    <SpacerWrapper>
      <ScrollView>
        <Formik
          validationSchema={EdiNameValidationSchema}
          initialValues={{
            firstname: "",
            lastname: "",
          }}
          onSubmit={(values) => {
            setButtonLoading(true);
            let _lastname =
              middleName.length === 0
                ? values.lastname
                : middleName.trim() + " " + values.lastname.trim();
            editNameAPI({
              firstName: values.firstname.trim(),
              lastName: _lastname,
            })
              .then((_) => {
                dispatch(getUserInfo());
                updateStoredCredentials({
                  fullName: values.firstname + ", " + values.lastname,
                });
                setButtonLoading(false);

                navigation.navigate("StatusScreen", {
                  status: "Successful",
                  statusIcon: "Success",
                  statusMessage:
                    "You have successfully changed your Aza account name",
                  navigateTo: "Home",
                });
              })

              .catch((e) => {
                toastError("Something went wrong!");
                setButtonLoading(false);
              });
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
            touched,
          }) => (
            <>
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "position" : "height"}
                style={CommonStyles.vaultcontainer}
              >
                <View
                  style={{
                    margin: 20,
                    backgroundColor: Colors[appTheme].backgroundSecondary,
                    height: 50,
                    borderRadius: 8,
                    padding: 5,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      setSearchBanksModalVisisble((t) => !t);
                    }}
                  >
                    <Text
                      style={{
                        marginBottom: 5,
                        marginTop: 10,
                        fontFamily: "Euclid-Circular-A-Semi-Bold",
                        fontSize: hp(16),
                      }}
                    >
                      {selectedBank ? selectedBank.bankName : "Choose bank"}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={[
                    CommonStyles.row,
                    {
                      alignItems: "center",
                      alignSelf: "flex-start",
                    },
                  ]}
                >
                  <TextInput
                    placeholderTextColor={Colors[appTheme].text}
                    style={{
                      backgroundColor: Colors[appTheme].backgroundSecondary,
                      fontFamily: "Euclid-Circular-A-Medium",
                      padding: 5,
                      marginTop: hp(10),
                      fontSize: hp(16),
                      fontWeight: "500",
                      height: 50,
                      margin: 20,
                      borderRadius: 8,
                      width: "75%",
                    }}
                    placeholder="Account Number"
                    keyboardType="number-pad"
                    returnKeyType="done"
                    editable={!loading}
                    value={accountNumber}
                    maxLength={10}
                    onChangeText={(text) => {
                      setAccountNumber(text);
                      if (!walletNumber) return;
                      if (text.length === 10) {
                        if (selectedBank) {
                          setLoading(true);
                          verifyBankAccountAPI(
                            selectedBank.bankCode,
                            text,
                            walletNumber
                          )
                            .then((res) => {
                              setFirstName(res.data.name);
                              values.firstname = getNameFromFullName(
                                "firstname",
                                res.data.name
                              );
                              values.lastname = getNameFromFullName(
                                "lastname",
                                res.data.name
                              );
                              setLoading(false);
                            })
                            .catch((e) => {
                              setLoading(false);
                            });
                        }
                      }
                    }}
                  />
                  <ActivityIndicator
                    style={{ alignSelf: "center" }}
                    animating={loading}
                  />
                </View>
                <Divider />
                <View style={{ marginVertical: 5 }}></View>
                <InputFormFieldNormal
                  placeholderVisible
                  onChangeText={handleChange("firstname")}
                  onBlur={handleBlur("firstname")}
                  value={values.firstname}
                  type="firstname"
                  formikProps={{
                    errors: errors.firstname,
                    touched: touched.firstname,
                  }}
                  autoFocus={false}
                />
                <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
                  <Text
                    style={{
                      marginBottom: hp(5),
                      fontSize: hp(18),
                      fontFamily: "Euclid-Circular-A-Medium",
                      fontWeight: "500",
                    }}
                  >
                    Middlename
                  </Text>
                  <TextInput
                    style={[CommonStyles.textInput]}
                    keyboardType="default"
                    autoComplete="name-middle"
                    onChangeText={(text) => setMiddleName(text)}
                    value={middleName}
                  />
                </View>

                <InputFormFieldNormal
                  placeholderVisible
                  onChangeText={handleChange("lastname")}
                  onBlur={handleBlur("lastname")}
                  value={values.lastname}
                  type="lastname"
                  formikProps={{
                    errors: errors.lastname,
                    touched: touched.lastname,
                  }}
                  autoFocus={false}
                />
              </KeyboardAvoidingView>

              <Modal
                visible={searchBanksModalVisisble}
                style={{
                  justifyContent: "flex-end",
                  flex: 1,
                  marginTop: 50,
                }}
                animationType="slide"
                presentationStyle="formSheet"
                collapsable={true}
                onRequestClose={() => setSearchBanksModalVisisble(false)}
              >
                <View style={{ height: "100%", paddingTop: 50 }}>
                  <BankSearchResultView
                    onPress={(bank) => {
                      setSelectedBank(bank);
                      setSearchBanksModalVisisble((f) => !f);
                    }}
                  />
                </View>
              </Modal>

              <Button
                title="Continue"
                onPressButton={handleSubmit}
                styleText={{}}
                style={[{}]}
                disabled={!isValid}
                buttonLoading={buttonLoading}
              />
            </>
          )}
        </Formik>
      </ScrollView>
    </SpacerWrapper>
  );
};

const PrimaryInputWithLodingProp = ({
  loading,
  value,
  onChange,
}: {
  loading: boolean;
  value: string;
  onChange: (text) => void;
} & InputProps) => {
  const selectedTheme = useAppSelector(selectAppTheme);
  const appTheme = getAppTheme(selectedTheme);
  return (
    <View
      style={[
        CommonStyles.row,
        {
          alignItems: "center",
          alignSelf: "flex-start",
        },
      ]}
    >
      <TextInput
        placeholderTextColor={Colors[appTheme].text}
        style={{
          backgroundColor: Colors[appTheme].backgroundSecondary,
          fontFamily: "Euclid-Circular-A-Medium",
          padding: 5,
          marginTop: hp(10),
          fontSize: hp(16),
          fontWeight: "500",
          height: 50,
          margin: 20,
          borderRadius: 8,
          width: "75%",
        }}
        placeholder="Account Number"
        keyboardType="number-pad"
        returnKeyType="done"
        editable={!loading}
        value={value}
        maxLength={10}
        onChangeText={(text) => {
          onChange(text);
        }}
      />
      <ActivityIndicator style={{ alignSelf: "center" }} animating={loading} />
    </View>
  );
};

export default BvnEdit;
const styles = StyleSheet.create({
  textInput: {
    width: "100%",
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 15,
    fontSize: hp(18),
    fontFamily: "Euclid-Circular-A",
  },
  errorText: {
    fontSize: hp(14),
    color: "red",
    marginTop: 5,
  },
});
