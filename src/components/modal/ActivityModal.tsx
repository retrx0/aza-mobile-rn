import { StyleSheet, Modal, ActivityIndicator } from "react-native";
import { AZALargeLightningLogo } from "../../../assets/svg";
import Colors from "../../constants/Colors";
import { useAppSelector } from "../../redux";
import { selectAppTheme } from "../../redux/slice/themeSlice";
import { getAppTheme } from "../../theme";
import { View2 as View } from "../../theme/Themed";

interface IProps {
  loading: boolean;
}

const ActivityModal = ({ loading }: IProps) => {
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));

  return (
    <Modal transparent={true} animationType={"none"} visible={loading}>
      <View style={styles.modalBackground}>
        <View style={[styles.activityIndicatorWrapper]}>
          <AZALargeLightningLogo color={Colors[appTheme].mainText} />
          <ActivityIndicator animating={loading} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#00000040",
  },
  activityIndicatorWrapper: {
    height: 80,
    width: 80,
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default ActivityModal;
