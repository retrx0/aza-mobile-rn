import { StyleSheet } from "react-native";
import {
  Placeholder,
  PlaceholderMedia,
  Fade,
  PlaceholderLine,
} from "rn-placeholder";

import { View } from "../../../../theme/Themed";

import Colors from "../../../../constants/Colors";

const ProviderSkeleton = ({ numberOfItems }: { numberOfItems: number }) => {
  return (
    <Placeholder
      Animation={(props) => (
        <Fade {...props} style={{ backgroundColor: Colors.general.skeleton }} />
      )}
      style={{
        alignItems: "center",
      }}
    >
      <View style={styles.container}>
        {Array(numberOfItems)
          .fill("")
          .map((_, i) => (
            <View style={{ alignItems: "center" }} key={i}>
              <PlaceholderMedia style={styles.circle} />
              <PlaceholderLine width={100} height={5} />
            </View>
          ))}
      </View>
    </Placeholder>
  );
};

export default ProviderSkeleton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  circle: {
    borderRadius: 50,
    width: 45,
    height: 45,
    marginBottom: 5,
  },
});
