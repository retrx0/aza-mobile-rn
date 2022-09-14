import { TouchableOpacity } from "react-native";
import { RootTabScreenProps } from "../../../../../types";
import { Text, View } from "../../../../components/Themed";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { FlightIcon } from "../../../../../assets/svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { hp } from "../../../../common/util/LayoutUtil";
import { ActivityCard, ActivityList } from "../components/ActivityComponents";

const VaultActivity = ({ navigation }: RootTabScreenProps<"Vault">) => {
  const insets = useSafeAreaInsets();

  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View>
          {ActivityList.map((item, index) => {
            return (
              <ActivityCard
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
          ]}
        />
      </View>
    </SpacerWrapper>
  );
};

export default VaultActivity;
