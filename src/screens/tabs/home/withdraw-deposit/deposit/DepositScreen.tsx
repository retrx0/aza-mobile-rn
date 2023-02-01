import React, { useLayoutEffect, useState } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import BackButton from "../../../../../components/buttons/BackButton";
import { View, Text } from "../../../../../theme/Themed";

import Button from "../../../../../components/buttons/Button";
import ButtonWithUnderline, {
  CancelButtonWithUnderline,
} from "../../../../../components/buttons/CancelButtonWithUnderline";
import Divider from "../../../../../components/divider/Divider";

import { CommonScreenProps } from "../../../../../common/navigation/types";
import Colors from "../../../../../constants/Colors";
import { hp, wp } from "../../../../../common/util/LayoutUtil";
import useColorScheme from "../../../../../hooks/useColorScheme";
import CommonStyles from "../../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../../common/util/SpacerWrapper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppSelector } from "../../../../../redux";
import { selectAppTheme } from "../../../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../../../theme";

import {
  ArrowDownIcon,
  UndrawCreditCardIcon,
} from "../../../../../../assets/svg";
import { DebitCard } from "../../../../../../assets/images";

const DepositScreen = ({ navigation }: CommonScreenProps<"Deposit">) => {
  const colorScheme = useColorScheme();
  const [selectedCard, setSelectedCard] = useState("");
  const [cardsAvailable] = useState(true);
  const insets = useSafeAreaInsets();
  const selectedTheme = useAppSelector(selectAppTheme);
  const appTheme = getAppTheme(selectedTheme);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
          }}>
          Deposit
        </Text>
      ),
      // hide default back button which only shows in android
      headerBackVisible: false,
      //center it in android
      headerTitleAlign: "center",
      headerShadowVisible: false,
      headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
      headerRight: () => false,
    });
  }, []);

  const accounts = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrjzgYSElVPPXddqi8InFnxHHBzkx524woJQ&usqp=CAU",
      name: "Visa (**** **** **** 1234)",
    },
  ];

  if (cardsAvailable) {
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
            }}>
            Easily pay for your water services through Aza
          </Text>
          <Image
            source={DebitCard}
            resizeMode="cover"
            style={{
              width: wp(260),
              height: hp(227),
              marginTop: hp(80),
              alignSelf: "center",
            }}
          />
        </View>
      </SpacerWrapper>
    );
  }

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <View
          style={[
            CommonStyles.col,
            { marginTop: "auto", marginBottom: "auto" },
          ]}>
          <UndrawCreditCardIcon
            color={colorScheme === "dark" ? "#E7E9EA" : "#000000"}
          />
          <Text
            lightColor={Colors.light.text}
            darkColor={Colors.dark.mainText}
            style={{
              fontSize: 16,
              fontFamily: "Euclid-Circular-A-Semi-Bold",
              marginTop: hp(30),
              textAlign: "center",
            }}>
            You do not have any credit/debit cards
          </Text>
          <View style={[CommonStyles.row, { marginTop: hp(10) }]}>
            <Text
              lightColor={Colors.light.text}
              darkColor={Colors.dark.secondaryText}
              style={{
                fontSize: 14,
                maxWidth: 300,
                marginRight: 5,
                textAlign: "center",
              }}>
              Click ‘Add New Card’ to add a new card
            </Text>
            <ArrowDownIcon
              color={
                colorScheme === "dark"
                  ? Colors.dark.secondaryText
                  : Colors.light.text
              }
              size={16}
            />
          </View>
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}>
          <Button
            title="Add New Card"
            onPressButton={() =>
              navigation.navigate("AddNewCard", {
                navigateBackTo: "Deposit",
              })
            }
            styleText={{}}
            style={[{}]}
          />
          <ButtonWithUnderline
            title="Cancel"
            onPressButton={() => navigation.goBack()}
            styleText={CommonStyles.cancelStyle}
            style={{ borderBottomColor: Colors.general.red }}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default DepositScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
});

// <SpacerWrapper>
//   <View style={[CommonStyles.vaultcontainer]}>
//     <View style={{ paddingHorizontal: hp(15) }}>
//       <Text
//         // lightColor={Colors.light.mainText}
//         // darkColor={Colors.dark.mainText}
//         style={{
//           fontFamily: "Euclid-Circular-A",
//           fontSize: hp(16),
//           marginBottom: hp(30),
//           fontWeight: "500",
//           paddingLeft: hp(7),
//         }}>
//         Select the card you wish to deposit money to your Aza from
//       </Text>
//       <Divider />
//       {accounts.map(({ image, name }, i) => (
//         <View key={i}>
//           <TouchableOpacity onPress={() => setSelectedCard(name)}>
//             <View
//               style={[
//                 CommonStyles.row,
//                 { alignSelf: "stretch", paddingVertical: 15 },
//               ]}>
//               <Image
//                 source={{ uri: image }}
//                 style={{
//                   width: 36,
//                   height: 36,
//                   borderRadius: 50,
//                 }}
//               />
//               <Text
//                 style={{
//                   marginLeft: 20,
//                   fontFamily: "Euclid-Circular-A-Semi-Bold",
//                   fontSize: 14,
//                 }}>
//                 {name}
//               </Text>
//               <View
//                 style={{
//                   marginLeft: "auto",
//                   width: hp(20),
//                   height: hp(20),
//                   borderRadius: hp(10),
//                   borderColor:
//                     selectedCard === name
//                       ? Colors.general.green
//                       : "#3A3D42",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   borderWidth: hp(1),
//                 }}>
//                 {selectedCard === name && (
//                   <View style={CommonStyles.doneSelect} />
//                 )}
//               </View>
//             </View>
//           </TouchableOpacity>
//           <Divider />
//         </View>
//       ))}
//     </View>

//     <View
//       style={[
//         CommonStyles.passwordContainer,
//         { bottom: insets.bottom || hp(45) },
//       ]}>
//       <CancelButtonWithUnderline
//         title="Add New Card"
//         onPressButton={() =>
//           navigation.navigate("AddNewCard", {
//             navigateBackTo: "Deposit",
//           })
//         }
//         color={Colors[colorScheme].text}
//         style={{
//           marginBottom: hp(10),
//           borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",
//         }}
//       />
//       <Button
//         disabled={!selectedCard}
//         title="Continue"
//         onPressButton={() =>
//           navigation.navigate("TransactionKeypad", {
//             headerTitle: "Amount",
//             transactionType: {
//               transaction: "deposit",
//               type: "normal",
//               beneficiary: {
//                 azaAccountNumber: "",
//                 fullName: "",
//               },
//             },
//           })
//         }
//         styleText={{}}
//         style={[{}]}
//       />
//       <CancelButtonWithUnderline
//         title="Cancel"
//         onPressButton={() => navigation.goBack()}
//         styleText={CommonStyles.cancelStyle}
//         style={{ borderBottomColor: Colors.general.red }}
//       />
//     </View>
//   </View>
// </SpacerWrapper>
