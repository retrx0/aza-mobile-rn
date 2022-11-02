"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var BackButton_1 = require("../../components/buttons/BackButton");
var Themed_1 = require("../../components/Themed");
var Divider_1 = require("../../components/divider/Divider");
var SplitListItem_1 = require("./components/SplitListItem");
var Button_1 = require("../../components/buttons/Button");
var CancelButtonWithUnderline_1 = require("../../components/buttons/CancelButtonWithUnderline");
var Colors_1 = require("../../constants/Colors");
var LayoutUtil_1 = require("../../common/util/LayoutUtil");
var useColorScheme_1 = require("../../hooks/useColorScheme");
var CommonStyles_1 = require("../../common/styles/CommonStyles");
var svg_1 = require("../../../assets/svg");
var SpacerWrapper_1 = require("../../common/util/SpacerWrapper");
var NumberUtils_1 = require("../../common/util/NumberUtils");
var SplitEditContactsScreen = function (_a) {
    var navigation = _a.navigation, route = _a.route;
    var _b = react_1.useState([]), contactsToEdit = _b[0], setContactsToEdit = _b[1];
    var colorScheme = useColorScheme_1["default"]();
    react_1.useLayoutEffect(function () {
        navigation.setOptions({
            headerTitle: function () { return (<Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: 16
                }}>
          Split
        </Themed_1.Text>); },
            // hide default back button which only shows in android
            headerBackVisible: false,
            //center it in android
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerLeft: function () { return <BackButton_1["default"] onPress={function () { return navigation.goBack(); }}/>; }
        });
    }, []);
    react_1.useEffect(function () {
        setContactsToEdit(contacts);
    }, []);
    var removePerson = function (id) {
        setContactsToEdit(contactsToEdit.filter(function (contact) { return contact.id !== id; }));
        if (contactsToEdit.length === 1) {
            navigation.goBack();
        }
    };
    var _c = route.params, amount = _c.amount, date = _c.date, splitImage = _c.splitImage, name = _c.name, contacts = _c.contacts;
    var splitAmountForEachPerson = Number(amount) / (contactsToEdit.length + 1);
    return (<SpacerWrapper_1["default"]>
      <Themed_1.View style={styles.container}>
        <Themed_1.View>
          <Divider_1["default"] />
          <SplitListItem_1["default"] amount={amount} date={date} name={name} splitImage={splitImage}/>
          <Divider_1["default"] />
        </Themed_1.View>
        <Themed_1.View style={[
            CommonStyles_1["default"].row,
            {
                alignSelf: "stretch",
                justifyContent: "space-between",
                marginTop: LayoutUtil_1.hp(25)
            },
        ]}>
          <react_native_1.Image style={{ borderRadius: 50, width: 45, height: 45 }} source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s"
        }}/>
          <Themed_1.View style={[CommonStyles_1["default"].col, { marginLeft: 20, marginRight: "auto" }]}>
            <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
            fontSize: 16,
            fontFamily: "Euclid-Circular-A-Medium"
        }}>
              Chiazo
            </Themed_1.Text>
            <Themed_1.Text style={{ fontSize: 12, marginTop: 5, color: "#FF361A" }}>
              {"\u20A6"} {NumberUtils_1.numberWithCommas(splitAmountForEachPerson.toFixed())}
            </Themed_1.Text>
          </Themed_1.View>
          <Themed_1.View style={[CommonStyles_1["default"].row]}>
            <react_native_1.TouchableOpacity style={{ marginRight: 20 }} onPress={function () {
            return navigation.navigate("SplitEditContact", {
                contactName: "Chiazo",
                contactImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
                contactSplitAmount: splitAmountForEachPerson
                    .toFixed()
                    .toString()
            });
        }}>
              <svg_1.EditIcon color="#A6A6A6" size={20}/>
            </react_native_1.TouchableOpacity>
            <react_native_1.TouchableOpacity onPress={function () { return console.log("deleted request creator"); }}>
              <svg_1.TrashIcon color="#FF361A" size={20}/>
            </react_native_1.TouchableOpacity>
          </Themed_1.View>
        </Themed_1.View>
        <react_native_1.ScrollView showsVerticalScrollIndicator={false}>
          {contactsToEdit.map(function (_a) {
            var name = _a.name, id = _a.id;
            return (<Themed_1.View key={id} style={[
                    CommonStyles_1["default"].row,
                    {
                        alignSelf: "stretch",
                        justifyContent: "space-between",
                        marginTop: LayoutUtil_1.hp(25)
                    },
                ]}>
              <react_native_1.Image style={{ borderRadius: 50, width: 45, height: 45 }} source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s"
                }}/>
              <Themed_1.View style={[
                    CommonStyles_1["default"].col,
                    { marginLeft: 20, marginRight: "auto" },
                ]}>
                <Themed_1.Text lightColor={Colors_1["default"].light.text} darkColor={Colors_1["default"].dark.mainText} style={{
                    fontSize: 16,
                    fontFamily: "Euclid-Circular-A-Medium"
                }}>
                  {name}
                </Themed_1.Text>
                <Themed_1.Text style={{ fontSize: 12, marginTop: 5, color: "#FF361A" }}>
                  {"\u20A6"}{" "}
                  {NumberUtils_1.numberWithCommas(splitAmountForEachPerson.toFixed())}
                </Themed_1.Text>
              </Themed_1.View>
              <Themed_1.View style={[CommonStyles_1["default"].row]}>
                <react_native_1.TouchableOpacity style={{ marginRight: 20 }} onPress={function () {
                    return navigation.navigate("SplitEditContact", {
                        contactName: name,
                        contactImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
                        contactSplitAmount: splitAmountForEachPerson
                            .toFixed()
                            .toString()
                    });
                }}>
                  <svg_1.EditIcon color="#A6A6A6" size={20}/>
                </react_native_1.TouchableOpacity>
                <react_native_1.TouchableOpacity onPress={function () { return removePerson(id); }}>
                  <svg_1.TrashIcon color="#FF361A" size={20}/>
                </react_native_1.TouchableOpacity>
              </Themed_1.View>
            </Themed_1.View>);
        })}
        </react_native_1.ScrollView>
        <Themed_1.View style={[
            CommonStyles_1["default"].col,
            { width: "100%", marginBottom: LayoutUtil_1.hp(35), marginTop: 5 },
        ]}>
          <Button_1["default"] title="Confirm" onPressButton={function () {
            return navigation.navigate("SplitConfirmation", {
                amount: amount,
                splitImage: splitImage,
                name: name,
                contacts: contactsToEdit
            });
        }} styleText={{
            color: Colors_1["default"][colorScheme].buttonText,
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14
        }} style={{
            marginVertical: 10,
            width: "100%",
            backgroundColor: Colors_1["default"][colorScheme].button
        }}/>
          <CancelButtonWithUnderline_1["default"] title="Cancel" onPressButton={function () { return navigation.goBack(); }} style={{ borderBottomColor: Colors_1["default"].general.red }} styleText={CommonStyles_1["default"].cancelStyle}/>
        </Themed_1.View>
      </Themed_1.View>
    </SpacerWrapper_1["default"]>);
};
exports["default"] = SplitEditContactsScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: LayoutUtil_1.hp(20),
        paddingHorizontal: 15
    }
});
