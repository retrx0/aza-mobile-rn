import { Dimensions } from "react-native";
import {
  widthPercentageToDP as wdp,
  heightPercentageToDP as hdp,
} from "react-native-responsive-screen";
import Layout from "../../constants/Layout";

const CustomHeight = Dimensions.get("screen").height;
const CustomWidth = Dimensions.get("screen").width;

export const hp = (value: number) => {
  const dimension = (value / CustomHeight) * 100;
  return hdp(`${dimension}%`);
};

export const wp = (value: number) => {
  const dimension = (value / CustomWidth) * 100;
  return wdp(`${dimension}%`);
};
