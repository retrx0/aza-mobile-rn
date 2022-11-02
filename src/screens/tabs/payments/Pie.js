"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var Themed_1 = require("../../../components/Themed");
var CommonStyles_1 = require("../../../common/styles/CommonStyles");
var react_native_gifted_charts_1 = require("react-native-gifted-charts");
var RegularText_1 = require("../../../components/text/RegularText");
var svg_1 = require("../../../../assets/svg");
var useColorScheme_1 = require("../../../hooks/useColorScheme");
var data = [
    { value: 54, color: "#753FF6", text: "Cable Tv" },
    { value: 40, color: "#2A9E17", text: "Internet" },
    { value: 20, color: "#ED8A0A", text: "Charity" },
];
function Pie() {
    var scheme = useColorScheme_1["default"]();
    return (<Themed_1.SafeAreaView style={[CommonStyles_1["default"].parentContainer]}>
      <Themed_1.View style={styles.container}>
        <Themed_1.View style={styles.month}>
          <react_native_1.TouchableOpacity>
            <svg_1.ArrowLeftIcon color={scheme == "light" ? "#292D32" : "white"} size={0}/>
          </react_native_1.TouchableOpacity>

          <Themed_1.Text style={styles.monthText}>Jun 2022</Themed_1.Text>
          <react_native_1.TouchableOpacity>
            <svg_1.ArrowRightIcon color={scheme == "light" ? "#292D32" : "white"} size={16}/>
          </react_native_1.TouchableOpacity>
        </Themed_1.View>
        <react_native_gifted_charts_1.PieChart textBackgroundRadius={26} textColor="#ffffff" donut={true} data={data} focusOnPress showValuesAsLabels centerLabelComponent={function () { return (<Themed_1.View style={styles.centerLabel}>
              <Themed_1.Text style={{ color: "black" }}>Total</Themed_1.Text>
              <RegularText_1["default"] text="N38,000"/>
            </Themed_1.View>); }}/>
        <Themed_1.View style={styles.labels}>
          {data.map(function (item, ind) { return (<Themed_1.View key={ind.toString()} style={styles.individualLabel}>
              <Themed_1.View style={[styles.colors, { backgroundColor: item.color }]}></Themed_1.View>
              <Themed_1.Text>{item.text}</Themed_1.Text>
            </Themed_1.View>); })}
        </Themed_1.View>
      </Themed_1.View>
    </Themed_1.SafeAreaView>);
}
exports["default"] = Pie;
var styles = react_native_1.StyleSheet.create({
    centerLabel: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent"
    },
    container: {
        marginTop: 70,
        flex: 1,
        alignItems: "center"
    },
    labels: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "80%",
        marginTop: 60
    },
    individualLabel: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    colors: {
        height: 15,
        width: 15,
        borderRadius: 5,
        marginRight: 3
    },
    month: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "50%",
        marginBottom: 30
    },
    monthText: {
        fontWeight: "bold"
    }
});
