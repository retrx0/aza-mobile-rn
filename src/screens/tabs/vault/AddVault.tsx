import React from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  I18nManager,
} from "react-native";
import Button from "../../../components/buttons/Button";
import { View } from "../../../components/Themed";
import { Header } from "../../../components/text/header";
import { InfoIcon } from "../../../../assets/svg";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import CommonStyles from "../../../common/styles/CommonStyles";
// import styles from "../../onboarding/OnboardingStyles";
import { ListCard, VaultList } from "./components/VaultCard";
import { RootTabScreenProps } from "../../../../types";
import CancelButtonWithUnderline from "../../../components/buttons/CancelButtonWithUnderline";
import Archieved from "./components/ArchievedCard";
import ArchievedComponents from "./components/ArchievedCard";

import Swipeable from "react-native-gesture-handler/Swipeable";
import {
  ArchieveIcon,
  CloseIcon,
  LockIcon,
  TrashIcon,
} from "../../../../assets/svg";
import { VautListProps } from "../../../../types";
import { hp, wp } from "../../../common/util/LayoutUtil";
import Colors from "../../../constants/Colors";
import { RectButton } from "react-native-gesture-handler";

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
      <View>
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

const AddVault = ({ navigation }: RootTabScreenProps<"Vault">) => {
  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View style={[CommonStyles.addVault]}>
          <Header
            heading='Vault'
            description={""}
            headerStyle={[CommonStyles.vaultAdd]}
            descriptionStyle={undefined}
          />
          <TouchableOpacity>
            <InfoIcon />
          </TouchableOpacity>
        </View>
        <View style={CommonStyles.lineDivider} />
        <SafeAreaView style={styles.container}>
          <FlatList
            data={todoList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ListItem {...item} />}
          />
        </SafeAreaView>
        <View style={[CommonStyles.passwordContainer, { bottom: hp(45) }]}>
          <CancelButtonWithUnderline
            title='Archived Vaults'
            onPressButton={() =>
              navigation.getParent()?.navigate("VaultSuccessful")
            }
            style={CommonStyles.archivedBox}
            styleText={CommonStyles.archived}
          />
          <Button
            title='New Vault'
            onPressButton={() =>
              navigation.navigate("Common", { screen: "ConfirmDeleteVault" })
            }
            style={CommonStyles.button}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default AddVault;

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

// import React from "react";
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   Text,
//   StatusBar,
//   FlatList,
// } from "react-native";
// import Swipeable from "react-native-gesture-handler/Swipeable";
// import SpacerWrapper from "../../../common/util/SpacerWrapper";
// const todoList = [
//   { id: "1", text: "Learn JavaScript" },
//   { id: "2", text: "Learn React" },
//   { id: "3", text: "Learn TypeScript" },
// ];
// const Separator = () => <View style={styles.itemSeparator} />;
// const LeftSwipeActions = () => {
//   return (
//     <View
//       style={{ flex: 1, backgroundColor: "#ccffbd", justifyContent: "center" }}>
//       <Text
//         style={{
//           color: "#40394a",
//           paddingHorizontal: 10,
//           fontWeight: "600",
//           paddingHorizontal: 30,
//           paddingVertical: 20,
//         }}>
//         Bookmark
//       </Text>
//     </View>
//   );
// };
// const rightSwipeActions = () => {
//   return (
//     <View
//       style={{
//         backgroundColor: "#ff8303",
//         justifyContent: "center",
//         alignItems: "flex-end",
//       }}>
//       <Text
//         style={{
//           color: "#1b1a17",
//           paddingHorizontal: 10,
//           fontWeight: "600",

//           paddingVertical: 20,
//         }}>
//         Delete
//       </Text>
//     </View>
//   );
// };
// const swipeFromLeftOpen = () => {
//   alert("Swipe from left");
// };
// const swipeFromRightOpen = () => {
//   alert("Swipe from right");
// };
// const ListItem = ({ text }) => (
//   <Swipeable
//     renderLeftActions={LeftSwipeActions}
//     renderRightActions={rightSwipeActions}
//     onSwipeableRightOpen={swipeFromRightOpen}
//     onSwipeableLeftOpen={swipeFromLeftOpen}>
//     <View
//       style={{
//         paddingHorizontal: 30,
//         paddingVertical: 20,
//         backgroundColor: "white",
//       }}>
//       <Text style={{ fontSize: 24 }} style={{ fontSize: 20 }}>
//         {text}
//       </Text>
//     </View>
//   </Swipeable>
// );
// const AddVault = () => {
//   return (
//     <SpacerWrapper>
//       <View style={styles.container}>
//         <Text style={{ textAlign: "center", marginVertical: 20 }}>
//           Swipe right or left
//         </Text>
//         <FlatList
//           data={todoList}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => <ListItem {...item} />}
//           ItemSeparatorComponent={() => <Separator />}
//         />
//       </View>
//     </SpacerWrapper>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   itemSeparator: {
//     flex: 1,
//     height: 1,
//     backgroundColor: "#444",
//   },
// });
// export default AddVault;
