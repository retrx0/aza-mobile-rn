import { Audio } from "expo-av";
import { COIN_DROP, SWOOSH } from "../../../assets/sounds/index";

const playSound = async (type: any) => {
  const { sound } = await Audio.Sound.createAsync(type);
  sound.playAsync();
};

export const playSwooshSound = async () => {
  await playSound(SWOOSH);
};

export const playCoinDropSound = async () => {
  await playSound(COIN_DROP);
};
