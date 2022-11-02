"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var svg_1 = require("../../../../../assets/svg");
var Themed_1 = require("../../../../components/Themed");
var Colors_1 = require("../../../../constants/Colors");
var LinkBVN = function (_a) {
    var navigation = _a.navigation, isBvnLinked = _a.isBvnLinked;
    return (<Themed_1.View style={{
            marginTop: 50,
            backgroundColor: "#FAEB9E",
            paddingVertical: 15,
            paddingHorizontal: 30,
            borderRadius: 10,
            display: isBvnLinked ? "none" : "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "row"
        }}>
      <svg_1.DangerIcon />
      <Themed_1.View style={{
            marginLeft: 10,
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "transparent"
        }}>
        <Themed_1.Text style={{
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 12,
            color: Colors_1["default"].general.darkGrey
        }}>
          Link your BVN to start using AZA
        </Themed_1.Text>
        <Themed_1.Text style={{
            fontSize: 10,
            color: "black",
            marginTop: 5
        }}>
          Link your BVN to upgrade your account as there are certain limits on
          it.
        </Themed_1.Text>
        <react_native_1.TouchableOpacity onPress={function () {
            return navigation.navigate("Common", {
                screen: "BvnVerification",
                params: {
                    onVerifyNavigateBackTo: "Home"
                }
            });
        }}>
          <Themed_1.View style={{
            backgroundColor: "transparent",
            borderBottomWidth: 1,
            paddingBottom: 1,
            marginTop: 10,
            alignSelf: "flex-start"
        }}>
            <Themed_1.Text style={{
            fontSize: 14,
            fontFamily: "Euclid-Circular-A-Medium",
            color: Colors_1["default"].general.primary
        }}>
              Link your BVN
            </Themed_1.Text>
          </Themed_1.View>
        </react_native_1.TouchableOpacity>
      </Themed_1.View>
    </Themed_1.View>);
};
exports["default"] = LinkBVN;
