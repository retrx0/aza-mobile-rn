import { Image, StyleSheet } from "react-native";
import Button from "../../../components/buttons/Button";
import { Undraw } from "../../../../assets/svg";
import { Text, View } from "../../../components/Themed";
import { hp } from "../../../common/utils";
import { Header } from "../../../components/text/header";

const Vault = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.vaultContainer}>
        <Header
          heading='Vault'
          description={""}
          headerStyle={undefined}
          descriptionStyle={undefined}
        />
        <Image source={Undraw} resizeMode='cover' style={styles.undraw} />
        <Text style={styles.vaultText}>You dont have any vaults</Text>
        <Text style={styles.createVault}>
          Click ‘New Vault’ to create a new vault
        </Text>
      </View>
      <Button
        title='New Vault'
        onPressButton={() => navigation.navigate("newvault")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vaultContainer: {
    alignSelf: "center",
    alignItems: "center",
  },
  undraw: {
    marginTop: hp(159),
  },
  createVault: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 17.75,
    marginBottom: hp(158),
  },
  vaultText: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 20.29,
    color: "#2A9E17",
    marginTop: 30,
    marginBottom: 10,
  },
  container: {
    flex: 1,
  },
});

export default Vault;
