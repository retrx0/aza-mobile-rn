// import { useNavigation } from "@react-navigation/core";
// import React from "react";
// import { StyleSheet, TouchableOpacity } from "react-native";
// import { Text, View } from "../../../../components/Themed";

// import { CloseIcon } from "../../../../../assets/svg";
// import { UnmatureVaultListProps } from "../../../../../types";
// import { hp, wp } from "../../../../common/util/LayoutUtil";
// import Colors from "../../../../constants/Colors";
// import useColorScheme from "../../../../hooks/useColorScheme";
// import Divider from "../../payments/sub-components/Divider";

// export const MatureList = [
//   {
//     title: "Change Goal Amount",
//     closeIcon: <CloseIcon />,
//     subTitle: "\u20A6280,000",
//   },
//   {
//     title: "Recurring Transfer",
//     closeIcon: <CloseIcon />,
//     subTitle: "Reach your vault goal faster with recurring transfers",
//   },
//   {
//     title: "Change Vault Name",
//     subTitle: "Flight Ticket",
//     closeIcon: <CloseIcon />,
//   },
// ];

// export const UnMatureCard = ({
//   title,
//   closeIcon,
//   subTitle,
//   onPress,
// }: UnmatureVaultListProps) => {
//   const navigation = useNavigation();
//   const colorScheme = useColorScheme();
//   return (
//     <>
//       {/* onPress={() => navigation.navigate("Common", { screen: "TopBar" })} */}
//       <View
//         style={{
//           flexDirection: "row",
//           alignItems: "center",
//           justifyContent: "space-between",
//           paddingHorizontal: hp(20),
//         }}>
//         <View>
//           <>
//           </>
//           <TouchableOpacity
//             onPress={() => navigation.navigate("Common", { screen: "TopBar" })}>
//             <Text
//               style={{
//                 fontFamily: "Euclid-Circular-A-Semi-Bold",
//                 fontSize: hp(16),
//                 fontWeight: "600",
//                 marginRight: hp(3),
//               }}>
//               {title}
//             </Text>
//           </TouchableOpacity>

//           <Text
//             style={{
//               fontFamily: "Euclid-Circular-A",
//               fontSize: hp(14),
//               fontWeight: "400",
//               marginRight: hp(3),
//             }}>
//             {subTitle}
//           </Text>
//         </View>
//         <View>{closeIcon}</View>
//       </View>
//       <View
//         style={{
//           borderWidth: 0.5,
//           borderColor: "#EAEAEC",
//           width: wp(380),
//           alignSelf: "center",
//           marginTop: hp(17),
//           marginBottom: hp(17),
//         }}
//       />
//       {/* <View style={styles.separator} /> */}
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   flightContainer: {
//     width: 36,
//     height: 36,
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 18,
//   },
//   stage: {
//     fontSize: hp(12),
//     fontWeight: "400",
//     lineHeight: hp(15),
//     fontFamily: "Euclid-Circular-A",
//     color: Colors.general.green,
//     marginRight: hp(12),
//   },
//   container: {
//     flex: 1,
//   },
//   itemSeparator: {
//     flex: 1,
//     height: 1,
//     backgroundColor: "#444",
//   },
//   list: {
//     marginLeft: hp(20),
//   },
//   vaultItem: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   vaultContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: hp(20),
//     marginBottom: hp(20),
//     marginTop: hp(20),
//   },
//   amount: {
//     fontSize: hp(14),
//     fontWeight: "600",
//     lineHeight: hp(17.75),
//     fontFamily: "Euclid-Circular-A-Bold",
//     marginTop: hp(2),
//   },
//   item: {
//     fontSize: hp(16),
//     fontWeight: "500",
//     lineHeight: hp(17.75),
//     fontFamily: "Euclid-Circular-A",
//   },
//   separator: {
//     borderWidth: 0.5,
//     borderColor: "#EAEAEC",
//     width: wp(390),
//     alignSelf: "center",
//   },
// });
// export default UnMatureCard;
