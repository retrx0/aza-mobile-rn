import { Image, ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Text, View as View } from "../../../../theme/Themed";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { UnderlinedInput } from "../../../../components/input/UnderlinedInput";
import { AIrtimeStyles as styles } from "../airtime-screens/styles";
import { RootTabScreenProps } from "../../../../../types";
import { hp, wp } from "../../../../common/util/LayoutUtil";
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
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import {
  ADIDAS,
  AFRIC,
  AMAZON,
  ASHLUXE,
  BOOKING,
  BURGER,
  CINEMA,
  ColdStone,
  DOMINOS,
  GOOGLEPLAY,
  IKEA,
  ITUNES,
  JUMIA,
  JUMIAFOOD,
  KFC,
  KONGA,
  LACOSTE,
  NETFLIX,
  NEXT,
  PICANTO,
  PIZZAHUT,
  PlayStation,
  PUMA,
  RAZER,
  REPUBLIC,
  SEPHORA,
  SHOPRITE,
  SLOT,
  STEAM,
  VCONNECT,
  XBOX,
  ZARA,
} from "../../../../../assets/images";
import { CommonScreenProps } from "../../../../common/navigation/types";

export default function GiftCardScreen({
  navigation,
}: CommonScreenProps<"GiftCard">) {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useAppDispatch();
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));
  const { giftCards } = useAppSelector(selectPayment);

  return (
    <SpacerWrapper>
      <View>
        <Text
          style={{
            marginTop: hp(25),
            textAlign: "center",
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: hp(16),
            fontWeight: "600",
            marginBottom: hp(30),
            color: "#2A9E17",
          }}
        >
          Coming Soon
        </Text>
        <Text
          style={{
            marginTop: hp(25),
            textAlign: "center",
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: hp(16),
            fontWeight: "500",
          }}
        >
          Choose from hundreds of game brands
        </Text>

        <View
          style={{
            flexDirection: "row",
            marginTop: 42,
            justifyContent: "space-between",
            marginHorizontal: 15,
          }}
        >
          <Image
            source={ITUNES}
            resizeMode="cover"
            style={{
              width: wp(50),
              height: hp(50),
            }}
          />
          <Image
            source={GOOGLEPLAY}
            resizeMode="cover"
            style={{
              width: wp(50),
              height: hp(50),
            }}
          />
          <Image
            source={AMAZON}
            resizeMode="cover"
            style={{
              width: wp(50),
              height: hp(50),
            }}
          />
          <Image
            source={PlayStation}
            resizeMode="cover"
            style={{
              width: wp(50),
              height: hp(50),
              borderRadius: 25,
            }}
          />
          <Image
            source={XBOX}
            resizeMode="cover"
            style={{
              width: wp(50),
              height: hp(50),
            }}
          />
          <Image
            source={RAZER}
            resizeMode="cover"
            style={{
              width: wp(50),
              height: hp(50),
              borderRadius: 25,
            }}
          />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: "space-between",
            width: 450,
          }}
          style={{
            flexDirection: "row",
            marginTop: 50,
          }}
        >
          <Image
            source={ColdStone}
            resizeMode="cover"
            style={{
              width: wp(50),
              height: hp(50),
              borderRadius: 25,
            }}
          />
          <Image
            source={LACOSTE}
            resizeMode="cover"
            style={{
              width: wp(50),
              height: hp(50),
              borderRadius: 25,
            }}
          />
          <Image
            source={ZARA}
            resizeMode="cover"
            style={{
              width: wp(50),
              height: hp(50),
              borderRadius: 25,
            }}
          />
          <Image
            source={PUMA}
            resizeMode="cover"
            style={{
              width: wp(50),
              height: hp(50),
              borderRadius: 25,
            }}
          />
          <Image
            source={IKEA}
            resizeMode="cover"
            style={{
              width: wp(50),
              height: hp(50),
              borderRadius: 25,
            }}
          />
          <Image
            source={STEAM}
            resizeMode="cover"
            style={{
              width: wp(50),
              height: hp(50),
              borderRadius: 25,
            }}
          />
          <Image
            source={NEXT}
            resizeMode="cover"
            style={{
              width: wp(50),
              height: hp(50),
              borderRadius: 25,
            }}
          />
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            marginTop: 42,
            justifyContent: "space-between",
            marginHorizontal: 15,
          }}
        >
          <Image
            source={DOMINOS}
            resizeMode="cover"
            style={{
              width: wp(50),
              height: hp(50),
              borderRadius: 25,
            }}
          />
          <Image
            source={BURGER}
            resizeMode="cover"
            style={{
              width: wp(50),
              height: hp(50),
              borderRadius: 25,
            }}
          />
          <Image
            source={BOOKING}
            resizeMode="cover"
            style={{
              width: wp(50),
              height: hp(50),
              borderRadius: 25,
            }}
          />
          <Image
            source={SHOPRITE}
            resizeMode="cover"
            style={{
              width: wp(50),
              height: hp(50),
              borderRadius: 25,
            }}
          />
          <Image
            source={CINEMA}
            resizeMode="cover"
            style={{
              width: wp(50),
              height: hp(50),
              borderRadius: 25,
            }}
          />
          <Image
            source={REPUBLIC}
            resizeMode="cover"
            style={{
              width: wp(50),
              height: hp(50),
              borderRadius: 25,
            }}
          />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: "space-between",
            width: 450,
          }}
          style={{
            flexDirection: "row",
            marginTop: 50,
          }}
        >
          <Image
            source={AFRIC}
            resizeMode="cover"
            style={{
              width: wp(50),
              height: hp(50),
              borderRadius: 25,
            }}
          />
          <Image
            source={PIZZAHUT}
            resizeMode="cover"
            style={{
              width: wp(50),
              height: hp(50),
              borderRadius: 25,
            }}
          />
          <Image
            source={JUMIA}
            resizeMode="cover"
            style={{
              width: wp(50),
              height: hp(50),
              borderRadius: 25,
            }}
          />
          <Image
            source={KONGA}
            resizeMode="cover"
            style={{
              width: wp(50),
              height: hp(50),
              borderRadius: 25,
            }}
          />
          <Image
            source={SLOT}
            resizeMode="cover"
            style={{
              width: wp(50),
              height: hp(50),
              borderRadius: 25,
            }}
          />
          <Image
            source={ASHLUXE}
            resizeMode="cover"
            style={{
              width: wp(50),
              height: hp(50),
              borderRadius: 25,
            }}
          />
          <Image
            source={VCONNECT}
            resizeMode="cover"
            style={{
              width: wp(50),
              height: hp(50),
              borderRadius: 25,
            }}
          />
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            marginTop: 42,
            justifyContent: "space-between",
            marginHorizontal: 15,
          }}
        >
          <Image
            source={ADIDAS}
            resizeMode="cover"
            style={{
              width: wp(50),
              height: hp(50),
              borderRadius: 25,
            }}
          />
          <Image
            source={PICANTO}
            resizeMode="cover"
            style={{
              width: wp(50),
              height: hp(50),
              borderRadius: 25,
            }}
          />
          <Image
            source={SEPHORA}
            resizeMode="cover"
            style={{
              width: wp(50),
              height: hp(50),
              borderRadius: 25,
            }}
          />
          <Image
            source={KFC}
            resizeMode="cover"
            style={{
              width: wp(50),
              height: hp(50),
              borderRadius: 25,
            }}
          />
          <Image
            source={JUMIAFOOD}
            resizeMode="cover"
            style={{
              width: wp(50),
              height: hp(50),
              borderRadius: 25,
            }}
          />
          <Image
            source={NETFLIX}
            resizeMode="cover"
            style={{
              width: wp(50),
              height: hp(50),
              borderRadius: 25,
            }}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
}

// const GiftCard = ({
//   index,
//   giftCard,
//   onPress,
// }: {
//   index: number;
//   giftCard: IGiftCard;
//   onPress: () => void;
// }) => {
//   return (
//     <CommonPaymentCard
//       index={index}
//       itemPictureUrl={giftCard.logoUrls[0]}
//       itemTitle={giftCard.brand.brandName}
//       onPress={onPress}
//     />
//   );
// };
// <View style={[CommonStyles.parentContainer, styles2.container]}>
//   <UnderlinedInput
//     style={styles2.mainInput}
//     icon={null}
//     inputStyle={[
//       styles2.input,
//       {
//         borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",
//       },
//       ,
//     ]}
//     labelStyle={styles.label}
//     label=""
//     placeholder="Search for gift card"
//     onChangeText={(text: any) => setSearchTerm(text)}
//   />
//   <ScrollView showsVerticalScrollIndicator={false}>
//     {giftCards.loading ? (
//       <PaymentCardSkeleton />
//     ) : (
//       giftCards.data
//         .filter((gc) =>
//           gc.brand.brandName
//             .toLowerCase()
//             .includes(searchTerm.toLowerCase())
//         )
//         .map((item, index) => {
//           return (
//             <GiftCard
//               key={index}
//               index={index}
//               giftCard={item}
//               onPress={() => handleAction(item)}
//             />
//           );
//         })
//     )}
//   </ScrollView>
// </View>

// const styles2 = StyleSheet.create({
//   container: {
//     paddingTop: 80,
//     padding: 20,
//   },
//   input: {
//     width: "100%",
//     borderBottomWidth: 0.3,
//     height: 40,
//     fontSize: hp(16),
//     fontWeight: "500",
//     fontFamily: "Euclid-Circular-A",
//   },
//   mainInput: {
//     marginTop: 0,
//   },
//   img: {
//     width: 45,
//     height: 45,
//     borderRadius: 50,
//   },
// });

// const handleAction = (item: IGiftCard) => {
//   navigation.navigate("Common", {
//     screen: "GiftCardDetails",
//     params: item,
//   });
// };

// useEffect(() => {
//   if (!giftCards.loaded) dispatch(getGiftCards());
// }, []);
