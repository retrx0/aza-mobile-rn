import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  I18nManager,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import {
  ArchieveIcon,
  CloseIcon,
  LockIcon,
  TrashIcon,
} from "../../../../../assets/svg";
import { VautListProps } from "../../../../../types";
import { hp, wp } from "../../../../common/util/LayoutUtil";
import Colors from "../../../../constants/Colors";

const todoList = [
  {
    id: "1",
    lockIcon: <LockIcon />,
    item: "Flight Ticket",
    amount: "2000",
    closeIcon: <CloseIcon />,
    stage: "Matured",
  },
  {
    id: "2",
    lockIcon: <LockIcon />,
    item: "New Laptop",
    amount: "2000",
    closeIcon: <CloseIcon />,
    stage: "Matured",
  },
  {
    id: "3",
    lockIcon: <LockIcon />,
    item: "New Phone",
    amount: "200000",
    closeIcon: <CloseIcon />,
    stage: "Matured",
  },
];

const rightSwipeActions = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
        alignItems: "flex-end",
      }}>
      <RectButton
        style={{
          width: 77,
          height: 77,
          backgroundColor: "#A6A6A6",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <ArchieveIcon />
      </RectButton>
      <RectButton
        style={{
          width: 77,
          height: 77,
          backgroundColor: "red",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <TrashIcon />
      </RectButton>
    </View>
  );
};
const swipeFromRightOpen = () => {
  alert("");
};

const ListItem = ({
  lockIcon,
  item,
  amount,
  closeIcon,
  stage,
  onPress,
}: VautListProps) => (
  <Swipeable
    renderRightActions={rightSwipeActions}
    onSwipeableRightOpen={swipeFromRightOpen}>
    <View>
      <View style={styles.vaultContainer}>
        <View style={styles.vaultItem}>
          <TouchableOpacity onPress={onPress}>{lockIcon}</TouchableOpacity>
          <View style={styles.list}>
            <Text style={styles.item}>{item}</Text>
            <Text style={styles.amount}>{`#${amount}`}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.stage}>{stage}</Text>
          <TouchableOpacity onPress={onPress}>{closeIcon}</TouchableOpacity>
        </View>
      </View>
      <View style={styles.separator} />
    </View>
  </Swipeable>
);

const ArchievedComponents = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={todoList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ListItem {...item} />}
        />
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  stage: {
    fontSize: hp(12),
    fontWeight: "400",
    lineHeight: hp(15),
    fontFamily: "Euclid-Circular-A",
    color: Colors.general.green,
    marginRight: hp(12),
  },
  container: {
    flex: 1,
  },
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
    fontSize: hp(12),
    fontWeight: "600",
    lineHeight: hp(17.75),
    fontFamily: "Euclid-Circular-A-Bold",
    marginTop: hp(2),
  },
  item: {
    fontSize: hp(14),
    fontWeight: "500",
    lineHeight: hp(17.75),
    fontFamily: "Euclid-Circular-A",
  },
  separator: {
    borderWidth: hp(0.7),
    borderColor: "#EAEAEC",
    width: wp(370),
    alignSelf: "center",
  },
});
export default ArchievedComponents;
