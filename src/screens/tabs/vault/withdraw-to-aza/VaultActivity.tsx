import { TouchableOpacity, Image } from "react-native";
import { Text, View } from "../../../../components/Themed";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { ActivityCard, ActivityList } from "../components/ActivityComponents";
import { hp } from "../../../../common/util/LayoutUtil";

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
                due={item.due}
                amount={item.amount}
              />
            );
          })}
          <TouchableOpacity style={CommonStyles.flightcontainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{
                  width: 36,
                  height: 36,
                }}
                source={require("../../../../../assets/images/icons/CoverImage.png")}
              />
              <Text style={CommonStyles.flightText}>
                Flight Ticket vault created
              </Text>
            </View>
            <Text
              style={{
                fontSize: hp(10),
                fontWeight: "600",
                fontFamily: "Euclid-Circular-A",
                marginLeft: hp(103),
              }}>
              4 July 2022 04:26
            </Text>
          </TouchableOpacity>
        </View>
        <View style={CommonStyles.line} />
      </View>
    </SpacerWrapper>
  );
};

export default VaultActivity;
