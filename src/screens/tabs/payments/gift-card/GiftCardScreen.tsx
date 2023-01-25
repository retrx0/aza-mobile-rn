import { Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Text, View as View } from "../../../../theme/Themed";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { UnderlinedInput } from "../../../../components/input/UnderlinedInput";
import { AIrtimeStyles as styles } from "../airtime-screens/styles";
import ListItem from "../sub-components/ListItem";
import { RootTabScreenProps } from "../../../../../types";
import { hp } from "../../../../common/util/LayoutUtil";
import { GiftCardList } from "../sub-components/Filters";
import { useAppDispatch, useAppSelector } from "../../../../redux";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../../theme";
import CharityCard from "../charity-screens/CharityCard";
import {
  getGiftCards,
  selectPayment,
} from "../../../../redux/slice/paymentSlice";
import { IGiftCard } from "../../../../redux/types";
import Animated, { FadeInDown } from "react-native-reanimated";
import { ArrowFowardIcon } from "../../../../../assets/svg";
import Divider from "../sub-components/Divider";
import Colors from "../../../../constants/Colors";
export default function GiftCardScreen({
  navigation,
}: RootTabScreenProps<"Payments">) {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useAppDispatch();
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));

  const { giftCards } = useAppSelector(selectPayment);

  const handleAction = (item: IGiftCard) => {
    navigation.navigate("Common", {
      screen: "GiftCardDetails",
      params: item,
    });
  };

  useEffect(() => {
    if (!giftCards.loaded) dispatch(getGiftCards());
  }, []);

  return (
    <View style={[CommonStyles.parentContainer, styles2.container]}>
      <UnderlinedInput
        style={styles2.mainInput}
        icon={null}
        inputStyle={[
          styles2.input,
          { borderBottomColor: Colors[appTheme].borderColor },
        ]}
        labelStyle={styles.label}
        label=""
        placeholder="Search for gift card"
        onChangeText={(text: any) => setSearchTerm(text)}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {giftCards.loading
          ? null
          : giftCards.data
              .filter((gc) =>
                gc.productName.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((item, index) => {
                return (
                  <GiftCard
                    key={index}
                    index={index}
                    giftCard={item}
                    onPress={() => handleAction(item)}
                  />
                );
              })}
      </ScrollView>
    </View>
  );
}

const GiftCard = ({
  index,
  giftCard,
  onPress,
}: {
  index: number;
  giftCard: IGiftCard;
  onPress: () => void;
}) => {
  const TouchableAnimated = Animated.createAnimatedComponent(TouchableOpacity);

  return (
    <View style={styles2.listContainer}>
      <TouchableAnimated
        entering={FadeInDown.delay(50 * (index + 1))}
        onPress={onPress}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={{ uri: giftCard.logoUrls[0], cache: "default" }}
            style={styles2.img}
          />
          <Text style={styles2.text}>{giftCard.productName}</Text>
        </View>
        <View>
          <ArrowFowardIcon />
        </View>
      </TouchableAnimated>
      <Divider />
    </View>
  );
};

const styles2 = StyleSheet.create({
  text: {
    fontWeight: "600",
    fontSize: hp(17),
    fontFamily: "Euclid-Circular-A-Semi-Bold",
    marginLeft: 16.5,
  },
  listContainer: {
    minHeight: 20,
    marginTop: 20,
    backgroundColor: "transparent",
  },
  container: {
    paddingTop: 80,
    padding: 20,
  },
  input: {
    width: "100%",
    borderBottomWidth: 0.3,
    height: 40,
    fontSize: hp(16),
    fontWeight: "500",
    fontFamily: "Euclid-Circular-A",
  },
  mainInput: {
    marginTop: 0,
  },
  img: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
});
