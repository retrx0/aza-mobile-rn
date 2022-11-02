"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var svg_1 = require("../../../../../assets/svg");
var CommonStyles_1 = require("../../../../common/styles/CommonStyles");
var Themed_1 = require("../../../../components/Themed");
var Colors_1 = require("../../../../constants/Colors");
var redux_1 = require("../../../../hooks/redux");
var useColorScheme_1 = require("../../../../hooks/useColorScheme");
var userSlice_1 = require("../../../../redux/slice/userSlice");
function AccountDetails() {
    var colorScheme = useColorScheme_1["default"]();
    var _a = react_1.useState(true), secure = _a[0], setSecure = _a[1];
    var user = redux_1.useAppSelector(userSlice_1.selectUser);
    return (<Themed_1.View style={[CommonStyles_1["default"].col, { alignItems: "center" }]}>
      <react_native_1.TouchableOpacity onPress={function () { return setSecure(!secure); }}>
        <Themed_1.View lightColor="#eaeaec" darkColor="#1D1D20" style={[
            CommonStyles_1["default"].row,
            {
                paddingHorizontal: 15,
                paddingVertical: 10,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50
            },
        ]}>
          <Themed_1.Text lightColor={"#000000"} darkColor={"#CCCCCC"} style={{ fontSize: 12 }}>
            Nigerian Naira
          </Themed_1.Text>
          <react_native_1.Image style={{ width: 15, height: 15, marginHorizontal: 10 }} source={require("../../../../../assets/images/icons/NigerianFlag.png")}/>
          <Themed_1.Text lightColor={Colors_1["default"].general.darkGrey} darkColor={Colors_1["default"].dark.tabIconDefault} style={{ fontSize: 12 }}>
            NGN
          </Themed_1.Text>
        </Themed_1.View>
      </react_native_1.TouchableOpacity>
      <Themed_1.View style={[CommonStyles_1["default"].row]}>
        {secure ? (<>
            <svg_1.NairaIcon size={25} color={colorScheme === "dark"
                ? Colors_1["default"].dark.mainText
                : Colors_1["default"].light.text} style={{ marginRight: 2 }}/>
            <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                fontFamily: "Euclid-Circular-A-Semi-Bold",
                fontSize: 24,
                marginVertical: 10
            }}>
              {user.azaBalance}
            </Themed_1.Text>
          </>) : (<Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                fontFamily: "Euclid-Circular-A-Semi-Bold",
                fontSize: 24,
                marginVertical: 10
            }}>
            **********
          </Themed_1.Text>)}
      </Themed_1.View>
      <Themed_1.View style={[CommonStyles_1["default"].row]}>
        <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
            fontSize: 12
        }}>
          Aza Number:
        </Themed_1.Text>
        <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
            marginLeft: 3,
            fontSize: 12,
            fontFamily: "Euclid-Circular-A-Semi-Bold"
        }}>
          {user.azaAccountNumber}
        </Themed_1.Text>
      </Themed_1.View>
    </Themed_1.View>);
}
exports["default"] = AccountDetails;
