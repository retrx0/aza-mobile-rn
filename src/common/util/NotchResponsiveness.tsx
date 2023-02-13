import React from "react";
import { Platform, View } from "react-native";
import { SafeAreaView } from "../../theme/Themed";
import { useHeaderHeight } from "@react-navigation/elements";

import * as Safety from "react-native-safe-area-context";

const NotchResponsive = () => {
  const headerHeight = useHeaderHeight();
  return (
    <View>
      {Platform.OS === "android" ? (
        headerHeight !== 0 ? (
          <View style={{ paddingTop: headerHeight }} />
        ) : (
          <Safety.SafeAreaView style={{ flex: 0 }} />
        )
      ) : (
        <SafeAreaView style={{ flex: 0 }} />
      )}
    </View>
  );
};

export default NotchResponsive;
