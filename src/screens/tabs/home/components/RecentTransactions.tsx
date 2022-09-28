import { FlatList, TouchableOpacity } from "react-native";

import { Text, View } from "../../../../components/Themed";
import TransactionListItem from "../../../../components/ListItem/TransactionListItem";

import Colors from "../../../../constants/Colors";
import { RootTabScreenProps } from "../../../../../types";
import useColorScheme from "../../../../hooks/useColorScheme";
import { SendIcon } from "../../../../../assets/svg";

const recentTransactions = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
    name: "Adewale Adeyesufu",
    transactionType: "incoming",
    transactionTitle: "Incoming Transfer",
    transactionMessage: "Chop life my gee ",
    amount: "28,000.00",
    date: "4 July 2022 04:26",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
    name: "Adewale Adeyesufu",
    transactionType: "outgoing",
    transactionTitle: "Transfer to Bank",
    transactionMessage: "",
    amount: "328,000.00",
    date: "4 July 2022 04:26",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
    name: "Adewale Adeyesufu",
    transactionType: "incoming",
    transactionTitle: "Incoming Transfer",
    transactionMessage: "",
    amount: "28,000.00",
    date: "4 July 2022 04:26",
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
    name: "Swift Networks",
    transactionType: "outgoing",
    transactionTitle: "Internet Payment",
    transactionMessage: "",
    amount: "328,000.00",
    date: "4 July 2022 04:26",
  },
  {
    id: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
    name: "Adewale Adeyesufu",
    transactionType: "outgoing",
    transactionTitle: "Outgoing Transfer",
    transactionMessage: "Chop life my gee ",
    amount: "28,000.00",
    date: "4 July 2022 04:26",
  },

  {
    id: 6,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
    name: "Adewale Adeyesufu",
    transactionType: "outgoing",
    transactionTitle: "Outgoing Transfer",
    transactionMessage: "Chop life my gee ",
    amount: "28,000.00",
    date: "4 July 2022 04:26",
  },

  {
    id: 7,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
    name: "Adewale Adeyesufu",
    transactionType: "outgoing",
    transactionTitle: "Outgoing Transfer",
    transactionMessage: "Chop life my gee ",
    amount: "28,000.00",
    date: "4 July 2022 04:26",
  },

  {
    id: 8,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
    name: "Adewale Adeyesufu",
    transactionType: "outgoing",
    transactionTitle: "Outgoing Transfer",
    transactionMessage: "Chop life my gee ",
    amount: "28,000.00",
    date: "4 July 2022 04:26",
  },

  {
    id: 9,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
    name: "Adewale Adeyesufu",
    transactionType: "outgoing",
    transactionTitle: "Outgoing Transfer",
    transactionMessage: "Chop life my gee ",
    amount: "28,000.00",
    date: "4 July 2022 04:26",
  },

  {
    id: 10,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
    name: "Adewale Adeyesufu",
    transactionType: "outgoing",
    transactionTitle: "Outgoing Transfer",
    transactionMessage: "Chop life my gee ",
    amount: "28,000.00",
    date: "4 July 2022 04:26",
  },
];

export default function RecentTransactions({
  navigation,
}: RootTabScreenProps<"Home">) {
  const colorScheme = useColorScheme();

  return (
    <View style={{ display: "flex", marginTop: 50 }}>
      <View
        style={{
          display: "flex",
          marginBottom: 25,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Common", { screen: "TransactionHistory" })
          }
        >
          <Text
            lightColor={Colors.light.text}
            darkColor={Colors.dark.mainText}
            style={{ marginRight: 3, fontFamily: "Euclid-Circular-A-Medium" }}
          >
            Recent Transactions
          </Text>
        </TouchableOpacity>
        <SendIcon color={Colors[colorScheme].secondaryText} />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        data={recentTransactions}
        contentContainerStyle={{ paddingBottom: 250 }}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{
                height: 25,
              }}
            />
          );
        }}
        renderItem={({
          item: {
            amount,
            date,
            image,
            name,
            transactionMessage,
            transactionTitle,
            transactionType,
          },
        }) => (
          <TransactionListItem
            amount={amount}
            date={date}
            image={image}
            name={name}
            transactionMessage={transactionMessage}
            transactionTitle={transactionTitle}
            transactionType={transactionType}
          />
        )}
      />
    </View>
  );
}
