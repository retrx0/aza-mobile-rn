import { TouchableOpacity, Image } from "react-native";
import { Text, View } from "../../../../components/Themed";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { ActivityCard, ActivityList } from "../components/ActivityComponents";
import { hp } from "../../../../common/util/LayoutUtil";
import useColorScheme from "../../../../hooks/useColorScheme";

const VaultActivity = () => {
  const colorScheme = useColorScheme();

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
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default VaultActivity;
