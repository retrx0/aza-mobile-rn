import { RootTabScreenProps } from "../../../../types";
import CommonStyles from "../../../common/styles/CommonStyles";
import { hp } from "../../../common/util/LayoutUtil";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import BackButton from "../../../components/buttons/BackButton";
import Button from "../../../components/buttons/Button";
import { UnderlinedInput } from "../../../components/input/UnderlinedInput";
import { Header } from "../../../components/text/header";
import { View } from "../../../theme/components/View";
import { Text } from "../../../theme/components/Text";
import Colors from "../../../constants/Colors";
import useColorScheme from "../../../hooks/useColorScheme";
import { VaultStyles as styles } from "../vault/styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ChangeVaultName = ({ navigation }: RootTabScreenProps<"Vault">) => {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ marginLeft: 15 }}>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Bold",
              fontSize: hp(16),
              fontWeight: "600",
              marginLeft: hp(60),
            }}
          >
            Change Vault Name
          </Text>
        </View>
        <View style={{ paddingHorizontal: hp(20) }}>
          <Text style={CommonStyles.confirmDetails}>
            Change the name of your vault
          </Text>
          <View style={{ marginTop: hp(100) }}>
            <UnderlinedInput
              icon={null}
              keyboardType="default"
              inputStyle={{
                fontSize: hp(16),
                fontWeight: "500",
                fontFamily: "Euclid-Circular-A",
                borderBottomWidth: hp(0.25),
                borderColor: "#EAEAEC",
                paddingVertical: hp(8),
                width: "100%",

                borderBottomColor:
                  colorScheme === "dark" ? "#262626" : "#EAEAEC",
              }}
              labelStyle={styles.label}
              label="Vault Name"
              placeholder="Type in vault new name"
            />
          </View>
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}
        >
          <Button
            title="Save Change"
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
              CommonStyles.button,
            ]}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default ChangeVaultName;
