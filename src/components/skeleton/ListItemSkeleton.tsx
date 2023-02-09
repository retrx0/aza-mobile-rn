import { StyleSheet } from "react-native";
import {
  Placeholder,
  PlaceholderMedia,
  Fade,
  PlaceholderLine,
} from "rn-placeholder";

import { View } from "../../theme/Themed";

import CommonStyles from "../../common/styles/CommonStyles";
import Colors from "../../constants/Colors";

const ListItemSkeleton = ({
  placeHoldersWidth,
}: {
  placeHoldersWidth: number[];
}) => {
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
        <View
          style={[
            CommonStyles.row,
            { alignSelf: "stretch", paddingVertical: 15 },
          ]}
        >
          <PlaceholderMedia style={styles.circle} />
          <View style={{ width: "100%" }}>
            {placeHoldersWidth.map((width, i) => (
              <PlaceholderLine key={i} width={width} height={5} />
            ))}
          </View>
        </View>
      </View>
    </Placeholder>
  );
};

export default ListItemSkeleton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  circle: {
    width: 36,
    height: 36,
    borderRadius: 50,
    marginRight: 10,
  },
});
