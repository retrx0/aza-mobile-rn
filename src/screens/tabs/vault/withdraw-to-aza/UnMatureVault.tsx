import Button from "../../../../components/buttons/Button";
import { ScrollView } from "../../../../theme/Themed";
import { View, Text } from "../../../../theme/Themed";

import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { CloseIcon, LockIcon, NairaIcon } from "../../../../../assets/svg";
import { hp, wp } from "../../../../common/util/LayoutUtil";
import { VaultStyles } from "../styles";
import { UnderlinedInput } from "../../../../components/input/UnderlinedInput";
import { PercentageCard, PercentageList } from "../components/VaultCard";
import useColorScheme from "../../../../hooks/useColorScheme";
import Colors from "../../../../constants/Colors";
import { Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
import ListItem from "../components/ListItem";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const UnMatureVault = ({ setMatured }: { setMatured: () => void }) => {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <SpacerWrapper>
      <ScrollView style={VaultStyles.container}>
        <View style={CommonStyles.flightContainer}>
          <View style={{ alignSelf: "center" }}>
            <Image
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                marginBottom: hp(10),
              }}
              source={require("../../../../../assets/images/icons/CoverImage.png")}
            />
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  fontSize: hp(24),
                  fontWeight: "600",
                  fontFamily: "Euclid-Circular-A-Bold",
                  marginTop: hp(2),
                }}
              >
                {"\u20A62,000/"}
              </Text>
              <Text
                style={{
                  fontSize: hp(24),
                  fontWeight: "600",
                  fontFamily: "Euclid-Circular-A-Bold",
                  color: Colors[colorScheme].secondaryText,
                }}
              >
                {"\u20A6280,000"}
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={() => setMatured()}>
          <View
            style={[
              CommonStyles.lockContainer,
              { backgroundColor: Colors[colorScheme].disabled },
            ]}
          >
            <LockIcon color={Colors[colorScheme].button} />
            <View
              style={[
                CommonStyles.timeContainer,
                { backgroundColor: Colors[colorScheme].disabled },
              ]}
            >
              <Text style={CommonStyles.time}>06</Text>
              <Text style={CommonStyles.seconds}>Days : </Text>
              <Text style={CommonStyles.time}>14</Text>
              <Text style={CommonStyles.seconds}>Hours : </Text>
              <Text style={CommonStyles.time}>48</Text>
              <Text style={CommonStyles.seconds}>Mins</Text>
            </View>
          </View>
        </TouchableOpacity>
        <Text style={CommonStyles.maturity}>until maturity</Text>
        <View
          style={[CommonStyles.vaultInputcontainer, { paddingHorizontal: 25 }]}
        >
          <UnderlinedInput
            label={"Top up Vault"}
            labelStyle={undefined}
            placeholder="Add more funds from your Aza balance"
            style={CommonStyles.vaultInput}
            inputStyle={[
              CommonStyles.inputStyle,
              { borderColor: colorScheme === "dark" ? "#262626" : "#EAEAEC" },
            ]}
            icon={undefined}
            containerStyle={{ marginBottom: 2 }}
            keyboardType="number-pad"
            returnKeyType="done"
          />
        </View>
        <View style={CommonStyles.percentageContainer}>
          {PercentageList.map((item, index) => {
            return <PercentageCard key={index} percentage={item.percentage} />;
          })}
        </View>
        <Text
          style={{
            fontSize: hp(12),
            fontWeight: "600",
            fontFamily: "Euclid-Circular-A",
            color: Colors[colorScheme].secondaryText,
            marginLeft: hp(15),
            marginTop: hp(5),
          }}
        >
          * This saves the selected percentage from your aza f balance
        </Text>
        <View
          style={[
            {
              borderWidth: 0.5,
              width: wp(380),
              alignSelf: "center",
              marginTop: hp(17),
              marginBottom: hp(17),
            },
            { borderColor: colorScheme === "dark" ? "#262626" : "#EAEAEC" },
          ]}
        />
        <View style={{ paddingHorizontal: hp(15) }}>
          <ListItem
            index={0}
            onPress={() => {
              navigation.navigate("Common", { screen: "ChangeGoalAmount" });
            }}
            title="Change Goal Amount"
            route=""
            subtitle={"\u20A6280,000"}
            Icon={CloseIcon}
          />
          <ListItem
            index={0}
            onPress={() => {
              navigation.navigate("Common", {
                screen: "VaultRecurringTransfer",
              });
            }}
            title="Recurring Transfer"
            route=""
            subtitle="Reach your vault goal faster with recurring transfers"
            Icon={CloseIcon}
          />
          <ListItem
            index={0}
            onPress={() => {
              navigation.navigate("Common", { screen: "ChangeVaultName" });
            }}
            title="Change Vault Name"
            route=""
            subtitle="Flight Ticket"
            Icon={CloseIcon}
          />
        </View>

        <View style={{ marginTop: hp(77) }}>
          <Button
            title="Continue"
            // onPressButton={() => setMatured()}
            styleText={{
              color: Colors[colorScheme].buttonText,
            }}
            style={[
              {
                backgroundColor: Colors[colorScheme].button,
              },
              CommonStyles.button,
            ]}
            disabled
          />
        </View>
      </ScrollView>
    </SpacerWrapper>
  );
};

export default UnMatureVault;
