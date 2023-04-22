import { View } from "../../../../theme/Themed";

import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import CommonStyles from "../../../../common/styles/CommonStyles";
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
                due={item.due}
                amount={""}
              />
            );
          })}
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default VaultActivity;
