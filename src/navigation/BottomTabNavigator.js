"use strict";
exports.__esModule = true;
var vector_icons_1 = require("@expo/vector-icons");
var bottom_tabs_1 = require("@react-navigation/bottom-tabs");
var react_1 = require("react");
var react_native_1 = require("react-native");
var Colors_1 = require("../constants/Colors");
var Home_1 = require("../screens/tabs/home/Home");
var Payments_1 = require("../screens/tabs/payments/Payments");
var Profile_1 = require("../screens/tabs/profile/Profile");
var Vault_1 = require("../screens/tabs/vault/Vault");
var Settings_1 = require("../screens/tabs/settings/Settings");
var useColorScheme_1 = require("../hooks/useColorScheme");
var svg_1 = require("../../assets/svg");
var CustomBottomSheet_1 = require("../components/bottomsheet/CustomBottomSheet");
var useBottomSheetType_1 = require("../screens/tabs/home/hooks/useBottomSheetType");
var BottomTab = bottom_tabs_1.createBottomTabNavigator();
var BottomTabNavigator = function (_navigation) {
    var _a = react_1["default"].useState(false), isProfileModalVisible = _a[0], setProfileModalVisible = _a[1];
    var _b = react_1["default"].useState(false), isMenuModalVisible = _b[0], setMenuModalVisible = _b[1];
    var colorScheme = useColorScheme_1["default"]();
    var toggleProfileModal = function () {
        setProfileModalVisible(!isProfileModalVisible);
    };
    var toggleMenuModal = function () {
        setMenuModalVisible(!isMenuModalVisible);
    };
    var menuBottomSheetListItems = useBottomSheetType_1.useBottomSheetType("menu", _navigation);
    var _c = useBottomSheetType_1.useBottomSheetType("profile", _navigation), profileBottomSheetListItems = _c.profileBottomSheetListItems, setChoosePhoto = _c.setChoosePhoto;
    return (<>
      <BottomTab.Navigator initialRouteName="Home" screenOptions={{
            tabBarActiveTintColor: Colors_1["default"][colorScheme].tint
        }}>
        <BottomTab.Screen name="Home" component={Home_1["default"]} options={function (_a) {
            var navigation = _a.navigation;
            return ({
                //center it in android
                headerTitleAlign: "center",
                headerTitle: function () { return (<svg_1.AZALightningLogo size={25} color={colorScheme === "dark"
                        ? Colors_1["default"].dark.mainText
                        : Colors_1["default"].light.text}/>); },
                title: "Home",
                tabBarIcon: function (_a) {
                    var color = _a.color;
                    return <svg_1.HomeIcon color={color} size={24}/>;
                },
                headerRight: function () { return (<react_native_1.Pressable onPress={function () { return navigation.navigate("QRTransactions"); }} style={function (_a) {
                        var pressed = _a.pressed;
                        return ({
                            opacity: pressed ? 0.5 : 1
                        });
                    }}>
                {colorScheme === "dark" ? (<svg_1.QRCodeDarkModeIcon style={{ marginRight: 15 }}/>) : (<svg_1.QRCodeIcon size={24} color={Colors_1["default"].light.text} style={{ marginRight: 15 }}/>)}
              </react_native_1.Pressable>); },
                headerLeft: function () { return (<react_native_1.Pressable onPress={toggleMenuModal} style={function (_a) {
                        var pressed = _a.pressed;
                        return ({
                            opacity: pressed ? 0.5 : 1,
                            marginLeft: 15
                        });
                    }}>
                <svg_1.MenuIcon size={25} color={Colors_1["default"][colorScheme].text}/>
              </react_native_1.Pressable>); },
                headerShadowVisible: false
            });
        }}/>
        <BottomTab.Screen name="Vault" component={Vault_1["default"]} options={{
            title: "Vault",
            headerShown: false,
            tabBarIcon: function (_a) {
                var color = _a.color;
                return <svg_1.VaultIcon color={color} size={24}/>;
            }
        }}/>
        <BottomTab.Screen name="Payments" component={Payments_1["default"]} options={{
            title: "Payments",
            headerShown: false,
            tabBarIcon: function (_a) {
                var color = _a.color;
                return <svg_1.PaymentsIcon color={color} size={24}/>;
            }
        }}/>
        <BottomTab.Screen name="Settings" component={Settings_1["default"]} options={{
            title: "Settings",
            tabBarIcon: function (_a) {
                var color = _a.color;
                return <svg_1.SettingsIcon color={color} size={24}/>;
            },
            headerShadowVisible: false
        }}/>
        <BottomTab.Screen name="Profile" listeners={{
            tabPress: function (e) {
                e.preventDefault();
                setChoosePhoto(false);
                toggleProfileModal();
            }
        }} component={Profile_1["default"]} options={{
            title: "Profile",
            tabBarIcon: function (_a) {
                var color = _a.color;
                return <svg_1.ProfileIcon color={color} size={24}/>;
            }
        }}/>
      </BottomTab.Navigator>
      {isProfileModalVisible ? (<CustomBottomSheet_1["default"] isModalVisible={isProfileModalVisible} toggleModal={toggleProfileModal} listItems={profileBottomSheetListItems}/>) : (<CustomBottomSheet_1["default"] isModalVisible={isMenuModalVisible} toggleModal={toggleMenuModal} listItems={menuBottomSheetListItems}/>)}
    </>);
};
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
var TabBarIcon = function (props) {
    return <vector_icons_1.FontAwesome size={30} style={{ marginBottom: -3 }} {...props}/>;
};
exports["default"] = BottomTabNavigator;
