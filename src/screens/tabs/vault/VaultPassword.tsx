// import { Image, StyleSheet } from "react-native";
// import Button from "../../../components/buttons/Button";
// import { Text, View } from "../../../components/Themed";
// import { hp } from "../../../common/util/LayoutUtil";
// import { BackIcon } from "../../../../assets/svg";
// import SegmentedInput from "../../../components/input/SegmentedInput";
// import SpacerWrapper from "../../../common/util/SpacerWrapper";
// import CommonStyles from "../../../common/styles/CommonStyles";
// import { useSafeAreaInsets } from "react-native-safe-area-context";
// import BackButton from "../../../components/buttons/BackButton";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { VaultStackProps } from "./VaultNavigator";

// const VaultPassword = ({
//   navigation,
// }: NativeStackScreenProps<VaultStackProps>) => {
//   const insets = useSafeAreaInsets();

//   return (
//     <SpacerWrapper>
//       <View style={{ flex: 1 }}>
//         <View style={styles.vaultContainer}>
//           <BackButton
//             onPress={() => {
//               navigation.getParent()?.navigate("newvault");
//             }}
//           />

//           <Text style={styles.password}>Password</Text>
//         </View>
//         <Text style={styles.authenticate}>
//           Kindly enter your password to authenticate this transaction
//         </Text>
//         <SegmentedInput
//           value={"1221221"}
//           secureInput
//           headerText='Password'
//           onValueChanged={(): void => {}}
//         />

//         <Button
//           title='Continue'
//           onPressButton={() => navigation.navigate("deleteVault")}
//           style={[
//             CommonStyles.passwordContainer,
//             { bottom: insets.bottom || hp(40) },
//           ]}
//         />
//       </View>
//     </SpacerWrapper>
//   );
// };

// const styles = StyleSheet.create({
//   authenticate: {
//     fontFamily: "Euclid-Circular-A",
//     fontSize: hp(14),
//     fontWeight: "500",
//     lineHeight: hp(18),
//     marginLeft: hp(20),
//     marginTop: hp(30),
//   },
//   password: {
//     marginLeft: hp(80),
//     fontSize: hp(16),
//     fontWeight: "600",
//     lineHeight: hp(20),
//     fontFamily: "Euclid-Circular-A-Bold",
//   },
//   back: {
//     marginLeft: hp(10),
//     fontSize: 16,
//     fontWeight: "400",
//     lineHeight: 20.29,
//     color: "#4D4D4D",
//   },
//   backContainer: {
//     alignItems: "center",
//     flexDirection: "row",
//   },
//   vaultContainer: {
//     alignItems: "center",
//     marginTop: hp(40),
//     flexDirection: "row",
//   },
// });

// export default VaultPassword;

// // import React, { Component } from "react";
// // import { View, Text } from "react-native";
// // import Biometrics from "react-native-biometrics";

// // export default class App extends Component {
// //   componentDidMount = () => {
// //     console.log(Biometrics);
// //     Biometrics.isSensorAvailable().then((biometryType) => {
// //       if (biometryType === Biometrics.TouchID) {
// //         console.log("TouchID is supported");
// //       } else if (biometryType === Biometrics.FaceID) {
// //         console.log("FaceID is supported");
// //       } else {
// //         console.log("Biometrics not supported");
// //       }
// //     });
// //   };

// //   render() {
// //     const text = "Testing";
// //     return (
// //       <View style={{ alignItems: "center", justifyContent: "center" }}>
// //         <Text> {text} </Text>
// //       </View>
// //     );
// //   }
// // }
