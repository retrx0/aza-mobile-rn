import { useLayoutEffect } from "react";

import BackButton from "../components/buttons/BackButton";
import { Text } from "../theme/Themed";

import { hp } from "../common/util/LayoutUtil";

const useNavigationHeader = (
  navigation: any,
  title: string,
  headerRight?: JSX.Element,
  removeBackButton?: boolean
) => {
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
      headerLeft: () =>
        !removeBackButton ? (
          <BackButton onPress={() => navigation.goBack()} />
        ) : undefined,
      headerRight: () => (headerRight ? headerRight : undefined),
    });
  }, []);
};

export default useNavigationHeader;
