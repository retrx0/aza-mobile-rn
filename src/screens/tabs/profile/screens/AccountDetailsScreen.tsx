import { StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

import { CommonScreenProps } from "../../../../common/navigation/types";

import Divider from "../../../../components/divider/Divider";
import { View, Text } from "../../../../theme/Themed";

import { hp } from "../../../../common/util/LayoutUtil";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { useAppSelector } from "../../../../redux";
import { selectUser } from "../../../../redux/slice/userSlice";
import { NAIRA_UNICODE } from "../../../../constants/AppConstants";
import {
  getCurrencyUnicode,
  getDefaultPictureUrl,
} from "../../../../common/util/AppUtil";
import useNavigationHeader from "../../../../hooks/useNavigationHeader";

interface Detail {
  title: string;
  subText: string;
  data: string | number;
}

const AccountDetailsListItem = ({ title, subText, data }: Detail) => {
  return (
    <View style={[CommonStyles.col, { alignSelf: "stretch" }]}>
      <View
        style={[
          CommonStyles.row,
          {
            alignSelf: "stretch",
            justifyContent: "space-between",
            paddingVertical: hp(15),
          },
        ]}
      >
        <View style={[CommonStyles.col]}>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(16),
              fontWeight: "600",
              marginLeft: hp(5),
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              marginTop: 2,
              fontFamily: "Euclid-Circular-A",
              fontSize: hp(12),
              fontWeight: "400",
              marginLeft: hp(5),
            }}
          >
            {subText}
          </Text>
        </View>
        <Text
          style={{
            fontFamily: "Euclid-Circular-A",
            fontSize: hp(14),
            fontWeight: "400",
          }}
        >
          {data}
        </Text>
      </View>
      <Divider />
    </View>
  );
};

const AccountDetailsScreen = ({
  navigation,
}: CommonScreenProps<"AccountDetails">) => {
  const user = useAppSelector(selectUser);

  const currencySymbol = getCurrencyUnicode(user.accountCurency);

  useNavigationHeader(navigation, "Account Details");

  const details = [
    {
      title: "Account status",
      subText: "Unverified or Verified",
      data: user.accountVerified ? "Verified" : "Not Verified",
    },
    {
      title: "Aza-VFD Number",
      subText: "You can receive money transfer/payment \nby sharing.",
      data: user.azaAccountNumber,
    },
    {
      title: "Available Balance",
      subText: "Available balance except for pending \ntransactions",
      data: `${NAIRA_UNICODE} ${user.azaBalance}`,
    },
    {
      title: "Incoming transfer amount limit",
      subText: "Total amount limit that can be received per \nmonth",
      data: `${NAIRA_UNICODE} ${user.transfers.incommingTransferLimit}`,
    },
    {
      title: "Deposit amount limit",
      subText:
        "The amount that can be deposited to your \naccount during this month",
      data: `${NAIRA_UNICODE} ${user.transfers.depositAmountLimit}`,
    },
    {
      title: "Transfer received from different users",
      subText:
        "The number of people who transferred money to \nyour account this month",
      data: user.transfers.totalMonthlyReceivers,
    },
    {
      title: "Number of incoming transfers",
      subText:
        "The number of money transfers received in your \naccount this month",
      data: user.transfers.totalMonthlyIncomingTransfers,
    },
    {
      title: "Incoming transfer amount",
      subText:
        "The amount of incoming money transfers to your \naccount this month",
      data: `${NAIRA_UNICODE} ${user.transfers.totalMonthlyIncomingTransferAmount}`,
    },
  ];

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.col, styles.container]}>
        <View style={[CommonStyles.row, { alignSelf: "stretch" }]}>
          <Image
            style={{ borderRadius: 50, width: 56, height: 56 }}
            source={{
              uri: user.pictureUrl
                ? user.pictureUrl
                : getDefaultPictureUrl({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    scheme: "light",
                  }),
            }}
          />
          <View style={[CommonStyles.col, { marginLeft: 20 }]}>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A-Semi-Bold",
                fontSize: hp(16),
                fontWeight: "500",
              }}
            >
              {user.fullName}
            </Text>
            <Text
              style={{
                marginVertical: 5,
                fontFamily: "Euclid-Circular-A-Medium",
                fontSize: hp(12),
                fontWeight: "500",
              }}
            >
              {user.phoneNumber}
            </Text>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: hp(10),
                fontWeight: "500",
              }}
            >
              {user.emailAddress}
            </Text>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={[
              CommonStyles.col,
              { alignSelf: "stretch", marginTop: hp(20) },
            ]}
          >
            {details.map(({ data, subText, title }, i) => (
              <AccountDetailsListItem
                key={i}
                data={data}
                subText={subText}
                title={title}
              />
            ))}
          </View>
        </ScrollView>
        <TouchableOpacity
          style={{ alignSelf: "center", marginVertical: hp(35) }}
          onPress={() => {
            navigation.navigate("TermsOfUse");
          }}
        >
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Semi-Bold",
              fontSize: hp(16),
              fontWeight: "500",
            }}
          >
            Term of Use
          </Text>
        </TouchableOpacity>
      </View>
    </SpacerWrapper>
  );
};

export default AccountDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    paddingVertical: hp(20),
    paddingHorizontal: hp(20),
  },
});
