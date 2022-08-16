import { TouchableOpacity, View } from "react-native";

import { Text } from "../Themed";
import Colors from "../../constants/Colors";
import CommonStyles from "../../common/styles/CommonStyles";
import useColorScheme from "../../hooks/useColorScheme";

export default function BottomSheetListItem({
  itemName,
  itemIcon,
  onPress,
}: any) {
  const colorScheme = useColorScheme();

  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            CommonStyles.row,
            { alignSelf: "flex-start", paddingVertical: 25 },
          ]}
        >
          {itemIcon}
          <Text
            style={{ marginLeft: 10, fontFamily: "Euclid-Circular-A-Medium" }}
          >
            {itemName}
          </Text>
        </View>
      </TouchableOpacity>
      {/* divider */}
      <View
        style={{
          backgroundColor: Colors[colorScheme].separator,
          width: "100%",
          height: 1,
        }}
      />
    </>
  );
}
