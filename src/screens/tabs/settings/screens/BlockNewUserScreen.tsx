import { useWindowDimensions } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { CommonScreenProps } from "../../../../common/navigation/types";
import BackButton from "../../../../components/buttons/BackButton";
import { Text } from "../../../../theme/components/Text";
import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { TabView, TabBar } from "react-native-tab-view";
import BlockByAzaNumberTab from "../components/BlockByAzaNumberTab";
import BlockByMobileNumberTab from "../components/BlockByMobileNumberTab";
import BlockUserModal from "../components/BlockUserModal";
import { hp } from "../../../../common/util/LayoutUtil";

const BlockNewUserScreen = ({
  navigation,
  route,
}: CommonScreenProps<"BlockNewUser">) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Mobile Number" },
    { key: "second", title: "Aza Number" },
  ]);
  const colorScheme = useColorScheme();
  const layout = useWindowDimensions();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "500",
          }}
        >
          Block New User
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

  const renderScene = ({ route }: any) => {
    switch (route.key) {
      case "first":
        return <BlockByMobileNumberTab toggleModal={toggleModal} />;
      case "second":
        return <BlockByAzaNumberTab toggleModal={toggleModal} />;
    }
  };

  return (
    <SpacerWrapper>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        sceneContainerStyle={{ overflow: "visible" }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            style={{
              elevation: 0,
              backgroundColor: "transparent",
              borderBottomColor: Colors[colorScheme].secondaryText,
              borderBottomWidth: 2,
            }}
            indicatorStyle={{
              backgroundColor: Colors[colorScheme].text,
              marginBottom: -2,
            }}
            renderLabel={({ focused, route }) => {
              return (
                <Text
                  lightColor={
                    focused ? Colors.light.text : Colors.light.secondaryText
                  }
                  darkColor={
                    focused ? Colors.dark.mainText : Colors.dark.secondaryText
                  }
                  style={{
                    fontFamily: "Euclid-Circular-A-Medium",
                    fontSize: 16,
                  }}
                >
                  {route.title}
                </Text>
              );
            }}
          />
        )}
      />

      <BlockUserModal
        navigation={navigation}
        route={route}
        user="Chiazo"
        toggleModal={toggleModal}
        isModalVisible={isModalVisible}
      />
    </SpacerWrapper>
  );
};

export default BlockNewUserScreen;
