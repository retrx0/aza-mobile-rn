import { View, Text, StyleProp, TextStyle, ViewStyle } from "react-native";
import React from "react";
import ButtonLg from "../../../../components/buttons/ButtonLg";
import { AIrtimeStyles as styles } from "../airtime-screens/styles";
import useColorScheme from "../../../../hooks/useColorScheme";
import Button from "../../../../components/buttons/Button";
import Colors from "../../../../constants/Colors";
export default function MyButton({
  disabled,
  title,
  onPress,
  style,
  styleText,
}: {
  disabled: boolean;
  title: string;
  onPress: any;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
}) {
  const colorScheme=useColorScheme()
  return (
    <View
      style={[
        styles.button,
        {
          width: "100%",
          opacity: disabled ? 0.3 : 1,
        },
        style,
      ]}>
      <Button
        disabled={disabled}
        title={title}
        onPressButton={onPress}
        styleText={[styleText,{color: Colors[colorScheme].buttonText}]}
        style={{backgroundColor: Colors[colorScheme].button}}
        
      />
    </View>
  );
}
