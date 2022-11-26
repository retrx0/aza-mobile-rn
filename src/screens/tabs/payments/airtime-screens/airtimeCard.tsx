import React from "react";
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { TickIcon } from "../../../../../assets/svg";
import { hp } from "../../../../common/util/LayoutUtil";

type AirtimeProps = {
  title: string;
  icon: any;
  onPress?: () => void;
  isActive: any;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
};

export const AirtimeCard = ({
  title,
  isActive,
  icon,
  onPress,
}: AirtimeProps) => {
  return (
    <>
      <View>
        <TouchableOpacity style={[styles.card]} onPress={onPress}>
          <Image resizeMode="cover" style={styles.image} source={icon} />
          {isActive ? (
            <View style={styles.icon}>
              <TickIcon />
            </View>
          ) : null}
          <Text style={[styles.title]}>{title}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    transform: [{ translateY: 2 }],
    borderRadius: 20,
  },
  card: {
    paddingHorizontal: 20,
  },
  image: {
    width: hp(45),
    height: hp(45),
    borderRadius: hp(25),
  },

  // card: {
  //   flexDirection: "row",
  //   borderRadius: 20,
  //   alignItems: "center",
  //   backgroundColor: "white",
  //   height: 40,
  //   width: 200,
  //   justifyContent: "center",
  // },
  title: {
    fontSize: hp(14),
    marginTop: hp(4),
    textAlign: "center",
    fontWeight: "500",
    fontFamily: "Euclid-Circular-A-Medium",
  },
});
