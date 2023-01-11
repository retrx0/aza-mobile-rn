import React from "react";
import {
  Image,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { number } from "yup/lib/locale";
import { TickIcon } from "../../../../../assets/svg";
import { hp } from "../../../../common/util/LayoutUtil";
import { Text as Text, View as View } from "../../../../theme/Themed";

type AirtimeProps = {
  title: string;
  icon: any;
  onPress?: () => void;
  isActive: any;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
};

export const Card = ({ title, isActive, icon, onPress }: AirtimeProps) => {
  return (
    <>
      <View>
        <TouchableOpacity style={[styles.card]} onPress={onPress}>
          {typeof icon === "string" ? (
            <Image
              resizeMode="cover"
              style={styles.image}
              source={{ uri: icon }}
            />
          ) : (
            <Image resizeMode="cover" style={styles.image} source={icon} />
          )}
          {isActive ? (
            <View style={styles.icon}>
              <TickIcon />
            </View>
          ) : null}
        </TouchableOpacity>
        <Text style={[styles.title, isActive && styles.title2]}>{title}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    top: 30,
    right: 0,
    transform: [{ translateY: 2 }],
    borderRadius: 20,
  },
  card: {
    paddingHorizontal: hp(20),
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
    fontFamily: "Euclid-Circular-A",
    marginLeft: 5,
  },
  title2: {
    fontSize: hp(14),
    marginTop: hp(4),
    textAlign: "center",
    fontWeight: "600",
    fontFamily: "Euclid-Circular-A-Semi-Bold",
  },
});
