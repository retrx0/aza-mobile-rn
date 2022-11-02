"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CommonStyles_1 = require("../../../../common/styles/CommonStyles");
var Themed_1 = require("../../../../components/Themed");
var Colors_1 = require("../../../../constants/Colors");
var Button_1 = require("../../../../components/buttons/Button");
var LayoutUtil_1 = require("../../../../common/util/LayoutUtil");
var react_native_picker_select_1 = require("react-native-picker-select");
var Gender_1 = require("../../../../constants/Gender");
var textHeader_1 = require("../../../../components/text/textHeader");
var useColorScheme_1 = require("../../../../hooks/useColorScheme");
var react_native_1 = require("react-native");
var formik_1 = require("formik");
var SignupValidation_1 = require("../components/SignupValidation");
var redux_1 = require("../../../../hooks/redux");
var newUserSlice_1 = require("../../../../redux/slice/newUserSlice");
var react_redux_1 = require("react-redux");
var SignUpProfile = function (_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState("unknown"), gender = _b[0], setGender = _b[1];
    var placeholder = {
        label: "Select Gender",
        value: null,
        color: Colors_1["default"].general.black
    };
    var colorScheme = useColorScheme_1["default"]();
    var dispatch = redux_1.useAppDispatch();
    var newUser = redux_1.useAppSelector(newUserSlice_1.selectNewUser);
    var _c = react_redux_1.useSelector(function (state) { return state.newUser; }), phone = _c.phone, token = _c.token;
    return (<>
      {console.log(token, "my++++++")}
      <formik_1.Formik validationSchema={SignupValidation_1.signUpValidationSchema} initialValues={{
            firstname: "",
            lastname: "",
            email: ""
        }} onSubmit={function (values) { return console.log(values); }}>
        {function (_a) {
            var handleChange = _a.handleChange, handleBlur = _a.handleBlur, handleSubmit = _a.handleSubmit, values = _a.values, errors = _a.errors, isValid = _a.isValid, touched = _a.touched;
            return (<>
            <Themed_1.View style={[{ width: "90%", alignSelf: "center", marginBottom: 30 }]}>
              <Themed_1.View style={{ flexDirection: "row", alignItems: "center" }}>
                <Themed_1.Text style={{ marginBottom: LayoutUtil_1.hp(5) }}>First name</Themed_1.Text>
                <Themed_1.Text style={{ color: "red" }}>*</Themed_1.Text>
              </Themed_1.View>
              <react_native_1.TextInput style={[
                    styles.textInput,
                    { backgroundColor: Colors_1["default"][colorScheme].backgroundSecondary },
                    { borderColor: Colors_1["default"][colorScheme].border },
                    { color: Colors_1["default"][colorScheme].text },
                ]} onChangeText={handleChange("firstname")} onBlur={handleBlur("firstname")} value={values.firstname} placeholderTextColor={Colors_1["default"][colorScheme].text}/>
              {errors.firstname && touched.firstname && (<Themed_1.Text style={styles.errorText}>{errors.firstname}</Themed_1.Text>)}
            </Themed_1.View>

            <Themed_1.View style={[{ width: "90%", alignSelf: "center", marginBottom: 30 }]}>
              <Themed_1.View style={{ flexDirection: "row", alignItems: "center" }}>
                <Themed_1.Text style={{ marginBottom: LayoutUtil_1.hp(5) }}>Last name</Themed_1.Text>
                <Themed_1.Text style={{ color: "red" }}>*</Themed_1.Text>
              </Themed_1.View>
              <react_native_1.TextInput style={[
                    styles.textInput,
                    { backgroundColor: Colors_1["default"][colorScheme].backgroundSecondary },
                    { borderColor: Colors_1["default"][colorScheme].border },
                    { color: Colors_1["default"][colorScheme].text },
                ]} onChangeText={handleChange("lastname")} onBlur={handleBlur("lastname")} value={values.lastname} placeholderTextColor={Colors_1["default"][colorScheme].text}/>
              {errors.lastname && touched.lastname && (<Themed_1.Text style={styles.errorText}>{errors.lastname}</Themed_1.Text>)}
            </Themed_1.View>

            <Themed_1.View style={[{ width: "90%", alignSelf: "center", marginBottom: 30 }]}>
              <Themed_1.View style={{ flexDirection: "row", alignItems: "center" }}>
                <Themed_1.Text style={{ marginBottom: LayoutUtil_1.hp(5) }}>Email</Themed_1.Text>
                <Themed_1.Text style={{ color: "red" }}>*</Themed_1.Text>
              </Themed_1.View>
              <react_native_1.TextInput style={[
                    styles.textInput,
                    { backgroundColor: Colors_1["default"][colorScheme].backgroundSecondary },
                    { borderColor: Colors_1["default"][colorScheme].border },
                    { color: Colors_1["default"][colorScheme].text },
                ]} autoCapitalize="none" onChangeText={handleChange("email")} onBlur={handleBlur("email")} value={values.email} keyboardType="email-address" placeholderTextColor={Colors_1["default"][colorScheme].text}/>
              {errors.email && touched.email && (<Themed_1.Text style={styles.errorText}>{errors.email}</Themed_1.Text>)}
            </Themed_1.View>

            <textHeader_1.TextHeader label="Gender" style={[
                    CommonStyles_1["default"].genderstyle,
                    { color: Colors_1["default"][colorScheme].text },
                ]}/>
            <Themed_1.View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    width: "90%",
                    backgroundColor: "#F2F2F2",
                    alignSelf: "center",
                    paddingHorizontal: LayoutUtil_1.wp(10),
                    borderRadius: 5,
                    marginTop: LayoutUtil_1.hp(7),
                    paddingVertical: LayoutUtil_1.hp(15),
                    justifyContent: "space-between"
                }}>
              <react_native_picker_select_1["default"] placeholder={placeholder} onUpArrow={function () { return true; }} onDownArrow={function () { return true; }} onValueChange={function (value) {
                    setGender(value);
                }} value={gender} items={Gender_1.Gender} pickerProps={{
                    style: {
                        backgroundColor: Colors_1["default"][colorScheme].backgroundSecondary
                    },
                    itemStyle: { color: Colors_1["default"][colorScheme].text }
                }} style={{
                    placeholder: {
                        fontSize: LayoutUtil_1.hp(16),
                        lineHeight: LayoutUtil_1.hp(20),
                        fontFamily: "Euclid-Circular-A",
                        color: Colors_1["default"].general.black,
                        fontWeight: "400"
                    }
                }}/>
            </Themed_1.View>
            <Button_1["default"] title="Continue" onPressButton={function () {
                    handleSubmit();
                    dispatch(newUserSlice_1.setNewUser({
                        firstname: values.firstname,
                        lastname: values.lastname,
                        email: values.email,
                        gender: gender,
                        isUsePasscodeAsPin: newUser.isUsePasscodeAsPin,
                        createdPasscode: newUser.createdPasscode
                    }));
                    dispatch(newUserSlice_1.registerUser({
                        firstname: values.firstname,
                        lastname: values.lastname,
                        email: values.email,
                        gender: gender,
                        isUsePasscodeAsPin: newUser.isUsePasscodeAsPin,
                        createdPasscode: newUser.createdPasscode,
                        phone: '',
                        token: token
                    }));
                    navigation.navigate("SignUpPassword", {
                        passwordScreenType: "Create"
                    });
                }} styleText={{
                    color: Colors_1["default"][colorScheme].buttonText
                }} style={[
                    {
                        backgroundColor: Colors_1["default"][colorScheme].button
                    },
                    CommonStyles_1["default"].container,
                    { bottom: LayoutUtil_1.hp(60) },
                ]} disabled={!isValid}/>
          </>);
        }}
      </formik_1.Formik>
    </>);
};
exports["default"] = SignUpProfile;
var styles = react_native_1.StyleSheet.create({
    textInput: {
        width: "100%",
        borderWidth: 0.5,
        borderRadius: 5,
        padding: 15,
        fontSize: 16,
        fontFamily: "Euclid-Circular-A"
    },
    errorText: {
        fontSize: 10,
        color: "red",
        marginTop: 5
    }
});
