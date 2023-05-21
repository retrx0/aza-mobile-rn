import { ScrollView, TouchableOpacity } from "react-native";

import { PaymentStyles as styles } from "./styles";

import { SafeAreaView, View, Text } from "../../../theme/Themed";
import { Header } from "../../../components/text/header";
import HeadrImage from "./sub-components/HeadrImage";
import ListItem from "./sub-components/ListItem";

import {
  CableTvIcon,
  DataIcon,
  DropIcon,
  ElectricIcon,
  GameIcon,
  GiftIcon,
  LoveIcon,
  PieIcon,
  WifiIcon,
} from "../../../../assets/svg";

import { RootTabScreenProps } from "../../../types/types.navigation";
import { hp } from "../../../common/util/LayoutUtil";

import { useAppSelector } from "../../../redux";
import { selectUser } from "../../../redux/slice/userSlice";

export default function Payments({
  navigation,
}: RootTabScreenProps<"Payments">) {
  const user = useAppSelector(selectUser);

  const listItems = [
    {
      title: "Airtime & Data",
      icon: <DataIcon size={35} />,
      onPress: () => {
        /*navigation.navigate("Common", { screen: "AirtimeData" }) }, */
      },
    },
    {
      title: "Internet",
      icon: <WifiIcon size={35} />,
      onPress: () => navigation.navigate("Common", { screen: "InternetPlans" }),
    },
    {
      title: "Cable TV",
      icon: <CableTvIcon size={35} />,
      onPress: () => navigation.navigate("Common", { screen: "CableTV" }),
    },
    {
      title: "Electricity",
      icon: <ElectricIcon size={35} />,
      onPress: () => {
        /* navigation.navigate("Common", { screen: "Electricity" })*/
      },
    },
    {
      title: "Water",
      icon: <DropIcon size={35} />,
      onPress: () => navigation.navigate("Common", { screen: "Water" }),
    },
    {
      title: "Gift Cards",
      icon: <GiftIcon size={35} />,
      onPress: () => navigation.navigate("Common", { screen: "GiftCard" }),
    },
    // {
    //   title: "Charity",
    //   icon: <LoveIcon size={35} />,
    //   onPress: () => {
    //     /*         navigation.navigate("Common", {
    //     screen: "Charity",
    //     params: { recurringTransaction: false },
    //   }),*/
    //   },
    // },
    {
      title: "Game Credits",
      icon: <GameIcon size={35} />,
      onPress: () => navigation.navigate("Common", { screen: "GameScreen" }),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          marginTop: hp(10),
        }}
      >
        <Text style={styles.headerText}>Payments</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Common", { screen: "Pie" });
          }}
          style={styles.icon}
        >
          <PieIcon style={styles.imageIcon} />
        </TouchableOpacity>
      </View>
      <Header
        description=""
        headerStyle={{
          fontFamily: "Euclid-Circular-A-Medium",
          fontSize: hp(16),
          fontWeight: "400",
        }}
        descriptionStyle={null}
        style={styles.subHead}
        heading="Recent Payments"
      />
      {user.payments.data.length > 0 && (
        <View
          style={{
            marginLeft: hp(20),
            marginBottom: hp(10),
            maxHeight: 120,
            flexDirection: "row",
            marginTop: 15,
          }}
        >
          {user.payments.data.map((payment, i) => {
            return (
              <HeadrImage
                key={i}
                selected
                index={i}
                header={payment.status}
                title={payment.vendorName}
                amount={"" + payment.amount}
                image={{ uri: payment.vendorLogo, cache: "default" }}
              />
            );
          })}
        </View>
      )}

      <ScrollView style={styles.itemListContainer}>
        {listItems.map(({ icon, onPress, title }, index) => (
          <ListItem
            key={index}
            index={index}
            onPress={onPress}
            Icon={() => icon}
            title={title}
            route=""
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
