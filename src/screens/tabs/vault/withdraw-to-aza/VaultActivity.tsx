import { TouchableOpacity } from "react-native";
import { Text, View } from "../../../../components/Themed";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { FlightIcon } from "../../../../../assets/svg";
import { ActivityCard, ActivityList } from "../components/ActivityComponents";

const VaultActivity = () => {
  return (
    <SpacerWrapper>
      <View style={CommonStyles.vaultcontainer}>
        <View>
          {ActivityList.map((item, index) => {
            return (
              <ActivityCard
                key={index}
                send={item.send}
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
      </View>
    </SpacerWrapper>
  );
};

export default VaultActivity;
