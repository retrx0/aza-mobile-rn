"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Themed_1 = require("../../../components/Themed");
var CommonStyles_1 = require("../../../common/styles/CommonStyles");
var Colors_1 = require("../../../constants/Colors");
var svg_1 = require("../../../../assets/svg");
var SelectedContactsScroll = function (_a) {
    var deSelectContact = _a.deSelectContact, selectedContacts = _a.selectedContacts;
    return (<>
      {selectedContacts === null || selectedContacts === void 0 ? void 0 : selectedContacts.map(function (_a) {
            var firstName = _a.firstName, id = _a.id;
            return (<Themed_1.View key={id} style={[CommonStyles_1["default"].row, { alignItems: "center" }]}>
          <Themed_1.View style={[
                    CommonStyles_1["default"].col,
                    {
                        alignItems: "center",
                        marginLeft: 20
                    },
                ]}>
            <Themed_1.View style={{
                    position: "relative"
                }}>
              <react_native_1.Image style={{ borderRadius: 50, width: 45, height: 45 }} source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s"
                }}/>
              <react_native_1.TouchableOpacity onPress={function () { return deSelectContact(id); }} style={{
                    position: "absolute",
                    right: 0,
                    backgroundColor: "transparent"
                }}>
                <svg_1.CloseCircleIcon size={16} color="#FF361A"/>
              </react_native_1.TouchableOpacity>
            </Themed_1.View>

            <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{ fontSize: 10, marginTop: 5 }}>
              {firstName}
            </Themed_1.Text>
          </Themed_1.View>
        </Themed_1.View>);
        })}
    </>);
};
exports["default"] = SelectedContactsScroll;
