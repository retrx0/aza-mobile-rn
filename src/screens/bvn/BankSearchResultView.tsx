import {
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { Placeholder, Fade, PlaceholderLine } from "rn-placeholder";
import CommonStyles from "../../common/styles/CommonStyles";
import Divider from "../../components/divider/Divider";
import { IBank, ICommonTypedListResult } from "../../types/types.redux";
import { Text, TextInput, View } from "../../theme/Themed";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { SearchIcon } from "../../../assets/svg";
import Colors from "../../constants/Colors";
import { hp } from "../../common/util/LayoutUtil";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux";
import { getAppTheme } from "../../theme";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import { getSupportedBanks, selectBank } from "../../redux/slice/bankSlice";
import ListItemSkeleton from "../../components/skeleton/ListItemSkeleton";

const BankSearchResultView = ({
  onPress,
}: {
  onPress: (item: IBank) => void;
}) => {
  const [searchTerm, setSearch] = useState("");
  const selectedTheme = useAppSelector(selectAppTheme);
  const { banks } = useAppSelector(selectBank);
  const appTheme = getAppTheme(selectedTheme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!banks.loaded) dispatch(getSupportedBanks());
  }, []);
  return (
    <SpacerWrapper>
      <View
        style={[
          CommonStyles.row,
          {
            borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",
            borderBottomWidth: 0.7,
            marginBottom: 20,
            marginLeft: hp(5),
          },
        ]}
      >
        <SearchIcon color={Colors[appTheme].secondaryText} size={16} />
        <TextInput
          style={{
            flex: 1,
            padding: 10,
            backgroundColor: "transparent",
          }}
          placeholder="Search for bank"
          onChangeText={(e) => setSearch(e)}
        />
      </View>
      {banks.loading ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Placeholder Animation={Fade}>
            {Array(10)
              .fill(0)
              .map((_, i) => (
                <ListItemSkeleton key={i} placeHoldersWidth={[70]} />
              ))}
          </Placeholder>
        </ScrollView>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={banks.data.filter(({ bankName }) => {
            return bankName && bankName !== null
              ? bankName.toLowerCase().includes(searchTerm.toLowerCase())
              : false;
          })}
          renderItem={({ item: { bankCode, bankName, logoUrl, id } }) => (
            <View>
              <TouchableOpacity
                onPress={() => onPress({ bankCode, bankName, logoUrl, id })}
                style={[
                  CommonStyles.col,
                  {
                    alignSelf: "stretch",
                    alignItems: "center",
                  },
                ]}
              >
                <View
                  style={[
                    CommonStyles.row,
                    { flex: 1, justifyContent: "space-between" },
                  ]}
                >
                  {logoUrl !== "" && logoUrl && (
                    <Image
                      source={{ uri: logoUrl }}
                      style={{ width: 30, height: 30, resizeMode: "contain" }}
                    />
                  )}
                  <Text style={{ marginHorizontal: 10, fontSize: 18 }}>
                    {"" + bankName}
                  </Text>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  marginVertical: 25,
                  width: "100%",
                }}
              >
                <Divider />
              </View>
            </View>
          )}
        />
      )}
    </SpacerWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
});

export default BankSearchResultView;
