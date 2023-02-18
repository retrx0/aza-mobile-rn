import { useWindowDimensions } from "react-native";
import React, { useState } from "react";
import { TabView, TabBar } from "react-native-tab-view";

import { CommonScreenProps } from "../../../../common/navigation/types";

import BlockByAzaNumberTab from "../components/BlockByAzaNumberTab";
import BlockByMobileNumberTab from "../components/BlockByMobileNumberTab";
import BlockUserModal from "../components/BlockUserModal";
import { Text as Text } from "../../../../theme/Themed";

import Colors from "../../../../constants/Colors";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { hp } from "../../../../common/util/LayoutUtil";

import { useAppSelector } from "../../../../redux";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../../theme";

import useNavigationHeader from "../../../../hooks/useNavigationHeader";
import { IBeneficiary } from "../../../../redux/types";

const BlockNewUserScreen = ({
  navigation,
  route,
}: CommonScreenProps<"BlockNewUser">) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [userToBlock, setUserToBlock] = useState<IBeneficiary>({
    fullName: "",
    azaAccountNumber: "",
  });
  const [routes] = useState([
    { key: "first", title: "Mobile Number" },
    { key: "second", title: "Aza Number" },
  ]);
  const layout = useWindowDimensions();
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));
  const handleBlockUser = (contact: IBeneficiary) => {
    setUserToBlock(contact);
    setModalVisible(!isModalVisible);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useNavigationHeader(navigation, "Block New User");

  const renderScene = ({ route }: any) => {
    switch (route.key) {
      case "first":
        return (
          <BlockByMobileNumberTab
            blockUserOnPress={(contact) => handleBlockUser(contact)}
          />
        );
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
              borderBottomColor: Colors[appTheme].secondaryText,
              borderBottomWidth: 2,
            }}
            indicatorStyle={{
              backgroundColor: Colors[appTheme].text,
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
                    fontSize: hp(16),
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
        userToBlock={userToBlock!}
        toggleModal={toggleModal}
        isModalVisible={isModalVisible}
      />
    </SpacerWrapper>
  );
};

export default BlockNewUserScreen;
