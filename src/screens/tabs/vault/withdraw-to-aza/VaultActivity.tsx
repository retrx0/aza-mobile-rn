import { Image, TouchableOpacity } from "react-native";
import { RootTabScreenProps } from "../../../../../types";
import Button from "../../../../components/buttons/Button";
import { Text, View } from "../../../../components/Themed";
import { Header } from "../../../../components/text/header";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import CommonStyles from "../../../../common/styles/CommonStyles";
import {
  ArrowDownIcon,
  FlightIcon,
  ReceivedIcon,
  SendIcon,
  WithdrawIcon,
} from "../../../../../assets/svg";
import BackButton from "../../../../components/buttons/BackButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { hp, wp } from "../../../../common/util/LayoutUtil";
import { ActiivityCard, ActiivityList } from "../components/ActivityComponents";
import Colors from "../../../../constants/Colors";

const VaultActivity = ({ navigation }: RootTabScreenProps<"Vault">) => {
  const insets = useSafeAreaInsets();
  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View>
          {ActiivityList.map((item, index) => {
            return (
              <ActiivityCard
                key={index}
                send={item.send}
                onPress={() => {}}
                status={item.status}
                price={item.price}
                due={item.due}
              />
            );
          })}
          <View style={CommonStyles.flightcontainer}>
            <TouchableOpacity style={CommonStyles.flightIconContainer}>
              <FlightIcon />
            </TouchableOpacity>
            <Text style={CommonStyles.flightText}>
              Flight Ticket vault created
            </Text>
          </View>
        </View>
        <View style={CommonStyles.line} />
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.bottom || hp(45) },
          ]}>
          <Button
            title='New Vault'
            onPressButton={() =>
              navigation.navigate("Common", { screen: "VaultToAza" })
            }
            style={[CommonStyles.button, { bottom: hp(10) }]}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default VaultActivity;
