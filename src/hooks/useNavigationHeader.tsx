import { useLayoutEffect } from "react";

import BackButton from "../components/buttons/BackButton";
import { Text } from "../theme/Themed";

import { hp } from "../common/util/LayoutUtil";

const useNavigationHeader = (navigation: any, title: string) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
          }}
        >
          {title}
        </Text>
      ),
      // hide default back button which only shows in android
      headerBackVisible: false,
      //center it in android
      headerTitleAlign: "center",
      headerShadowVisible: false,
      headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
    });
  }, []);
};

export default useNavigationHeader;
