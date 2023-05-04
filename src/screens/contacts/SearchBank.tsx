import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Placeholder, PlaceholderLine, Fade } from "rn-placeholder";

import { TextInput } from "../../theme/Themed";
import { View, Text } from "../../theme/Themed";

import Divider from "../../components/divider/Divider";

import { CommonScreenProps } from "../../common/navigation/types";
import Colors from "../../constants/Colors";
import { hp } from "../../common/util/LayoutUtil";
// import useColorScheme from "../../../../hooks/useColorScheme";
import CommonStyles from "../../common/styles/CommonStyles";
import { SearchIcon } from "../../../assets/svg";
import SpacerWrapper from "../../common/util/SpacerWrapper";

import { useAppDispatch, useAppSelector } from "../../redux";
import { getSupportedBanks, selectBank } from "../../redux/slice/bankSlice";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import { getAppTheme } from "../../theme";
import useNavigationHeader from "../../hooks/useNavigationHeader";

const SearchBankScreen = ({
  navigation,
  route,
}: CommonScreenProps<"SearchBank">) => {
  const [search, setSearch] = useState("");

  const { screenType } = route.params;
  const selectedTheme = useAppSelector(selectAppTheme);
  const { banks } = useAppSelector(selectBank);
  const appTheme = getAppTheme(selectedTheme);

  const dispatch = useAppDispatch();

  useNavigationHeader(navigation, "Search Bank");

  useEffect(() => {
    if (!banks.loaded) dispatch(getSupportedBanks());
  }, []);

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.col, styles.container]}>
        <View
          style={[
            CommonStyles.row,
            {
              borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",
              borderBottomWidth: 0.7,
              marginBottom: 20,
              marginLeft: hp(5),
            },
          ]}>
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
                  <PlaceholderLine key={i} height={70} />
                ))}
            </Placeholder>
          </ScrollView>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={banks.data.filter(({ bankName }) => {
              return bankName && bankName !== null
                ? bankName.toLowerCase().includes(search.toLowerCase())
                : false;
            })}
            renderItem={({ item: { bankCode, bankName, logoUrl, id } }) => (
              <View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("AddBankAccount", {
                      id: id,
                      bankName,

                      bankCode,
                      logoUrl,
                      screenType,
                    })
                  }
                  style={[
                    CommonStyles.col,
                    {
                      alignSelf: "stretch",
                      alignItems: "center",
                    },
                  ]}>
                  <View
                    style={[
                      CommonStyles.row,
                      { flex: 1, justifyContent: "space-between" },
                    ]}>
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
                  }}>
                  <Divider />
                </View>
              </View>
            )}
          />
        )}
      </View>
    </SpacerWrapper>
  );
};

export default SearchBankScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
});
