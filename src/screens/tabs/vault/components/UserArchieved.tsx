import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  I18nManager,
  Image,
} from "react-native";
import { SafeAreaView, Text, View } from "../../../../components/Themed";

import Swipeable from "react-native-gesture-handler/Swipeable";
import { ArchieveIcon, CloseIcon, TrashIcon } from "../../../../../assets/svg";
import { VaultListProps } from "../../../../../types";
import { hp, wp } from "../../../../common/util/LayoutUtil";
import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";

const ArchieveList = [
  {
    id: "1",
    lockIcon: (
      <Image
        style={{
          width: 36,
          height: 36,
        }}
        source={require("../../../../../assets/images/icons/CoverImage.png")}
      />
    ),
    item: "Flight Ticket",
    amount: "2000",
    closeIcon: <CloseIcon />,
    altamount: "/\u20A6280,000",
  },
];
const swipeFromRightOpen = () => {
  /* TODO document why this arrow function is empty */
};
const ListItem = ({
  lockIcon,
  item,
  amount,
  closeIcon,
  stage,
  altamount,
  onPress,
}: VaultListProps) => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();

  return (
    <Swipeable
      renderRightActions={() => (
        <View
          style={{
            justifyContent: "center",
            flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
            alignItems: "flex-end",
          }}>
          <TouchableOpacity
            style={{
              width: 77,
              height: 80,
              backgroundColor: "#A6A6A6",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() =>
              navigation.navigate("Common", { screen: "ArchievedVault" })
            }>
            <ArchieveIcon />
            <Text
              style={{
                color: Colors.general.white,
                fontSize: hp(12),
                fontWeight: "400",
                lineHeight: hp(15),
                fontFamily: "Euclid-Circular-A",
                marginTop: hp(12),
              }}>
              Archive
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 77,
              height: 80,
              backgroundColor: "red",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() =>
              navigation.navigate("Common", { screen: "ConfirmDeleteVault" })
            }>
            <TrashIcon color="white" size={24} />
            <Text
              style={{
                color: Colors.general.white,
                fontSize: hp(12),
                fontWeight: "400",
                lineHeight: hp(15),
                fontFamily: "Euclid-Circular-A",
                marginTop: hp(12),
              }}>
              Delete
            </Text>
          </TouchableOpacity>
        </View>
      )}
      onSwipeableRightOpen={swipeFromRightOpen}
      friction={2}
      rightThreshold={40}>
      <View>
        <View style={styles.vaultContainer}>
          <View style={styles.vaultItem}>
            <View
              style={[
                styles.flightContainer,
                {
                  backgroundColor:
                    amount === "200,000"
                      ? "#EBFCE9"
                      : Colors[colorScheme].disabled,
                },
              ]}>
              <TouchableOpacity onPress={onPress} style={{}}>
                {lockIcon}
              </TouchableOpacity>
            </View>

            <View style={styles.list}>
              <Text style={styles.item}>{item}</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View>
                  <Text
                    style={[
                      styles.amount,
                      {
                        color: "#2A9E17",
                      },
                    ]}>
                    {"\u20A6"}
                    {amount}
                  </Text>
                </View>
                <View>
                  <Text style={[styles.amount]}>{altamount}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.stage}>{stage}</Text>
            <TouchableOpacity onPress={onPress}>{closeIcon}</TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.separator} />
    </Swipeable>
  );
};

const UserArchieved = () => {
  return (
    <>
      <SafeAreaView>
        <FlatList
          data={ArchieveList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ListItem stage={""} {...item} />}
        />
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  flightContainer: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
  },
  stage: {
    fontSize: hp(12),
    fontWeight: "400",
    lineHeight: hp(15),
    fontFamily: "Euclid-Circular-A",
    color: Colors.general.green,
    marginRight: hp(12),
  },
  // container: {
  //   flex: 1,
  // },
  itemSeparator: {
    flex: 1,
    height: 1,
    backgroundColor: "#444",
  },
  list: {
    marginLeft: hp(20),
  },
  vaultItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  vaultContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: hp(20),
    marginBottom: hp(20),
    marginTop: hp(20),
  },
  amount: {
    fontSize: hp(14),
    fontWeight: "600",
    lineHeight: hp(17.75),
    fontFamily: "Euclid-Circular-A-Bold",
    marginTop: hp(2),
  },
  item: {
    fontSize: hp(16),
    fontWeight: "500",
    lineHeight: hp(17.75),
    fontFamily: "Euclid-Circular-A",
  },
  separator: {
    borderWidth: 0.5,
    borderColor: "#EAEAEC",
    width: wp(390),
    alignSelf: "center",
  },
});
export default UserArchieved;
