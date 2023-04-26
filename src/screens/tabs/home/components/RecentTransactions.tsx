import { FlatList, TouchableOpacity } from "react-native";

import Colors from "../../../../constants/Colors";
import { RootTabScreenProps } from "../../../../types/types.navigation";
import { SendIcon } from "../../../../../assets/svg";
import { hp } from "../../../../common/util/LayoutUtil";
import { useAppSelector } from "../../../../redux";
import { selectUser } from "../../../../redux/slice/userSlice";
import { View, Text, ScrollView } from "../../../../theme/Themed";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../../theme";
import SegmentedTransactionView from "../../profile/screens/SegmentedTransactionView";
import ListItemSkeleton from "../../../../components/skeleton/ListItemSkeleton";

export default function RecentTransactions({
  navigation,
  route,
}: RootTabScreenProps<"Home">) {
  const { recentTransactions } = useAppSelector(selectUser);
  const theme = useAppSelector(selectAppTheme);
  const appTheme = getAppTheme(theme);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ display: "flex", marginTop: hp(20) }}>
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
              style={{
                marginRight: hp(3),
                fontFamily: "Euclid-Circular-A-Medium",
                fontSize: hp(18),
              }}
            >
              Recent Transactions
            </Text>
          </TouchableOpacity>
          <SendIcon color={Colors[appTheme].secondaryText} />
        </View>
        {recentTransactions.loading ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingTop: 20, flex: 1 }}>
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <ListItemSkeleton key={i} placeHoldersWidth={[70]} />
                ))}
            </View>
          </ScrollView>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, i) => i.toString()}
            data={recentTransactions.data}
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
            renderItem={({ item: { key, transactions }, index }) => (
              <SegmentedTransactionView
                dateOfTransactions={key}
                transactions={transactions}
                navigation={{ navigation, route }}
              />
            )}
          />
        )}
      </View>
    </View>
  );
}
