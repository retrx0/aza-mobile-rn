import { FlatList, TouchableOpacity } from "react-native";

import TransactionListItem from "../../../../components/ListItem/TransactionListItem";
import Colors from "../../../../constants/Colors";
import { RootTabScreenProps } from "../../../../../types";
import useColorScheme from "../../../../hooks/useColorScheme";
import { SendIcon } from "../../../../../assets/svg";
import { hp } from "../../../../common/util/LayoutUtil";
import { useAppSelector } from "../../../../redux";
import { selectUser } from "../../../../redux/slice/userSlice";
import { View2 as View, Text2 as Text } from "../../../../theme/Themed";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../../theme";

export default function RecentTransactions({
  navigation,
}: RootTabScreenProps<"Home">) {
  const user = useAppSelector(selectUser);
  const theme = useAppSelector(selectAppTheme);
  const appTheme = getAppTheme(theme);

  return (
    <View style={{ display: "flex", marginTop: hp(28) }}>
      <View
        style={{
          display: "flex",
          marginBottom: hp(20),
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
            style={{
              marginRight: hp(3),
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(17),
            }}
          >
            Recent Transactions
          </Text>
        </TouchableOpacity>
        <SendIcon color={Colors[appTheme].secondaryText} />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        data={user.recentTransactions.data}
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
