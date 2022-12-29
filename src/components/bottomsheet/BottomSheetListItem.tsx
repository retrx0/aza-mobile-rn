import { TouchableOpacity } from "react-native";

import { Text2 as Text, View2 as View } from "../../theme/Themed";
import Colors from "../../constants/Colors";
import CommonStyles from "../../common/styles/CommonStyles";
import { hp } from "../../common/util/LayoutUtil";

export default function BottomSheetListItem({
  itemName,
  itemIcon,
  onPress,
}: any) {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View
          lightColor={Colors["light"].backgroundSecondary}
          darkColor={Colors["dark"].backgroundSecondary}
          style={[
            CommonStyles.row,
            { alignSelf: "flex-start", paddingVertical: 25 },
          ]}
        >
          {itemIcon}
          <Text
            style={{
              marginLeft: 10,
              fontFamily: "Euclid-Circular-A-Semi-Bold",
              fontSize: hp(16),
              fontWeight: "600",
            }}
          >
            {itemName}
          </Text>
        </View>
      </TouchableOpacity>
      {/* divider */}
      <View
        lightColor={Colors["light"].separator}
        darkColor={Colors["dark"].separator}
        style={{
          width: "100%",
          height: 1,
        }}
      />
    </>
  );
}
