import { ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "../../../../theme/Themed";
import { View, Text } from "../../../../theme/Themed";

import { AIrtimeStyles as styles } from "../airtime-screens/styles";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { Header } from "../../../../components/text/header";
import HeadrImage from "../sub-components/HeadrImage";
import MyButton from "../sub-components/MyButton";
import { useRoute } from "@react-navigation/native";
import { CANADA, UK, USA } from "../../../../../assets/images";
import { RootTabScreenProps } from "../../../../../types";
import { hp } from "../../../../common/util/LayoutUtil";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ClockIcon, CloseIcon } from "../../../../../assets/svg";
import ListItem from "./List";
import * as Images from "../../../../../assets/images/index";
import { Card } from "../sub-components/Card";
import { CommonScreenProps } from "../../../../common/navigation/types";
import Divider from "../../../../components/divider/Divider";
import { NAIRA_UNICODE } from "../../../../constants/AppConstants";

const CountryList = [
  {
    title: "US",
    icon: Images.USA,
  },
  {
    title: "UK",
    icon: Images.UK,
  },
  {
    title: "Canada",
    icon: Images.CANADA,
  },
];
export default function GiftCardDetails({
  navigation,
  route,
}: CommonScreenProps<"GiftCardDetails">) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [currentIndex, setCurrent] = useState(0);
  const insets = useSafeAreaInsets();
  const [active, setActive] = useState("false");

  const {
    country,
    productName,
    fixedRecipientDenominations,
    fixedSenderDenominations,
    fixedRecipientToSenderDenominationsMap,
    senderFee,
    global,
  } = route.params;

  return (
    <SafeAreaView style={[CommonStyles.parentContainer, styles2.container]}>
      {global && (
        <Header
          style={styles.header}
          description=""
          descriptionStyle={null}
          headerStyle={{
            fontSize: hp(16),
            fontWeight: "500",
            fontFamily: "Euclid-Circular-A-Medium",

            marginTop: hp(30),
          }}
          heading="Select Region"
        />
      )}

      {/* <ScrollView horizontal style={CommonStyles.imageHeaderContainer}>
        <HeadrImage selected index={0} image={USA} title="USA" />
        <HeadrImage selected index={0} image={UK} title="UK" />
        <HeadrImage selected index={0} image={CANADA} title="CANADA" />
      </ScrollView> */}

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: hp(30),
          marginBottom: hp(35),
        }}
      >
        <Card
          title={country.name}
          icon={country.flagUrl}
          // onPress={() => setActive(item.icon)}
          // isActive={item.icon === active}
        />
      </View>

      <View style={{ paddingHorizontal: hp(20) }}>
        <Text
          style={{
            fontSize: hp(16),
            fontWeight: "500",
            fontFamily: "Euclid-Circular-A-Medium",
          }}
        >
          Select Package
        </Text>
        <Divider />
      </View>
      {fixedSenderDenominations.map((price) => {
        return (
          <ListItem
            onPress={() => {
              navigation.navigate("GiftCardConfirmation", {
                giftCard: { ...route.params, selectedPrice: price },
              });
            }}
            route=""
            index={0}
            title={productName}
            amount={NAIRA_UNICODE + price}
          />
        );
      })}

      {/* <View
        style={[
          CommonStyles.passwordContainer,
          { bottom: insets.top || hp(45) },
        ]}>
        <MyButton
          disabled={false}
          title="Continue"
          onPress={() => {
            navigation.navigate("Common", { screen: "GiftCardConfirmation" });
          }}
        />
      </View> */}
    </SafeAreaView>
  );
}

const styles2 = StyleSheet.create({
  container: {
    marginTop: 70,
  },
  input: {
    marginTop: 0,
    marginBottom: 40,
  },
});
