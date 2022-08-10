import { SafeAreaView, View } from "../../components/Themed";

const SpacerWrapper: React.FC = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[{ flex: 1 }]}>{children}</View>
    </SafeAreaView>
  );
};

export default SpacerWrapper;
