"use strict";
exports.__esModule = true;
var react_native_modal_1 = require("react-native-modal");
var LayoutUtil_1 = require("../../common/util/LayoutUtil");
var Colors_1 = require("../../constants/Colors");
var useColorScheme_1 = require("../../hooks/useColorScheme");
var Button_1 = require("../buttons/Button");
var Themed_1 = require("../Themed");
var BottomSheetListItem_1 = require("./BottomSheetListItem");
function CustomBottomSheet(_a) {
    var toggleModal = _a.toggleModal, isModalVisible = _a.isModalVisible, listItems = _a.listItems;
    var colorScheme = useColorScheme_1["default"]();
    var renderBottomSheetListItems = function () {
        return listItems.map(function (item, index) { return (<BottomSheetListItem_1["default"] key={index} itemName={item.itemName} itemIcon={item.itemIcon} onPress={function () {
                if (item.itemName !== "Choose Profile Photo" &&
                    item.itemName !== "Take Photo" &&
                    item.itemName !== "Select from Gallery") {
                    toggleModal();
                }
                item.onPress();
            }}/>); });
    };
    return (<react_native_modal_1["default"] isVisible={isModalVisible} onBackdropPress={toggleModal} style={{ justifyContent: "flex-end", margin: 0 }}>
      <Themed_1.View style={{
            backgroundColor: Colors_1["default"][colorScheme].backgroundSecondary,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingHorizontal: 15,
            display: "flex",
            justifyContent: "space-between"
        }}>
        <Themed_1.View style={{
            backgroundColor: Colors_1["default"][colorScheme].backgroundSecondary
        }}>
          {renderBottomSheetListItems()}
        </Themed_1.View>
        <Button_1["default"] title="Cancel" style={{
            backgroundColor: Colors_1["default"].dark.error,
            marginBottom: LayoutUtil_1.hp(40),
            marginTop: LayoutUtil_1.hp(40)
        }} onPressButton={toggleModal}/>
      </Themed_1.View>
    </react_native_modal_1["default"]>);
}
exports["default"] = CustomBottomSheet;
