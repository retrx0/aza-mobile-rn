import React, { useLayoutEffect } from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

import BackButton from "../../../../components/buttons/BackButton";
import { View, Text } from "../../../../theme/Themed";

import CancelButtonWithUnderline from "../../../../components/buttons/CancelButtonWithUnderline";
import Button from "../../../../components/buttons/Button";
import Divider from "../../../../components/divider/Divider";

import Colors from "../../../../constants/Colors";
import { hp, wp } from "../../../../common/util/LayoutUtil";
import CommonStyles from "../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CommonScreenProps } from "../../../../common/navigation/types";
import { UndrawCreditCardIcon } from "../../../../../assets/svg";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../../theme";
import { useAppSelector } from "../../../../redux";

const DebitCreditCardsScreen = ({
  navigation,
}: CommonScreenProps<"DebitCreditCards">) => {
  const insets = useSafeAreaInsets();
  const selectedTheme = useAppSelector(selectAppTheme);
  const appTheme = getAppTheme(selectedTheme);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          // lightColor={Colors.light.mainText}
          // darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "500",
          }}>
          Debit/Credit Cards
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

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <Text
          style={{
            marginTop: hp(30),
            textAlign: "center",
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: hp(16),
            fontWeight: "600",
            marginBottom: hp(30),
            color: "#2A9E17",
          }}>
          Coming Soon
        </Text>
        <Text
          style={{
            marginTop: hp(30),
            alignSelf: "center",
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: hp(16),
            fontWeight: "500",
            maxWidth: wp(333),
            textAlign: "center",
            marginBottom: hp(80),
          }}>
          Add, remove and manage your debit/credit card as you wish
        </Text>
        <UndrawCreditCardIcon
          color={appTheme === "dark" ? "#E7E9EA" : "#000000"}
          style={{ alignSelf: "center" }}
        />
      </View>
    </SpacerWrapper>
  );
};

export default DebitCreditCardsScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     display: "flex",
//     justifyContent: "space-between",
//     paddingHorizontal: 15,
//   },
// });

// {/* <SpacerWrapper>
//       <View style={[CommonStyles.vaultcontainer]}>
//         <View style={{ paddingHorizontal: hp(20) }}>
//           <Text
//             style={{
//               fontFamily: "Euclid-Circular-A-Medium",
//               fontSize: hp(16),
//               marginVertical: hp(30),
//               fontWeight: "500",
//               marginLeft: hp(5),
//             }}
//           >
//             Securely manage all your debit and credit cards connected to Aza
//             right here. Tap a card for more options.
//           </Text>
//           <Divider />
//           {/* list item */}
//           <View>
//             <TouchableOpacity onPress={() => navigation.navigate("ManageCard")}>
//               <View
//                 style={[
//                   CommonStyles.row,
//                   { alignSelf: "stretch", paddingVertical: 15 },
//                 ]}
//               >
//                 <Image
//                   source={{
//                     uri: "https://download.logo.wine/logo/Visa_Inc./Visa_Inc.-Logo.wine.png",
//                   }}
//                   style={{
//                     width: 36,
//                     height: 36,
//                     backgroundColor: "white",
//                     borderRadius: 50,
//                     resizeMode: "contain",
//                   }}
//                 />
//                 <Text
//                   lightColor={Colors.light.mainText}
//                   darkColor={Colors.dark.mainText}
//                   style={{
//                     marginLeft: hp(20),
//                     fontFamily: "Euclid-Circular-A-Semi-Bold",
//                     fontSize: hp(14),
//                   }}
//                 >
//                   Visa (**** **** **** 1234)
//                 </Text>
//               </View>
//             </TouchableOpacity>
//             <Divider />
//           </View>
//         </View>
//         <View
//           style={[
//             CommonStyles.passwordContainer,
//             { bottom: insets.top || hp(45) },
//           ]}
//         >
//           <Button
//             title="Add New Card"
//             onPressButton={() =>
//               navigation.navigate("AddNewCard", {
//                 navigateBackTo: "DebitCreditCards",
//               })
//             }
//             styleText={{}}
//             style={[{}]}
//           />
//           <CancelButtonWithUnderline
//             title="Cancel"
//             onPressButton={() => navigation.goBack()}
//             styleText={CommonStyles.cancelStyle}
//             style={{ borderBottomColor: Colors.general.red }}
//           />
//         </View>
//       </View>
//     </SpacerWrapper> */}
