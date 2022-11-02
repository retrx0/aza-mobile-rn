"use strict";
exports.__esModule = true;
var react_1 = require("react");
var LayoutUtil_1 = require("../../common/util/LayoutUtil");
var Colors_1 = require("../../constants/Colors");
var useColorScheme_1 = require("../../hooks/useColorScheme");
var Themed_1 = require("../Themed");
var BoxTextInput = function (props) {
    var colorScheme = useColorScheme_1["default"]();
    return (<Themed_1.View>
      <Themed_1.Text style={[{ paddingBottom: 5, marginTop: 20 }]}>
        {props.placeHolder}
        <Themed_1.Text style={{ color: "red" }}>{props.required ? "*" : ""}</Themed_1.Text>
      </Themed_1.Text>
      <Themed_1.TextInput style={[
            {
                width: "100%",
                alignSelf: "center",
                borderWidth: 0.5,
                borderColor: Colors_1["default"][colorScheme].border,
                borderRadius: 5,
                padding: 15,
                marginBottom: 20,
                fontSize: 16,
                fontFamily: "Euclid-Circular-A",
                height: LayoutUtil_1.hp(50)
            },
        ]} value={props.value} onChange={props.onChange}/>
    </Themed_1.View>);
};
exports["default"] = BoxTextInput;
