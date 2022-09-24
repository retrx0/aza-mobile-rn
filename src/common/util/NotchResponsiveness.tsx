import React from "react";
import { Platform, View } from "react-native";
import { SafeAreaView } from "../../components/Themed";

import * as Safety from "react-native-safe-area-context";

const NotchResponsive = () => {
  return (
    <View>
      {Platform.OS === "android" ? (
        <Safety.SafeAreaView style={{ flex: 0 }} />
      ) : (
        <SafeAreaView style={{ flex: 0 }} />
      )}
    </View>
  );
};

export default NotchResponsive;
