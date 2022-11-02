"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var styles_1 = require("../airtime-screens/styles");
var useColorScheme_1 = require("../../../../hooks/useColorScheme");
var Button_1 = require("../../../../components/buttons/Button");
var Colors_1 = require("../../../../constants/Colors");
function MyButton(_a) {
    var disabled = _a.disabled, title = _a.title, onPress = _a.onPress, style = _a.style, styleText = _a.styleText;
    var colorScheme = useColorScheme_1["default"]();
    return (<react_native_1.View style={[
            styles_1.AIrtimeStyles.button,
            {
                width: "100%",
                opacity: disabled ? 0.3 : 1
            },
            style,
        ]}>
      <Button_1["default"] disabled={disabled} title={title} onPressButton={onPress} styleText={[styleText, { color: Colors_1["default"][colorScheme].buttonText }]} style={{ backgroundColor: Colors_1["default"][colorScheme].button }}/>
    </react_native_1.View>);
}
exports["default"] = MyButton;
