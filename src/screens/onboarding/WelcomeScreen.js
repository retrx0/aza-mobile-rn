"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_app_intro_slider_1 = require("react-native-app-intro-slider");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var svg_1 = require("../../../assets/svg");
var CommonStyles_1 = require("../../common/styles/CommonStyles");
var LayoutUtil_1 = require("../../common/util/LayoutUtil");
var ButtonMd_1 = require("../../components/buttons/ButtonMd");
var WelcomeScrollIndicator_1 = require("../../components/indicators/WelcomeScrollIndicator");
var Colors_1 = require("../../constants/Colors");
var CarouselWrapper_1 = require("./CarouselWrapper");
var OnboardingUtil_1 = require("./OnboardingUtil");
var WelcomeScreen = function (_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState([
        { id: 1, active: true },
        { id: 2, active: false },
        { id: 3, active: false },
        { id: 4, active: false },
        { id: 5, active: false },
    ]), carouselIndicatorState = _b[0], setCarouselIndicatorState = _b[1];
    return (<react_native_safe_area_context_1.SafeAreaView style={{ flex: 1, backgroundColor: Colors_1["default"].general.white }}>
      <react_native_1.View style={[CommonStyles_1["default"].row]}>
        {carouselIndicatorState.map(function (_a) {
            var active = _a.active, id = _a.id;
            return (<WelcomeScrollIndicator_1["default"] key={id} count={5} active={active}/>);
        })}
      </react_native_1.View>
      <react_native_1.View style={{ height: "4%", marginTop: 50, alignItems: "center" }}>
        <svg_1.AZALogo color={"black"} size={16}/>
      </react_native_1.View>

      <react_native_app_intro_slider_1["default"] style={[{ height: "70%" }]} data={OnboardingUtil_1.carousel_data} onSlideChange={function (index) {
            var tmpArray = __spreadArray([], carouselIndicatorState);
            if (!tmpArray[index].active)
                tmpArray[index].active = true;
            setCarouselIndicatorState(__spreadArray([], tmpArray));
        }} renderPagination={function () { return <></>; }} renderItem={function (carousel) {
            return <CarouselWrapper_1["default"] carousel={carousel.item}/>;
        }}/>
      <react_native_1.View style={[CommonStyles_1["default"].row]}>
        <react_native_1.View style={[
            {
                marginLeft: 10,
                marginRight: 7.5,
                marginTop: 0,
                marginBottom: LayoutUtil_1.hp(100)
            },
            CommonStyles_1["default"].col,
        ]}>
          <ButtonMd_1["default"] title="Login" color={Colors_1["default"].general.white} alt={true} onPress={function () {
            navigation.navigate("SignIn");
        }}/>
        </react_native_1.View>
        <react_native_1.View style={[
            {
                marginLeft: 7.5,
                marginRight: 10,
                marginTop: 0,
                marginBottom: LayoutUtil_1.hp(100)
            },
            CommonStyles_1["default"].col,
        ]}>
          <ButtonMd_1["default"] title="Sign Up" color={Colors_1["default"].general.black} alt={false} onPress={function () {
            navigation.navigate("SignUp");
        }}/>
        </react_native_1.View>
      </react_native_1.View>
    </react_native_safe_area_context_1.SafeAreaView>);
};
exports["default"] = WelcomeScreen;
