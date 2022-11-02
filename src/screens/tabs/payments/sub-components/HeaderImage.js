"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_reanimated_1 = require("react-native-reanimated");
var Themed_1 = require("../../../../components/Themed");
var svg_1 = require("../../../../../assets/svg");
function HeaderImage(_a) {
    var image = _a.image, header = _a.header, title = _a.title, amount = _a.amount, index = _a.index, _b = _a.selected, selected = _b === void 0 ? false : _b, onSelect = _a.onSelect;
    var TouchableAnimated = react_native_reanimated_1["default"].createAnimatedComponent(react_native_1.TouchableOpacity);
    return (<TouchableAnimated onPress={onSelect} entering={react_native_reanimated_1.ZoomIn.delay(200 * (index + 1))} style={[
            styles.mainConatiner,
            {
                height: amount ? 120 : 70
            },
        ]}>
      <Themed_1.View style={[
            styles.imageContainer,
            {
                borderWidth: amount ? 1 : 0,
                borderColor: amount ? "#A6A6A6" : ""
            },
        ]}>
        <react_native_1.Image style={[
            styles.image,
            {
                width: amount ? 36 : 44,
                height: amount ? 36 : 44
            },
        ]} source={image}/>
        {amount || selected == true ? (<Themed_1.View style={styles.icon}>
            <svg_1.TickIcon />
          </Themed_1.View>) : null}
      </Themed_1.View>
      {header && <Themed_1.Text style={styles.text}>{header}</Themed_1.Text>}

      <Themed_1.Text style={styles.text2}>{title}</Themed_1.Text>
      {amount && <Themed_1.Text style={styles.text3}>₦{amount}</Themed_1.Text>}
    </TouchableAnimated>);
}
exports["default"] = HeaderImage;
var styles = react_native_1.StyleSheet.create({
    mainConatiner: {
        width: 44,
        backgroundColor: "transparent",
        alignItems: "center",
        marginRight: 33.5
    },
    imageContainer: {
        width: 44,
        height: 44,
        backgroundColor: "transparent",
        borderRadius: 22,
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    },
    image: {
        borderRadius: 25
    },
    icon: {
        width: 13.3,
        height: 13.3,
        position: "absolute",
        bottom: 0,
        right: 0,
        transform: [{ translateY: 2 }],
        borderRadius: 20
    },
    text: {
        fontWeight: "400",
        fontSize: 12,
        color: "#2A9E17"
    },
    text2: {
        fontWeight: "400",
        fontSize: 12
    },
    text3: {
        fontWeight: "400",
        fontSize: 12,
        color: "#A6A6A6"
    }
});
