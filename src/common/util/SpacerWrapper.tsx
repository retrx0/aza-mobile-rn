import { View as View } from "../../theme/Themed";
import CommonStyles from "../styles/CommonStyles";
import NotchResponsive from "./NotchResponsiveness";

const SpacerWrapper = ({ children }) => {
  return (
    <View style={[CommonStyles.wrapperContainer]}>
      <NotchResponsive />
      <View style={[CommonStyles.wrapperContainer]}>{children}</View>
    </View>
  );
};

export default SpacerWrapper;
