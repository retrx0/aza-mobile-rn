import { ScrollView } from "react-native";
import { View } from "../../components/Themed";
import CommonStyles from "../styles/CommonStyles";
import NotchResponsive from "./NotchResponsiveness";

const SpacerWrapper: React.FC = ({ children }) => {
  return (
    <View style={[CommonStyles.wrapperContainer]}>
      <NotchResponsive />
      <View style={[CommonStyles.wrapperContainer]}>{children}</View>
    </View>
  );
};

export default SpacerWrapper;
