import { Image, StyleSheet } from "react-native";
import Button from "../../../components/buttons/Button";
import { Text, View } from "../../../components/Themed";
import { Header } from "../../../components/text/header";
import { hp } from "../../../common/util/LayoutUtil";
import { ArrowDown } from "../../../../assets/svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Vault = ({ navigation }: { navigation: { navigate: any } }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <View style={styles.vaultContainer}>
        <Header
          heading='Vault'
          description={""}
          headerStyle={styles.vault}
          descriptionStyle={undefined}
        />
        <Image
          source={require("../../../../assets/images/Undraw.png")}
          resizeMode='cover'
          style={styles.undraw}
        />
        <Text style={styles.vaultText}>You dont have any vaults</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: hp(150),
          }}>
          <Text style={styles.createVault}>
            Click ‘New Vault’ to create a new vault
          </Text>
          <ArrowDown />
        </View>
      </View>
      <Button
        title='New Vault'
        onPressButton={() => navigation.navigate("newvault")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vault: {
    fontFamily: "Euclid-Circular-A-Semi-Bold",
    fontSize: hp(16),
    fontWeight: "400",
    lineHeight: hp(20),
  },
  vaultContainer: {
    alignSelf: "center",
    alignItems: "center",
  },
  undraw: {
    marginTop: hp(159),
  },
  createVault: {
    fontSize: hp(14),
    fontWeight: "400",
    fontFamily: "Euclid-Circular-A",
    lineHeight: 18,
    // marginBottom: hp(158),
    marginRight: 10,
  },
  vaultText: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: hp(20),
    fontFamily: "Euclid-Circular-A-Semi-Bold",
    marginTop: 30,
    marginBottom: 10,
  },
  container: {
    flex: 1,
  },
});

export default Vault;
