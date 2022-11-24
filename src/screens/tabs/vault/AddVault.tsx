import React from "react";
import { TouchableOpacity } from "react-native";
import Button from "../../../components/buttons/Button";
import { Text, View } from "../../../components/Themed";
import { Header } from "../../../components/text/header";
import { InfoIcon } from "../../../../assets/svg";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import CommonStyles from "../../../common/styles/CommonStyles";
import { RootTabScreenProps } from "../../../../types";
import CancelButtonWithUnderline from "../../../components/buttons/CancelButtonWithUnderline";
import ArchievedComponents from "./components/ArchievedCard";
import { hp } from "../../../common/util/LayoutUtil";
import Colors from "../../../constants/Colors";
import useColorScheme from "../../../hooks/useColorScheme";
import BackButton from "../../../components/buttons/BackButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const AddVault = ({ navigation }: RootTabScreenProps<"Vault">) => {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: hp(20),
            marginBottom: hp(35),
          }}>
          <View>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Bold",
              fontSize: hp(16),
              fontWeight: "600",
              marginRight: hp(50),
            }}>
            Vault
          </Text>
          <TouchableOpacity>
            <InfoIcon color={""} size={0} />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: hp(16),
            fontWeight: "500",
            fontFamily: "Euclid-Circular-A-Medium",
            marginBottom: hp(40),
            marginLeft: hp(19),
          }}>
          Choose a vault to view/edit details
        </Text>
        <View style={CommonStyles.lineDivider} />
        <ArchievedComponents />
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.bottom || hp(45) },
          ]}>
          <CancelButtonWithUnderline
            title="Archived Vaults"
            onPressButton={() =>
              navigation.getParent()?.navigate("ArchievedVault")
            }
            color={Colors[colorScheme].text}
            style={{ marginBottom: 10 }}
          />
          <Button
            title="New Vault"
            onPressButton={() =>
              navigation.navigate("Common", { screen: "TopBar" })
            }
            styleText={{
              color: Colors[colorScheme].buttonText,
            }}
            style={[
              {
                backgroundColor: Colors[colorScheme].button,
              },
            ]}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default AddVault;
