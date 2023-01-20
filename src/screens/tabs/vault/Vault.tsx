import { Image, TouchableOpacity } from "react-native";
import { RootTabScreenProps } from "../../../../types";
import Button from "../../../components/buttons/Button";
import { View, Text } from "../../../theme/Themed";
import { Header } from "../../../components/text/header";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import CommonStyles from "../../../common/styles/CommonStyles";
import { ArrowDownIcon } from "../../../../assets/svg";
import { hp } from "../../../common/util/LayoutUtil";
import Colors from "../../../constants/Colors";
import useColorScheme from "../../../hooks/useColorScheme";
import VaultUndrawSVG from "../../../../assets/svg/VaultUndraw";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BackButton from "../../../components/buttons/BackButton";
import { getAppTheme } from "../../../theme";
import { useAppSelector } from "../../../redux";
import { selectAppTheme } from "../../../redux/slice/themeSlice";

const Vault = ({ navigation }: RootTabScreenProps<"Vault">) => {
  const colorScheme = getAppTheme(useAppSelector(selectAppTheme));

  const insets = useSafeAreaInsets();

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: hp(30),
          }}
        >
          <View style={{ marginLeft: 20 }}>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Bold",
              fontSize: hp(16),
              fontWeight: "500",
              marginLeft: hp(100),
            }}
          >
            Vault
          </Text>
        </View>

        <View style={[CommonStyles.undraw, { alignSelf: "center" }]}>
          <VaultUndrawSVG />
        </View>

        <Text style={[CommonStyles.vaultText]}>You dont have any vaults</Text>
        <View style={CommonStyles.createVaultContainer}>
          <Text style={[CommonStyles.createNewVault]}>
            Click New Vault to create a new vault
          </Text>
          <TouchableOpacity>
            <ArrowDownIcon
              color={
                colorScheme === "dark"
                  ? Colors.dark.secondaryText
                  : Colors.light.text
              }
              size={16}
            />
          </TouchableOpacity>
        </View>

        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}
        >
          <Button
            title="New Vault"
            onPressButton={() =>
              navigation.navigate("Common", { screen: "NewVault" })
            }
            styleText={{}}
            style={[{}, CommonStyles.button]}
            disabled={false}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default Vault;
