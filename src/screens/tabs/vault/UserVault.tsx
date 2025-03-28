import { FlatList, Image, TouchableOpacity, Pressable } from "react-native";
import { View, Text } from "../../../theme/Themed";
import SpacerWrapper from "../../../common/util/SpacerWrapper";
import CommonStyles from "../../../common/styles/CommonStyles";
import { hp, wp } from "../../../common/util/LayoutUtil";
import useColorScheme from "../../../hooks/useColorScheme";
import Colors from "../../../constants/Colors";
import React, { useState } from "react";
import {
  AddIcon,
  NairaIcon,
  OpenIcon,
  SendIcon,
  AZALightningLogo,
  MenuIcon,
  QRCodeDarkModeIcon,
  QRCodeIcon,
  DepositIcon,
} from "../../../../assets/svg";
import { useNavigation } from "@react-navigation/core";
import { useAppSelector } from "../../../redux";
import { selectUser } from "../../../redux/slice/userSlice";
import UserArchieved from "./components/UserArchieved";
import TransactionListItem from "../../../components/ListItem/TransactionListItem";
import {
  RootStackScreenProps,
  RootTabScreenProps,
} from "../../../types/types.navigation";
import { useBottomSheetType } from "../home/hooks/useBottomSheetType";
import CustomBottomSheet from "../../../components/bottomsheet/CustomBottomSheet";
import { VaultLogo } from "../../../../assets/images";
import { getAppTheme } from "../../../theme";
import { selectAppTheme } from "../../../redux/slice/themeSlice";
import { CommonScreenProps } from "../../../common/navigation/types";

const UserVault = (
  _navigation: CommonScreenProps<"UserVault"> & RootStackScreenProps<"Root">
) => {
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));
  const navigation = useNavigation();
  const [secure, setSecure] = useState(true);
  const user = useAppSelector(selectUser);
  const [isMenuModalVisible, setMenuModalVisible] = React.useState(false);
  const { menuBottomSheets } = useBottomSheetType("menu", _navigation);

  const toggleMenuModal = () => {
    setMenuModalVisible(!isMenuModalVisible);
  };

  return (
    <>
      <SpacerWrapper>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",

            marginTop: hp(20),
            marginBottom: hp(10),
          }}
        >
          <Pressable
            onPress={toggleMenuModal}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
              marginLeft: 15,
            })}
          >
            <MenuIcon size={25} color={Colors[appTheme].text} />
          </Pressable>
          <AZALightningLogo
            size={25}
            color={
              appTheme === "dark" ? Colors.dark.mainText : Colors.light.text
            }
          />
          <Pressable
            onPress={() => navigation.navigate("QRTransactions")}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
          >
            {appTheme === "dark" ? (
              <QRCodeDarkModeIcon style={{ marginRight: 15 }} />
            ) : (
              <QRCodeIcon
                size={24}
                color={Colors.light.text}
                style={{ marginRight: 15 }}
              />
            )}
          </Pressable>
        </View>
        <View style={[CommonStyles.col, { alignItems: "center" }]}>
          <TouchableOpacity
            onPress={() => navigation.getParent()?.navigate("Home")}
          >
            <View
              lightColor="#eaeaec"
              darkColor="#1D1D20"
              style={[
                CommonStyles.row,
                {
                  paddingHorizontal: 34,
                  paddingVertical: hp(7),
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderRadius: hp(50),
                },
              ]}
            >
              <Image style={{ width: 11, height: 11 }} source={VaultLogo} />
              <Text
                lightColor={"#000000"}
                darkColor={"#CCCCCC"}
                style={{
                  fontSize: hp(12),
                  fontWeight: "400",
                  fontFamily: "Euclid-Circular-A",
                  marginRight: hp(9),
                  marginLeft: hp(9),
                }}
              >
                Vault
              </Text>
              <OpenIcon color={Colors[appTheme].secondaryText} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[CommonStyles.row]}
            onPress={() => setSecure(!secure)}
          >
            <>
              {secure ? (
                <>
                  <NairaIcon
                    size={25}
                    color={
                      appTheme === "dark"
                        ? Colors.dark.mainText
                        : Colors.light.text
                    }
                    style={{ marginRight: 2 }}
                  />
                  <Text
                    lightColor={Colors.light.text}
                    darkColor={Colors.dark.mainText}
                    style={{
                      fontFamily: "Euclid-Circular-A-Semi-Bold",
                      fontSize: 26,
                      marginVertical: hp(10),
                    }}
                  >
                    {user.azaBalance}
                  </Text>
                </>
              ) : (
                <Text
                  lightColor={Colors.light.text}
                  darkColor={Colors.dark.mainText}
                  style={{
                    fontFamily: "Euclid-Circular-A-Semi-Bold",
                    fontSize: hp(24),
                    marginVertical: hp(10),
                  }}
                >
                  **********
                </Text>
              )}
            </>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Common", {
                screen: "NewVault",
              })
            }
          >
            <DepositIcon color="#2AD168" size={40} />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A",
              fontSize: hp(14),
              fontWeight: "400",
              marginBottom: hp(40),
              marginTop: hp(10),
            }}
          >
            New Vault
          </Text>
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Common", {
                screen: "AddVault",
              })
            }
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Euclid-Circular-A-Semi-Bold",
                fontSize: hp(16),
                fontWeight: "500",
                marginRight: hp(3),
              }}
            >
              Vaults
            </Text>
            <SendIcon color={Colors[appTheme].secondaryText} />
          </TouchableOpacity>
          <View
            style={[
              {
                borderWidth: 0.5,
                width: "100%",
                alignSelf: "center",
                marginTop: hp(20),
              },
              {
                borderColor: appTheme === "dark" ? "#262626" : "#EAEAEC",
              },
            ]}
          />
          <UserArchieved />
          <View
            style={{
              marginBottom: hp(20),
              flexDirection: "row",
              alignItems: "center",
              marginTop: hp(40),
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
        </View>

        {/* <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: hp(22),
          justifyContent: "space-between",
          paddingHorizontal: hp(20),
        }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{ width: 36, height: 36 }}
            source={require("../../../../assets/images/icons/CoverImage.png")}
          />
          <View style={{ marginLeft: hp(15) }}>
            <Text>Flight Ticket</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  color: "#2A9E17",
                  fontSize: hp(14),
                  fontWeight: "600",
                  fontFamily: "Euclid-Circular-A-Bold",
                  marginTop: hp(2),
                }}>
                {"\u20A62,000"}
              </Text>
              <Text
                style={{
                  fontSize: hp(14),
                  fontWeight: "600",
                  lineHeight: hp(17.75),
                  fontFamily: "Euclid-Circular-A-Bold",
                }}>
                {"/\u20A6280,000"}
              </Text>
            </View>
          </View>
        </View>
        <CloseIcon />
      </TouchableOpacity> */}
        {/* <View
        style={{
          borderWidth: 0.5,
          borderColor: "#EAEAEC",
          width: wp(380),
          alignSelf: "center",
          marginTop: hp(20),
        }}
      /> */}

        <FlatList
          showsVerticalScrollIndicator={false}
          data={user.vault.recentTransaction}
          contentContainerStyle={{ paddingBottom: 250, paddingHorizontal: 15 }}
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
              transactionTitle,
              transactionType,
            },
          }) => (
            <TransactionListItem
              amount={amount}
              date={date}
              image={image}
              name={name}
              transactionTitle={transactionTitle}
              transactionType={transactionType}
            />
          )}
        />
      </SpacerWrapper>
      <CustomBottomSheet
        isModalVisible={isMenuModalVisible}
        toggleModal={toggleMenuModal}
        listItems={menuBottomSheets}
      />
    </>
  );
};

export default UserVault;
