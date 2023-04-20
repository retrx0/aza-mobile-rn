import { StyleSheet, TouchableOpacity } from "react-native";

import { CommonScreenProps } from "../../common/navigation/types";

import { View, Text } from "../../theme/Themed";
import Divider from "../../components/divider/Divider";

import Colors from "../../constants/Colors";
import { hp } from "../../common/util/LayoutUtil";
import CommonStyles from "../../common/styles/CommonStyles";
import SpacerWrapper from "../../common/util/SpacerWrapper";

import {
  ChevronRightIcon,
  ReceivedIcon,
  SendIcon,
  SplitIcon,
} from "../../../assets/svg";
import { getAppTheme } from "../../theme";
import { useAppSelector } from "../../redux";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import useNavigationHeader from "../../hooks/useNavigationHeader";

const SplitScreen = ({ navigation }: CommonScreenProps<"Split">) => {
  const colorScheme = getAppTheme(useAppSelector(selectAppTheme));

  useNavigationHeader(
    navigation,
    "Split",
    <TouchableOpacity onPress={() => navigation.navigate("SplitFeature")}>
      {/* TODO Add these colors to Colors.ts and import them */}
      <InfoIcon
        color={
          appTheme === "dark" ? Colors.dark.secondaryText : Colors.general.black
        }
        style={{ width: 20, height: 20 }}
      />
    </TouchableOpacity>
  );

  const navigationListItems = [
    {
      name: "Split",
      handleNavigation: () => navigation.navigate("ChooseSplit"),
      icon: <SplitIcon size={18} color={Colors[colorScheme].mainText} />,
    },
    {
      name: "Incoming Requests",
      handleNavigation: () => navigation.navigate("IncomingSplitRequests"),
      icon: <ReceivedIcon size={18} color={Colors[colorScheme].mainText} />,
    },
    {
      name: "Outgoing Requests",
      handleNavigation: () => navigation.navigate("OutgoingSplitRequests"),
      icon: <SendIcon size={18} color={Colors[colorScheme].mainText} />,
    },
  ];

  return (
    <SpacerWrapper>
      <View style={styles.container}>
        <Divider />
        {navigationListItems.map(({ name, icon, handleNavigation }, i) => (
          <View key={i}>
            <TouchableOpacity
              onPress={handleNavigation}
              style={[CommonStyles.col, { alignSelf: "stretch" }]}
            >
              <View
                style={[
                  CommonStyles.row,
                  {
                    alignSelf: "stretch",
                    justifyContent: "space-between",
                    marginVertical: hp(20),
                    marginLeft: hp(3),
                  },
                ]}
              >
                <View>{icon}</View>
                <View
                  style={[
                    CommonStyles.col,
                    { marginRight: "auto", marginLeft: 20 },
                  ]}
                >
                  <Text
                    style={{
                      fontFamily: "Euclid-Circular-A-Medium",
                      fontSize: hp(16),
                      fontWeight: "600",
                    }}
                  >
                    {name}
                  </Text>
                </View>
                <ChevronRightIcon color={Colors.general.green} size={20} />
              </View>
            </TouchableOpacity>
            <Divider />
          </View>
        ))}
      </View>
    </SpacerWrapper>
  );
};

export default SplitScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
});
