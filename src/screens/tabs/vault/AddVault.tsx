import React from "react";
import { TouchableOpacity } from "react-native";
import Button from "../../../components/buttons/Button";
import { View, Text } from "../../../theme/Themed";
import { Header } from "../../../components/text/header";
import { InfoIcon } from "../../../../assets/svg";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import CommonStyles from "../../../common/styles/CommonStyles";
import { RootTabScreenProps } from "../../../types/types.navigation";
import CancelButtonWithUnderline from "../../../components/buttons/CancelButtonWithUnderline";
import ArchievedComponents from "./components/ArchievedCard";
import { hp } from "../../../common/util/LayoutUtil";
import BackButton from "../../../components/buttons/BackButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getAppTheme } from "../../../theme";
import { useAppSelector } from "../../../redux";
import { selectAppTheme } from "../../../redux/slice/themeSlice";
import Divider from "../../../components/divider/Divider";
import { CommonScreenProps } from "../../../common/navigation/types";

const AddVault = ({ navigation }: CommonScreenProps<"AddVault">) => {
  const insets = useSafeAreaInsets();
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));

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
          }}
        >
          <View>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Bold",
              fontSize: hp(16),
              fontWeight: "600",
              marginRight: hp(50),
            }}
          >
            Vault
          </Text>
          <TouchableOpacity>
            <InfoIcon color={appTheme === "dark" ? "#999999" : "#000000"} />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: hp(16),
            fontWeight: "500",
            fontFamily: "Euclid-Circular-A-Medium",
            marginBottom: hp(40),
            marginLeft: hp(19),
          }}
        >
          Choose a vault to view/edit details
        </Text>
        <Divider />
        <ArchievedComponents />
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}
        >
          <CancelButtonWithUnderline
            title="Archived Vaults"
            onPressButton={() =>
              navigation.getParent()?.navigate("ArchievedVault")
            }
            style={{ marginBottom: 10 }}
          />
          <Button
            title="New Vault"
            onPressButton={() => navigation.navigate("NewVault")}
            styleText={{}}
            style={[{}]}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default AddVault;
