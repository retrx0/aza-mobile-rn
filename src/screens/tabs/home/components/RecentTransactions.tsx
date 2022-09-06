import { FlatList } from "react-native";
import { SendIcon } from "../../../../../assets/svg";
import { Text, View } from "../../../../components/Themed";
import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";
import RecentTransactionListItem from "./RecentTransactionListItem";

const recentTransactions = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
    name: "Adewale Adeyesufu",
    transferType: "incoming",
    transferTitle: "Incoming Transfer",
    transferMessage: "Chop life my gee ",
    amount: "28,000.00",
    date: "4 July 2022 04:26",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
    name: "Adewale Adeyesufu",
    transferType: "outgoing",
    transferTitle: "Transfer to Bank",
    transferMessage: "",
    amount: "328,000.00",
    date: "4 July 2022 04:26",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
    name: "Adewale Adeyesufu",
    transferType: "incoming",
    transferTitle: "Incoming Transfer",
    transferMessage: "",
    amount: "28,000.00",
    date: "4 July 2022 04:26",
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
    name: "Swift Networks",
    transferType: "outgoing",
    transferTitle: "Internet Payment",
    transferMessage: "",
    amount: "328,000.00",
    date: "4 July 2022 04:26",
  },
  {
    id: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
    name: "Adewale Adeyesufu",
    transferType: "outgoing",
    transferTitle: "Outgoing Transfer",
    transferMessage: "Chop life my gee ",
    amount: "28,000.00",
    date: "4 July 2022 04:26",
  },

  {
    id: 6,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
    name: "Adewale Adeyesufu",
    transferType: "outgoing",
    transferTitle: "Outgoing Transfer",
    transferMessage: "Chop life my gee ",
    amount: "28,000.00",
    date: "4 July 2022 04:26",
  },

  {
    id: 7,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
    name: "Adewale Adeyesufu",
    transferType: "outgoing",
    transferTitle: "Outgoing Transfer",
    transferMessage: "Chop life my gee ",
    amount: "28,000.00",
    date: "4 July 2022 04:26",
  },

  {
    id: 8,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
    name: "Adewale Adeyesufu",
    transferType: "outgoing",
    transferTitle: "Outgoing Transfer",
    transferMessage: "Chop life my gee ",
    amount: "28,000.00",
    date: "4 July 2022 04:26",
  },

  {
    id: 9,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
    name: "Adewale Adeyesufu",
    transferType: "outgoing",
    transferTitle: "Outgoing Transfer",
    transferMessage: "Chop life my gee ",
    amount: "28,000.00",
    date: "4 July 2022 04:26",
  },

  {
    id: 10,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
    name: "Adewale Adeyesufu",
    transferType: "outgoing",
    transferTitle: "Outgoing Transfer",
    transferMessage: "Chop life my gee ",
    amount: "28,000.00",
    date: "4 July 2022 04:26",
  },
];

export default function RecentTransactions() {
  const colorScheme = useColorScheme();

  return (
    <View style={{ display: "flex", marginTop: 50 }}>
      <View
        style={{
          display: "flex",
          marginBottom: 25,
          flexDirection: "row",
          alignItems: "center",
        }}>
        <Text
          lightColor={Colors.light.mainText}
          darkColor={Colors.dark.mainText}
          style={{ marginRight: 3 }}>
          Recent Transactions
        </Text>
        <SendIcon />
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
        renderItem={({ item }) => <RecentTransactionListItem item={item} />}
      />
    </View>
  );
}
