import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet } from "react-native";
import { View, Text } from "../../../../theme/Themed";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { UnderlinedInput } from "../../../../components/input/UnderlinedInput";
import { AIrtimeStyles as styles } from "../airtime-screens/styles";
import { RootTabScreenProps } from "../../../../../types";
import { hp } from "../../../../common/util/LayoutUtil";
import { useAppDispatch, useAppSelector } from "../../../../redux";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../../theme";
import {
  getCharities,
  selectPayment,
} from "../../../../redux/slice/paymentSlice";
import { ICharity } from "../../../../redux/types";
import CharityCard from "./CharityCard";
import Colors from "../../../../constants/Colors";
import PaymentCardSkeleton from "../../../skeletons/PaymentCardSkeleton";
export default function CharityIndexScreen({
  navigation,
}: RootTabScreenProps<"Payments">) {
  const dispatch = useAppDispatch();
  const { charities } = useAppSelector(selectPayment);
  const [searchTerm, setSearchTerm] = useState("");
  const selectedTheme = useAppSelector(selectAppTheme);
  const appTheme = getAppTheme(selectedTheme);

  const handleAction = (item: ICharity) => {
    navigation.navigate("Common", {
      screen: "CharityDetailsScreen",
      params: { ...item, tabKey: "" },
    });
  };

  useEffect(() => {
    if (!charities.loaded) dispatch(getCharities());
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
        placeholder="Search for charitable organizations"
        onChangeText={(text: any) => setSearchTerm(text)}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {charities.loading ? (
          <PaymentCardSkeleton />
        ) : (
          charities.data
            .filter((item) =>
              item.charityName.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((item, index) => {
              return (
                <CharityCard
                  key={index}
                  index={index}
                  charity={item}
                  onPress={() => handleAction(item)}
                />
              );
            })
        )}
      </ScrollView>
    </View>
  );
}

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
  },
});
