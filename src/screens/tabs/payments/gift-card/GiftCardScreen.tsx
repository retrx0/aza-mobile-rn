import { ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { View as View } from "../../../../theme/Themed";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { UnderlinedInput } from "../../../../components/input/UnderlinedInput";
import { AIrtimeStyles as styles } from "../airtime-screens/styles";
import { RootTabScreenProps } from "../../../../../types";
import { hp } from "../../../../common/util/LayoutUtil";
import { useAppDispatch, useAppSelector } from "../../../../redux";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../../theme";
import {
  getGiftCards,
  selectPayment,
} from "../../../../redux/slice/paymentSlice";
import { IGiftCard } from "../../../../redux/types";
import Colors from "../../../../constants/Colors";
import PaymentCardSkeleton from "../../../skeletons/PaymentCardSkeleton";
import CommonPaymentCard from "../../common/CommonPaymentCard";

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
          {
            borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",
          },
          ,
        ]}
        labelStyle={styles.label}
        label=""
        placeholder="Search for gift card"
        onChangeText={(text: any) => setSearchTerm(text)}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {giftCards.loading ? (
          <PaymentCardSkeleton />
        ) : (
          giftCards.data
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
            })
        )}
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
  return (
    <CommonPaymentCard
      index={index}
      itemPictureUrl={giftCard.logoUrls[0]}
      itemTitle={giftCard.productName}
      onPress={onPress}
    />
  );
};

const styles2 = StyleSheet.create({
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
