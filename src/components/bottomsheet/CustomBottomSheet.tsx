import Modal from "react-native-modal";
import { hp } from "../../common/util/LayoutUtil";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import Button from "../buttons/Button";
import { View as View } from "../../theme/Themed";
import BottomSheetListItem from "./BottomSheetListItem";
export default function CustomBottomSheet({
  toggleModal,
  isModalVisible,
  listItems,
}: any) {
  const colorScheme = useColorScheme();

  const renderBottomSheetListItems = () => {
    return listItems.map((item: any, index: any) => (
      <BottomSheetListItem
        key={index}
        itemName={item.itemName}
        itemIcon={item.itemIcon}
        onPress={() => {
          if (
            item.itemName !== "Choose Profile Photo" &&
            item.itemName !== "Take Photo" &&
            item.itemName !== "Select from Gallery"
          ) {
            toggleModal();
          }
          item.onPress();
        }}
      />
    ));
  };

  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={toggleModal}
      style={{ justifyContent: "flex-end", margin: 0 }}
    >
      <View
        lightColor={Colors["light"].backgroundSecondary}
        darkColor={Colors["dark"].backgroundSecondary}
        style={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingHorizontal: 15,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <View
          lightColor={Colors["light"].backgroundSecondary}
          darkColor={Colors["dark"].backgroundSecondary}
        >
          {renderBottomSheetListItems()}
        </View>
        <Button
          title="Cancel"
          style={{
            backgroundColor: Colors.dark.error,
            marginBottom: hp(40),
            marginTop: hp(40),
            width: "100%",
          }}
          onPressButton={toggleModal}
        />
      </View>
    </Modal>
  );
}
