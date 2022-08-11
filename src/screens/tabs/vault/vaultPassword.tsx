import { Image, StyleSheet } from "react-native";
import Button from "../../../components/buttons/Button";
import { Text, View } from "../../../components/Themed";
import { hp } from "../../../common/utils";
import { BackIcon } from "../../../../assets/svg";

const VaultPassword = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.vaultContainer}>
        <View style={styles.backContainer}>
          <BackIcon />
          <Text style={styles.back}>Back</Text>
        </View>
        <Text style={styles.password}>Password</Text>
      </View>
      <Text style={styles.authenticate}>
        Kindly enter your password to authenticate this transaction
      </Text>
      <Button
        title='Continue'
        onPressButton={() => navigation.navigate("newvault")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  authenticate: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 17.75,
    color: "#4D4D4D",
    width: 315,
    marginLeft: hp(30),
    marginTop: hp(30),
  },
  password: {
    marginLeft: hp(76),
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 20.29,
    color: "#4D4D4D",
  },
  back: {
    marginLeft: hp(10),
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 20.29,
    color: "#4D4D4D",
  },
  backContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  vaultContainer: {
    alignItems: "center",
    marginTop: hp(40),
    flexDirection: "row",
    paddingHorizontal: hp(30),
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

export default VaultPassword;

// import React, { Component } from "react";
// import { View, Text } from "react-native";
// import Biometrics from "react-native-biometrics";

// export default class App extends Component {
//   componentDidMount = () => {
//     console.log(Biometrics);
//     Biometrics.isSensorAvailable().then((biometryType) => {
//       if (biometryType === Biometrics.TouchID) {
//         console.log("TouchID is supported");
//       } else if (biometryType === Biometrics.FaceID) {
//         console.log("FaceID is supported");
//       } else {
//         console.log("Biometrics not supported");
//       }
//     });
//   };

//   render() {
//     const text = "Testing";
//     return (
//       <View style={{ alignItems: "center", justifyContent: "center" }}>
//         <Text> {text} </Text>
//       </View>
//     );
//   }
// }
