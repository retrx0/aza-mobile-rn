import CommonStyles from "../../common/styles/CommonStyles";
import Colors from "../../constants/Colors";
import { View } from "../../theme/components/View";

export const Separator = () => {
  return (
    <View
      lightColor={Colors.light.separator}
      darkColor={Colors.dark.separator}
      style={[CommonStyles.separator]}
    />
  );
};
