"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var Themed_1 = require("../Themed");
var Colors_1 = require("../../constants/Colors");
var CommonStyles_1 = require("../../common/styles/CommonStyles");
var useColorScheme_1 = require("../../hooks/useColorScheme");
function BottomSheetListItem(_a) {
    var itemName = _a.itemName, itemIcon = _a.itemIcon, onPress = _a.onPress;
    var colorScheme = useColorScheme_1["default"]();
    return (<>
      <react_native_1.TouchableOpacity onPress={onPress}>
        <react_native_1.View style={[
            CommonStyles_1["default"].row,
            { alignSelf: "flex-start", paddingVertical: 25 },
        ]}>
          {itemIcon}
          <Themed_1.Text style={{ marginLeft: 10, fontFamily: "Euclid-Circular-A-Medium" }}>
            {itemName}
          </Themed_1.Text>
        </react_native_1.View>
      </react_native_1.TouchableOpacity>
      {/* divider */}
      <react_native_1.View style={{
            backgroundColor: Colors_1["default"][colorScheme].separator,
            width: "100%",
            height: 1
        }}/>
    </>);
}
exports["default"] = BottomSheetListItem;
