import Button from "../../../../components/buttons/Button";
import { Text, View } from "../../../../components/Themed";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { LockIcon, NairaIcon } from "../../../../../assets/svg";
import { hp } from "../../../../common/util/LayoutUtil";
import { VaultStyles } from "../styles";
import { Input } from "../../../../components/input/input";
import { PercentageCard, PercentageList } from "../components/VaultCard";
import useColorScheme from "../../../../hooks/useColorScheme";
import Colors from "../../../../constants/Colors";

const UnMatureVault = ({ setMatured }: { setMatured: () => void }) => {
  const colorScheme = useColorScheme();

  return (
    <SpacerWrapper>
      <View style={VaultStyles.container}>
        <View style={CommonStyles.flightContainer}>
          <Text style={CommonStyles.ticket}>Flight Ticket Vault</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <NairaIcon color={"black"} size={0} />
            <Text style={CommonStyles.flightAmount}>2,000</Text>
          </View>
        </View>

        <View>
          <View style={CommonStyles.lockContainer}>
            <LockIcon />
            <View style={CommonStyles.timeContainer}>
              <Text style={CommonStyles.time}>06</Text>
              <Text style={CommonStyles.seconds}>Days : </Text>
              <Text style={CommonStyles.time}>14</Text>
              <Text style={CommonStyles.seconds}>Hours : </Text>
              <Text style={CommonStyles.time}>48</Text>
              <Text style={CommonStyles.seconds}>Mins</Text>
            </View>
          </View>
        </View>

        <View style={CommonStyles.vaultInputcontainer}>
          <Input
            label={"Top up Vault"}
            labelStyle={undefined}
            placeholder="Add more funds from your Aza balance"
            style={CommonStyles.vaultInput}
            inputStyle={CommonStyles.inputStyle}
            icon={undefined}
            containerStyle={{ marginBottom: 2 }}
          />
        </View>
        <View style={CommonStyles.percentageContainer}>
          {PercentageList.map((item, index) => {
            return <PercentageCard key={index} percentage={item.percentage} onPress={() => {}} />;
          })}
        </View>

        <View style={[CommonStyles.passwordContainer, { bottom: hp(60) }]}>
          <Button
            title="Continue"
            onPressButton={() => setMatured()}
            styleText={{
              color: Colors[colorScheme].buttonText,
            }}
            style={[
              {
                backgroundColor: Colors[colorScheme].button,
              },
              CommonStyles.button,
            ]}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default UnMatureVault;
