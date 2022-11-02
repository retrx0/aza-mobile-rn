"use strict";
exports.__esModule = true;
exports.VaultTabs = void 0;
var native_stack_1 = require("@react-navigation/native-stack");
var Vault_1 = require("./Vault");
var NewVault_1 = require("./NewVault");
var AddVault_1 = require("./AddVault");
var ConfirmDeleteVault_1 = require("./ConfirmDeleteVault");
var VaultWithdrawSuccessful_1 = require("./withdraw-to-aza/VaultWithdrawSuccessful");
var VaultDetails_1 = require("./withdraw-to-aza/VaultDetails");
var VaultActivity_1 = require("./withdraw-to-aza/VaultActivity");
var react_native_1 = require("react-native");
var material_top_tabs_1 = require("@react-navigation/material-top-tabs");
var Themed_1 = require("../../../components/Themed");
var useColorScheme_1 = require("../../../hooks/useColorScheme");
var CommonStyles_1 = require("../../../common/styles/CommonStyles");
var VaultWithdrawToBank_1 = require("./withdraw-to-bank/VaultWithdrawToBank");
var VaultWithdrawToBankConfirmation_1 = require("./withdraw-to-bank/VaultWithdrawToBankConfirmation");
var VaultwithdrawalConfirmation_1 = require("./withdraw-to-aza/VaultwithdrawalConfirmation");
var VaultToBankSuccessful_1 = require("./withdraw-to-bank/VaultToBankSuccessful");
var MaturedVault_1 = require("./withdraw-to-aza/MaturedVault");
var UnMatureVault_1 = require("./withdraw-to-aza/UnMatureVault");
var LockVault_1 = require("./LockVault");
var ArchievedVault_1 = require("./ArchievedVault");
var VaultStack = native_stack_1.createNativeStackNavigator();
var Tab = material_top_tabs_1.createMaterialTopTabNavigator();
var VaultTabs = function () {
    var scheme = useColorScheme_1["default"]();
    return (<Themed_1.SafeAreaView style={CommonStyles_1["default"].parentContainer}>
      <Tab.Navigator screenOptions={{
            tabBarItemStyle: {
                borderRadius: 100,
                marginTop: react_native_1.Platform.OS == "android" ? 50 : 0
            },
            tabBarIndicatorStyle: {
                borderWidth: 2,
                borderColor: scheme == "light" ? "red" : "black"
            },
            tabBarLabelStyle: {
                textTransform: "capitalize"
            }
        }} initialRouteName="VaultDetails">
        <Tab.Screen name="VaultDetails" component={VaultDetails_1["default"]}/>
        <Tab.Screen name="VaultActivity" component={VaultActivity_1["default"]}/>
      </Tab.Navigator>
    </Themed_1.SafeAreaView>);
};
exports.VaultTabs = VaultTabs;
var VaultNavigator = function () {
    return (<VaultStack.Navigator>
      <VaultStack.Screen options={{
            headerShown: false
        }} name="Vault" component={Vault_1["default"]}/>
      <VaultStack.Screen options={{ headerShown: false }} name="newvault" component={NewVault_1["default"]}/>

      <VaultStack.Screen options={{ headerShown: false }} name="lockVault" component={LockVault_1["default"]}/>

      <VaultStack.Screen options={{ title: "Details & Activity" }} name="VaultDetails" component={exports.VaultTabs}/>

      <VaultStack.Screen options={{ headerShown: false }} name="vaultToBankSuccessfull" component={VaultToBankSuccessful_1["default"]}/>
      <VaultStack.Screen options={{ headerShown: false }} name="addVault" component={AddVault_1["default"]}/>
      <VaultStack.Screen options={{ headerShown: false }} name="confirmDeleteVault" component={ConfirmDeleteVault_1["default"]}/>

      <VaultStack.Screen options={{ headerShown: false }} name="archievedVault" component={ArchievedVault_1["default"]}/>
      <VaultStack.Screen options={{ headerShown: false }} name="vaultToAza" component={VaultwithdrawalConfirmation_1["default"]}/>
      <VaultStack.Screen options={{ headerShown: false }} name="vaultWithdrawsuccessful" component={VaultWithdrawSuccessful_1["default"]}/>
      <VaultStack.Screen options={{ headerShown: false }} name="vaultToBank" component={VaultWithdrawToBank_1["default"]}/>
      <VaultStack.Screen options={{ headerShown: false }} name="vaultWithdrawConfirmation" component={VaultWithdrawToBankConfirmation_1["default"]}/>

      <VaultStack.Screen options={{ headerShown: false }} name="maturedVault" component={MaturedVault_1["default"]}/>
      <VaultStack.Screen options={{ headerShown: false }} name="unMatureVault" component={UnMatureVault_1["default"]}/>
    </VaultStack.Navigator>);
};
exports["default"] = VaultNavigator;
