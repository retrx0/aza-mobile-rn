import { useEffect, useState } from "react";
import { LayoutAnimation, TouchableOpacity } from "react-native";
import { useSharedValue, withTiming } from "react-native-reanimated";

import { SendIcon } from "../../../../../assets/svg";

import Colors from "../../../../constants/Colors";
import { Text, View } from "../../../../theme/Themed";
import NotificationItem from "./NotificationItem";

import { useAppSelector } from "../../../../redux";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../../theme";

import { RootTabScreenProps } from "../../../../types/types.navigation";

const NotificationsContainer = ({ navigation }: RootTabScreenProps<"Home">) => {
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      date: "3 December 2022",
      title: "Your bill is ready to be paid",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSXdOvMaQfv-H-gIlqAAZ72Y85Z89sKCGl-g&usqp=CAU",
      detail: "Your LSWC bill is due on 01-01-2023",
    },
    {
      date: "3 December 2022",
      title: "Your bill is ready to be paid",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSXdOvMaQfv-H-gIlqAAZ72Y85Z89sKCGl-g&usqp=CAU",
      detail: "Your LSWC bill is due on 01-01-2023",
    },
    {
      date: "3 December 2022",
      title: "Your bill is ready to be paid",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSXdOvMaQfv-H-gIlqAAZ72Y85Z89sKCGl-g&usqp=CAU",
      detail: "Your LSWC bill is due on 01-01-2023",
    },
  ]);

  const theme = useAppSelector(selectAppTheme);
  const appTheme = getAppTheme(theme);

  const offset = useSharedValue(-80);
  const scaleAnimation = useSharedValue(0.85);

  useEffect(() => {
    offset.value = withTiming(isNotificationsOpen ? 20 : -80);
    scaleAnimation.value = withTiming(isNotificationsOpen ? 1 : 0.85);
  }, [isNotificationsOpen]);

  const clearNotifications = () => {
    LayoutAnimation.configureNext({
      duration: 500,
      update: { type: "easeInEaseOut", property: "opacity" },
    });

    setNotificationsOpen(false);
    setNotifications([]);
  };

  return (
    <>
      <View
        style={{
          marginVertical: 15,
          maxHeight: isNotificationsOpen ? "100%" : 100,
        }}
      >
        {notifications.slice(0, 2).map((item, index) => (
          <NotificationItem
            key={index}
            index={index}
            data={item}
            offset={offset}
            scaleAnimation={scaleAnimation}
            setNotificationsOpen={setNotificationsOpen}
            isNotificationsOpen={isNotificationsOpen}
            clearNotifications={clearNotifications}
          />
        ))}
      </View>
      {isNotificationsOpen && (
        <TouchableOpacity
          style={{
            marginTop: 40,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() =>
            navigation.navigate("Common", { screen: "Notifications" })
          }
        >
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Medium",
              marginRight: 5,
            }}
          >
            Other Notifications
          </Text>
          <SendIcon color={Colors[appTheme].secondaryText} />
        </TouchableOpacity>
      )}
    </>
  );
};

export default NotificationsContainer;
