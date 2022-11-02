"use strict";
exports.__esModule = true;
var react_native_element_dropdown_1 = require("react-native-element-dropdown");
var react_1 = require("react");
var svg_1 = require("../../../assets/svg");
var Colors_1 = require("../../constants/Colors");
var useColorScheme_1 = require("../../hooks/useColorScheme");
var Themed_1 = require("../Themed");
var CustomDropdown = function (_a) {
    var data = _a.data, value = _a.value, setValue = _a.setValue, placeholder = _a.placeholder;
    var colorScheme = useColorScheme_1["default"]();
    return (<react_native_element_dropdown_1.Dropdown style={{
            borderBottomWidth: 0.6,
            borderBottomColor: Colors_1["default"][colorScheme].separator
        }} placeholderStyle={{
            color: Colors_1["default"][colorScheme].secondaryText,
            fontSize: 14,
            fontFamily: "Euclid-Circular-A-Medium"
        }} selectedTextStyle={{
            color: colorScheme === "dark" ? "#E7E9EA" : "#000"
        }} data={data} maxHeight={300} labelField="label" valueField="value" activeColor="transparent" containerStyle={{
            backgroundColor: colorScheme === "dark" ? "#3A3D42" : "white",
            paddingHorizontal: 15,
            borderRadius: 10,
            borderWidth: 0,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.3,
            shadowRadius: 10,
            elevation: 5
        }} itemContainerStyle={{
            borderBottomWidth: 1,
            paddingVertical: 15,
            borderBottomColor: colorScheme === "dark" ? "#484B51" : "#EAEAEC"
        }} renderItem={function (item) { return (<Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                fontSize: 14
            }}>
          {item.label}
        </Themed_1.Text>); }} placeholder={placeholder} value={value} onChange={function (item) {
            setValue(item.value);
        }} renderRightIcon={function () { return (<Themed_1.View style={{ transform: [{ rotate: "90deg" }] }}>
          <svg_1.ChevronRightIcon color={"#2A9E17"} size={20}/>
        </Themed_1.View>); }}/>);
};
exports["default"] = CustomDropdown;
