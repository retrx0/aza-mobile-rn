import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView, Text, View } from "../../../components/Themed";
import CommonStyles from "../../../common/styles/CommonStyles";
import { PieChart } from "react-native-gifted-charts";
import RegularText from "../../../components/text/RegularText";
import { AIrtimeStyles } from "./airtime-screens/styles";
import {
  ArrowFowardIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  BackIcon,
  LoveIcon,
} from "../../../../assets/svg";
import useColorScheme from "../../../hooks/useColorScheme";

const data = [
  { value: 54, color: "#753FF6", text: "Cable Tv" },
  { value: 40, color: "#2A9E17", text: "Internet" },
  { value: 20, color: "#ED8A0A", text: "Charity" },
];
export default function Pie() {
  const scheme = useColorScheme();
  return (
    <SafeAreaView style={[CommonStyles.parentContainer]}>
      <View style={styles.container}>
        <View style={styles.month}>
          <TouchableOpacity>
            <ArrowLeftIcon
              color={scheme == "light" ? "#292D32" : "white"}
              size={0}
            />
          </TouchableOpacity>

          <Text style={styles.monthText}>Jun 2022</Text>
          <TouchableOpacity>
            <ArrowRightIcon
              color={scheme == "light" ? "#292D32" : "white"}
              size={16}
            />
          </TouchableOpacity>
        </View>
        <PieChart
          textBackgroundRadius={26}
          textColor="#ffffff"
          donut={true}
          data={data}
          focusOnPress
          showValuesAsLabels
          centerLabelComponent={() => (
            <View style={styles.centerLabel}>
              <Text style={{ color: "black" }}>Total</Text>
              <RegularText text="N38,000" />
            </View>
          )}
        />
        <View style={styles.labels}>
          {data.map((item, ind) => (
            <View key={ind.toString()} style={styles.individualLabel}>
              <View
                style={[styles.colors, { backgroundColor: item.color }]}
              ></View>
              <Text>{item.text}</Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centerLabel: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  container: {
    marginTop: 70,
    flex: 1,
    alignItems: "center",
  },
  labels: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginTop: 60,
  },
  individualLabel: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  colors: {
    height: 15,
    width: 15,
    borderRadius: 5,
    marginRight: 3,
  },
  month: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "50%",
    marginBottom: 30,
  },
  monthText: {
    fontWeight: "bold",
  },
});
