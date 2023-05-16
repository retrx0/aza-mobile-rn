import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, View } from "../../theme/Themed";
import Colors from "../../constants/Colors";
import { hp } from "../../common/util/LayoutUtil";
import { ActivityIndicator } from "react-native";

const SecondaryButton = ({
  title,
  Icon,
  onPress,
  disabled,
  isLoading,
}: {
  Icon: () => JSX.Element;
  onPress: () => void;
  title: string;
  disabled?: boolean;
  isLoading?: boolean;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
      style={{
        borderWidth: 1,
        borderColor: Colors["general"].grey,
        width: "90%",
        height: hp(50),
        borderRadius: hp(10),
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <View style={{ marginRight: 10 }}>
        <Icon />
      </View>

      <Text
        style={{
          fontFamily: "Euclid-Circular-A-Medium",
          fontSize: hp(14),
          fontWeight: "500",
        }}
      >
        {isLoading ? <ActivityIndicator animating={isLoading} /> : title}
      </Text>
    </TouchableOpacity>
  );
};

export default SecondaryButton;
