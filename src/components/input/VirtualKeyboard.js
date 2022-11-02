"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var svg_1 = require("../../../assets/svg");
var Colors_1 = require("../../constants/Colors");
var useColorScheme_1 = require("../../hooks/useColorScheme");
var Themed_1 = require("../Themed");
var VirtualKeyboard = function (_a) {
    var value = _a.value, setValue = _a.setValue;
    var colorScheme = useColorScheme_1["default"]();
    var onKeyPress = function (key) {
        if ((value === "" && key === "0") || (value === "" && key === ",")) {
            //prevents '0' and ',' as first characters
            return;
        }
        var currentText = value;
        if (key !== "backIcon") {
            currentText += key;
            setValue(currentText);
        }
        else {
            currentText = currentText.slice(0, -1);
            setValue(currentText);
        }
    };
    var makeCell = function (key, i) {
        return (<react_native_1.TouchableOpacity key={i} onPress={function () { return onKeyPress(key); }} style={{
                flex: 1,
                justifyContent: "center"
            }}>
        {key === "backIcon" ? (<Themed_1.View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    transform: [{ rotate: "180deg" }]
                }}>
            <svg_1.ArrowRightIcon color={colorScheme === "dark"
                    ? Colors_1["default"].dark.mainText
                    : Colors_1["default"].light.text} size={24}/>
          </Themed_1.View>) : (<Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: "Euclid-Circular-A-Medium",
                    fontSize: 16,
                    padding: 10,
                    textAlign: "center"
                }}>
            {key}
          </Themed_1.Text>)}
      </react_native_1.TouchableOpacity>);
    };
    var makeRow = function (keysInRow) {
        var cells = keysInRow.map(function (val, i) { return makeCell(val, i); });
        return (<Themed_1.View style={{
                flexDirection: "row",
                marginTop: 30,
                alignItems: "center",
                justifyContent: "space-between"
            }}>
        {cells}
      </Themed_1.View>);
    };
    return (<Themed_1.View style={{ width: "100%" }}>
      {makeRow(["1", "2", "3"])}
      {makeRow(["4", "5", "6"])}
      {makeRow(["7", "8", "9"])}
      {makeRow([",", "0", "backIcon"])}
    </Themed_1.View>);
};
exports["default"] = VirtualKeyboard;
