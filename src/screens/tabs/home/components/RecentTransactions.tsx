import { FlatList, TouchableOpacity } from "react-native";

import { Text, View } from "../../../../components/Themed";
import TransactionListItem from "../../../../components/ListItem/TransactionListItem";

import Colors from "../../../../constants/Colors";
import { RootTabScreenProps } from "../../../../../types";
import useColorScheme from "../../../../hooks/useColorScheme";
import { SendIcon } from "../../../../../assets/svg";
import { UserData } from "../../../../constants/userData";

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
        data={UserData.recentTransactions}
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
