// import { TouchableOpacity } from "react-native";
// import Button from "../../../components/buttons/Button";
// import { View } from "../../../components/Themed";
// import { Header } from "../../../components/text/header";
// import { hp } from "../../../common/util/LayoutUtil";
// import { InfoIcon } from "../../../../assets/svg";
// import SpacerWrapper from "../../../common/util/SpacerWrapper";
// import CommonStyles from "../../../common/styles/CommonStyles";
// import BackButton from "../../../components/buttons/BackButton";
// import { RootTabScreenProps } from "../../../../types";
// import CancelButtonWithUnderline from "../../../components/buttons/CancelButtonWithUnderline";
// import React from "react";
// import { ListCard, VaultList } from "./components/VaultCard";

// const ArchievedVault = ({ navigation }: RootTabScreenProps<"Vault">) => {
//   return (
//     <SpacerWrapper>
//       <View style={CommonStyles.vaultcontainer}>
//         <View style={CommonStyles.archievedContainer}>
//           <BackButton onPress={() => navigation.goBack()} />
//           <View style={[CommonStyles.archievedVault]}>
//             <Header
//               heading='Archived Vaults'
//               description={""}
//               descriptionStyle={undefined}
//               headerStyle={CommonStyles.archieved}
//             />
//           </View>
//         </View>

//         <View style={CommonStyles.lineDivider} />
//         <View>
//           {VaultList.map((item, index) => {
//             return (
//               <ListCard
//                 key={index}
//                 lockIcon={item.lockIcon}
//                 item={item.item}
//                 amount={item.amount}
//                 closeIcon={item.closeIcon}
//                 onPress={() => {}}
//                 stage={""}
//               />
//             );
//           })}
//         </View>

//         <View style={[CommonStyles.passwordContainer, { bottom: hp(45) }]}>
//           <TouchableOpacity>
//             <CancelButtonWithUnderline
//               title='Archived Vaults'
//               onPressButton={() => navigation.getParent()?.navigate("AddVault")}
//               style={CommonStyles.archivedBox}
//               styleText={CommonStyles.archived}
//             />
//           </TouchableOpacity>

//           <Button
//             title='New Vault'
//             onPressButton={() =>
//               navigation.navigate("Common", { screen: "ConfirmDeleteVault" })
//             }
//             style={CommonStyles.button}
//           />
//         </View>
//       </View>
//     </SpacerWrapper>
//   );
// };

// export default ArchievedVault;
