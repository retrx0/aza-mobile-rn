"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var styles_1 = require("./styles");
var Themed_1 = require("../../../components/Themed");
var header_1 = require("../../../components/text/header");
var HeadrImage_1 = require("./sub-components/HeadrImage");
var Divider_1 = require("./sub-components/Divider");
var ListItem_1 = require("./sub-components/ListItem");
var svg_1 = require("../../../../assets/svg");
var images_1 = require("../../../../assets/images");
var useColorScheme_1 = require("../../../hooks/useColorScheme");
function Payments(_a) {
    var navigation = _a.navigation;
    var scheme = useColorScheme_1["default"]();
    return (<Themed_1.SafeAreaView style={styles_1.PaymentStyles.container}>
      <Themed_1.View style={styles_1.PaymentStyles.header}>
        <Themed_1.Text style={styles_1.PaymentStyles.headerText}>Payments</Themed_1.Text>
        <react_native_1.TouchableOpacity onPress={function () {
            navigation.navigate("Common", { screen: "Pie" });
        }} style={styles_1.PaymentStyles.icon}>
          <svg_1.PieIcon style={styles_1.PaymentStyles.imageIcon}/>
        </react_native_1.TouchableOpacity>
      </Themed_1.View>
      <header_1.Header description="" headerStyle={null} descriptionStyle={null} style={styles_1.PaymentStyles.subHead} heading="Recent Payments"/>
      <react_native_1.ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles_1.PaymentStyles.imageHeaderContainer}>
        <HeadrImage_1["default"] selected index={0} header="Paid" title="MTN" amount="200" image={images_1.Mtn}/>
      </react_native_1.ScrollView>

      <react_native_1.ScrollView style={styles_1.PaymentStyles.itemListContainer}>
        <Divider_1["default"] />

        <ListItem_1["default"] index={0} onPress={function () {
            navigation.navigate("Common", { screen: "AirtimeData" });
        }} Icon={function () { return (<svg_1.DataIcon color={scheme == "dark" ? "white" : "#753FF6"}/>); }} title="Airtime & Data" route=""/>

        <ListItem_1["default"] index={1} onPress={function () {
            navigation.navigate("Common", { screen: "InternetPlans" });
        }} Icon={function () { return (<svg_1.WifiIcon color={scheme == "dark" ? "white" : "#2A9E17"}/>); }} title="Internet" route=""/>

        <ListItem_1["default"] index={2} onPress={function () {
            navigation.navigate("Common", { screen: "CableTV" });
        }} Icon={function () { return (<svg_1.CableTvIcon color={scheme == "dark" ? "white" : "#FFD200"}/>); }} title="Cable TV" route=""/>

        <ListItem_1["default"] index={3} onPress={function () {
            navigation.navigate("Common", { screen: "Electricity" });
        }} Icon={function () { return (<svg_1.ElectricIcon color={scheme == "dark" ? "white" : "#ED8A0A"}/>); }} title="Electricity" route=""/>

        <ListItem_1["default"] index={4} onPress={function () {
            navigation.navigate("Common", { screen: "Water" });
        }} Icon={function () { return (<svg_1.DropIcon color={scheme == "dark" ? "white" : "#1198F6"}/>); }} title="Water" route=""/>

        <ListItem_1["default"] index={5} onPress={function () { }} Icon={function () { return (<svg_1.GiftIcon color={scheme == "dark" ? "white" : "#BED600"}/>); }} title="Gift Cards" route=""/>

        <ListItem_1["default"] index={6} onPress={function () {
            navigation.navigate("Common", { screen: "Charity" });
        }} Icon={function () { return (<svg_1.LoveIcon color={scheme == "dark" ? "white" : "#FF361A"}/>); }} title="Charity" route=""/>
      </react_native_1.ScrollView>
    </Themed_1.SafeAreaView>);
}
exports["default"] = Payments;
