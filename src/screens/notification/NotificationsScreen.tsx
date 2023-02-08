import { View, Text } from "react-native";

import { CommonScreenProps } from "../../common/navigation/types";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import useNavigationHeader from "../../hooks/useNavigationHeader";

const NotificationsScreen = ({
  navigation,
}: CommonScreenProps<"Notifications">) => {
  useNavigationHeader(navigation, "Notifications");

  return (
    <SpacerWrapper>
      <View>
        <Text>NotificationsScreen</Text>
      </View>
    </SpacerWrapper>
  );
};

export default NotificationsScreen;
