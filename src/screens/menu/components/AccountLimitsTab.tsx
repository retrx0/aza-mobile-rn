import { TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { AwardIcon, SmallVerifyIcon, VerifyIcon } from "../../../../assets/svg";
import CommonStyles from "../../../common/styles/CommonStyles";
import { hp } from "../../../common/util/LayoutUtil";
import Colors from "../../../constants/Colors";
import { CommonScreenProps } from "../../../common/navigation/types";
import { NAIRA_UNICODE } from "../../../constants/AppConstants";

import Button from "../../../components/buttons/Button";
import { View, Text } from "../../../theme/Themed";

import { getAppTheme } from "../../../theme";
import { useAppSelector } from "../../../redux";
import { selectAppTheme } from "../../../redux/slice/themeSlice";
import { selectUser } from "../../../redux/slice/userSlice";

const AccountLimitsTab = ({
  navigation,
}: CommonScreenProps<"FeesAndLimits">) => {
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));
  const insets = useSafeAreaInsets();

  const user = useAppSelector(selectUser);
  const { bvnVerified } = user;

  return (
    <>
      <View style={[CommonStyles.vaultcontainer]}>
        <View style={{ paddingHorizontal: hp(20) }}>
          <Text
            style={{
              fontSize: hp(14),
              fontWeight: "500",
              fontFamily: "Euclid-Circular-A-Semi-Bold",
            }}
          >
            My Level:{" "}
            <Text
              style={{
                fontFamily: "Euclid-Circular-A-Medium",
                fontSize: hp(14),
              }}
            >
              Tier {bvnVerified ? "1" : "0"}
            </Text>
          </Text>
          <View
            style={{
              marginTop: 6,
              borderWidth: 1,
              borderColor: bvnVerified
                ? "#2A9E17"
                : Colors[appTheme].secondaryText,
              borderRadius: 50,
              width: 120,
            }}
          />
        </View>
        <View
          style={[
            CommonStyles.row,
            {
              alignSelf: "stretch",
              alignItems: "flex-start",
              marginTop: hp(35),
              paddingHorizontal: hp(20),
            },
          ]}
        >
          <VerifyIcon
            color={
              bvnVerified ? "#2A9E17" : Colors[appTheme].backgroundSecondary
            }
            size={34}
          />
          <View
            style={[
              CommonStyles.col,
              { width: "100%", marginRight: "auto", marginLeft: 25 },
            ]}
          >
            <Text
              style={{
                fontSize: hp(15),
                marginBottom: hp(5),
                fontWeight: "500",
                fontFamily: "Euclid-Circular-A-Semi-Bold",
                color: bvnVerified ? "#2A9E17" : Colors[appTheme].secondaryText,
              }}
            >
              {bvnVerified ? "Verified" : "Not verified"}
            </Text>
            <Text
              style={{
                fontSize: hp(16),
                fontFamily: "Euclid-Circular-A-Medium",
                fontWeight: "600",
              }}
            >
              Tier 1
            </Text>
            <View
              style={{
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  fontSize: hp(16),
                  fontWeight: "400",
                  fontFamily: "Euclid-Circular-A",
                  color: appTheme === "dark" ? "#999999" : "#000000",
                }}
              >
                Daily Transaction Limit:
              </Text>
              <Text
                lightColor={Colors.light.text}
                darkColor={Colors.dark.mainText}
                style={{
                  fontSize: hp(16),
                  fontFamily: "Euclid-Circular-A-Medium",
                  fontWeight: "600",
                  marginTop: hp(5),
                }}
              >
                {NAIRA_UNICODE}
                {"50,000"}
              </Text>
            </View>
            <View
              style={{
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  fontSize: hp(16),
                  fontWeight: "400",
                  fontFamily: "Euclid-Circular-A",
                  color: appTheme === "dark" ? "#999999" : "#000000",
                }}
              >
                Maximum Balance:
              </Text>
              <Text
                lightColor={Colors.light.text}
                darkColor={Colors.dark.mainText}
                style={{
                  fontSize: hp(16),
                  fontFamily: "Euclid-Circular-A-Medium",
                  fontWeight: "600",
                  marginTop: hp(5),
                }}
              >
                {NAIRA_UNICODE}
                {"200,000"}
              </Text>
            </View>
            <View
              style={[
                CommonStyles.row,
                {
                  alignSelf: "flex-start",
                  marginTop: 20,
                },
              ]}
            >
              <TouchableOpacity
                disabled={bvnVerified}
                onPress={() =>
                  navigation.navigate("BvnVerification", {
                    onVerifyNavigateBackTo: "FeesAndLimits",
                  })
                }
              >
                <Text
                  style={{
                    fontSize: hp(16),
                    marginRight: 8,
                    fontWeight: "600",
                    fontFamily: "Euclid-Circular-A-Medium",
                  }}
                >
                  Verify BVN
                </Text>
              </TouchableOpacity>

              {bvnVerified && <SmallVerifyIcon color={"#2A9E17"} />}
            </View>
          </View>
          <AwardIcon
            color={
              bvnVerified ? "#ECCA13" : Colors[appTheme].backgroundSecondary
            }
          />
        </View>
      </View>
      <View
        style={[
          CommonStyles.passwordContainer,
          { bottom: insets.top || hp(45) },
        ]}
      >
        <Button
          title="Upgrade Account"
          disabled={bvnVerified}
          onPressButton={() =>
            navigation.navigate("BvnVerification", {
              onVerifyNavigateBackTo: "FeesAndLimits",
            })
          }
          styleText={{
            color: bvnVerified
              ? Colors[appTheme].buttonText
              : Colors[appTheme].buttonText,
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14,
          }}
        />
      </View>
    </>
  );
};

export default AccountLimitsTab;
