import { Image, TouchableOpacity } from "react-native";
import { RootTabScreenProps } from "../../../../types";
import Button from "../../../components/buttons/Button";
import { Text, View } from "../../../components/Themed";
import { Header } from "../../../components/text/header";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import CommonStyles from "../../../common/styles/CommonStyles";
import { ArrowDownIcon } from "../../../../assets/svg";
import { hp } from "../../../common/util/LayoutUtil";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Undraw } from "../../../../assets/images";
import Colors from "../../../constants/Colors";
import useColorScheme from "../../../hooks/useColorScheme";
import VaultUndrawSVG from "../../../../assets/svg/VaultUndraw";

const Vault = ({ navigation }: RootTabScreenProps<"Vault">) => {
  const colorScheme = useColorScheme();

  const insets = useSafeAreaInsets();

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View style={[CommonStyles.vaultContainer]}>
          <Header
            heading="Vault"
            description={""}
            headerStyle={[CommonStyles.vault]}
            descriptionStyle={undefined}
          />
          {/* <Image
            source={Undraw}
            resizeMode="cover"
            style={[CommonStyles.undraw]}
          /> */}
          <View style={[CommonStyles.undraw]}>
            <VaultUndrawSVG />
          </View>

          <Text style={[CommonStyles.vaultText]}>You dont have any vaults</Text>
          <View style={CommonStyles.createVaultContainer}>
            <Text
              style={[
                CommonStyles.createNewVault,
                { color: Colors[colorScheme].Text },
              ]}
            >
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
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.bottom || hp(20) },
          ]}
        >
          <Button
            title="New Vault"
            onPressButton={() =>
              navigation.navigate("Common", { screen: "NewVault" })
            }
            styleText={{
              color: Colors[colorScheme].buttonText,
            }}
            style={[
              {
                backgroundColor: Colors[colorScheme].button,
              },

              CommonStyles.button,
            ]}
            disabled={false}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default Vault;
