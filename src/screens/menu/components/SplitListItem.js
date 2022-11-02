"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var Themed_1 = require("../../../components/Themed");
var CommonStyles_1 = require("../../../common/styles/CommonStyles");
var NumberUtils_1 = require("../../../common/util/NumberUtils");
var Colors_1 = require("../../../constants/Colors");
var useColorScheme_1 = require("../../../hooks/useColorScheme");
var svg_1 = require("../../../../assets/svg");
var SplitListItem = function (_a) {
    var splitImage = _a.splitImage, name = _a.name, amount = _a.amount, date = _a.date, showChevron = _a.showChevron, showCreatorAndRecipients = _a.showCreatorAndRecipients;
    var colorScheme = useColorScheme_1["default"]();
    return (<Themed_1.View style={[
            CommonStyles_1["default"].row,
            {
                alignItems: showCreatorAndRecipients ? "flex-start" : "center",
                alignSelf: "stretch",
                paddingVertical: 10
            },
        ]}>
      <react_native_1.Image style={{
            borderRadius: 50,
            width: 45,
            height: 45,
            resizeMode: "cover"
        }} source={{
            uri: splitImage
        }}/>
      <Themed_1.View style={{
            display: "flex",
            marginRight: "auto",
            marginLeft: 20
        }}>
        <Themed_1.Text lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.mainText} style={{
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14
        }}>
          {name}
        </Themed_1.Text>
        <Themed_1.View style={[
            CommonStyles_1["default"].row,
            {
                marginTop: 3,
                alignSelf: "flex-start"
            },
        ]}>
          <Themed_1.Text lightColor={Colors_1["default"].light.secondaryText} darkColor={Colors_1["default"].dark.secondaryText} style={{
            fontSize: 12
        }}>
            Payments
          </Themed_1.Text>
        </Themed_1.View>
        {showCreatorAndRecipients && (<Themed_1.View style={[CommonStyles_1["default"].row, { alignSelf: "stretch", marginTop: 8 }]}>
            <Themed_1.View style={[CommonStyles_1["default"].row]}>
              <react_native_1.Image style={{
                borderRadius: 50,
                width: 20,
                height: 20,
                resizeMode: "cover"
            }} source={{
                uri: "https://images.unsplash.com/photo-1587085580271-cf1389892268?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHNlbGZpZSUyMG1hbiUyMGJsYWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }}/>
              <Themed_1.View style={{ marginHorizontal: 5 }}>
                <svg_1.ArrowRightIcon size={14} color={Colors_1["default"][colorScheme].secondaryText}/>
              </Themed_1.View>
            </Themed_1.View>
            <Themed_1.View style={[CommonStyles_1["default"].row, { position: "relative" }]}>
              <react_native_1.Image style={{
                borderColor: "white",
                borderWidth: 0.5,
                resizeMode: "cover",
                borderRadius: 50,
                width: 20,
                height: 20
            }} source={{
                uri: "https://images.unsplash.com/photo-1612601006505-1254db3e290d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2VsZmllJTIwbWFuJTIwYmxhY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            }}/>
              <react_native_1.Image style={{
                borderColor: "white",
                borderWidth: 0.5,
                borderRadius: 50,
                width: 20,
                resizeMode: "cover",
                height: 20,
                marginLeft: -10
            }} source={{
                uri: "https://images.unsplash.com/photo-1606459249576-f00b2e5e0917?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNlbGZpZSUyMG1hbiUyMGJsYWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }}/>
              <react_native_1.Image style={{
                borderColor: "white",
                borderWidth: 0.5,
                borderRadius: 50,
                width: 20,
                resizeMode: "cover",
                height: 20,
                marginLeft: -10
            }} source={{
                uri: "https://images.unsplash.com/photo-1565884280295-98eb83e41c65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2VsZmllJTIwbWFuJTIwYmxhY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            }}/>
              <Themed_1.Text style={{
                color: Colors_1["default"][colorScheme].secondaryText,
                marginLeft: 5,
                fontSize: 10
            }}>
                +2 more
              </Themed_1.Text>
            </Themed_1.View>
          </Themed_1.View>)}
      </Themed_1.View>

      <Themed_1.View style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
        }}>
        <Themed_1.View style={{
            display: "flex",
            alignItems: "flex-end",
            marginRight: 10
        }}>
          <Themed_1.Text style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: 14,
            color: Colors_1["default"].light.error
        }}>
            {"\u20A6"} {NumberUtils_1.numberWithCommas(amount)}
          </Themed_1.Text>
          <Themed_1.Text lightColor={Colors_1["default"].light.mainText} darkColor={Colors_1["default"].dark.secondaryText} style={{
            fontSize: 10,
            marginTop: 3,
            fontFamily: "Euclid-Circular-A-Light"
        }}>
            {date}
          </Themed_1.Text>
        </Themed_1.View>
        {showChevron && <svg_1.ChevronRightIcon color={"#2A9E17"} size={20}/>}
      </Themed_1.View>
    </Themed_1.View>);
};
exports["default"] = SplitListItem;
