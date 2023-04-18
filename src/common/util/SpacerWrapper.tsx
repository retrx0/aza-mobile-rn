import { View as View } from "../../theme/Themed";
import CommonStyles from "../styles/CommonStyles";
import NotchResponsive from "./NotchResponsiveness";

const SpacerWrapper = ({ children }) => {
  return (
    <View style={[CommonStyles.wrapperContainer, { flex: 1 }]}>
      <NotchResponsive />
      <View style={[CommonStyles.wrapperContainer]}>{children}</View>
    </View>
  );
};

export default SpacerWrapper;
