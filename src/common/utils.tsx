import {
  widthPercentageToDP as wdp,
  heightPercentageToDP as hdp,
} from "react-native-responsive-screen";

const CustomHeight = 812;
const CustomWidth = 375;

export const hp = (value: number) => {
  const dimension = (value / CustomHeight) * 100;
  return hdp(`${dimension}%`);
};

export const wp = (value: number) => {
  const dimension = (value / CustomWidth) * 100;
  return wdp(`${dimension}%`);
};
