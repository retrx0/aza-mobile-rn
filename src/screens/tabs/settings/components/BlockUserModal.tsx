import { CommonScreenProps } from "../../../../common/navigation/types";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { hp } from "../../../../common/util/LayoutUtil";
import Button from "../../../../components/buttons/Button";
import ButtonWithUnderline from "../../../../components/buttons/CancelButtonWithUnderline";
import { View, Text } from "../../../../theme/Themed";

import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";
import { getAppTheme } from "../../../../theme";
import { useAppSelector } from "../../../../redux";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { IBeneficiary } from "../../../../redux/types";

interface IProps {
  toggleModal: () => void;
  isModalVisible: boolean;
  userToBlock: IBeneficiary;
}

export default function BlockUserModal({
  toggleModal,
  isModalVisible,
  navigation,
  userToBlock,
}: CommonScreenProps<"BlockNewUser"> & IProps) {
  const handleBlockingUser = () => {
    toggleModal();
    //TODO add blocking api call here

    // if(blocked){
    navigation.navigate("StatusScreen", {
      statusIcon: "Success",
      status: "Successful",
      statusMessage: `The user ${userToBlock.fullName} has been successfully blocked.`,
      navigateTo: "BlockNewUser",
    });
    // }else{
    //   throw error
    // }
  };

  return (
    <View
      style={{
        display: isModalVisible ? "flex" : "none",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.75)",
      }}
    >
      <View
        style={{
          borderRadius: 20,
          paddingBottom: 20,
          paddingTop: 30,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "90%",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          Block User
        </Text>
        <Text
          style={{
            fontSize: 14,
            marginVertical: 15,
            maxWidth: 300,
            textAlign: "center",
          }}
        >
          The user{" "}
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Semi-Bold",
              fontSize: hp(15),
            }}
          >
            {userToBlock.fullName}
          </Text>{" "}
          will be blocked. Do you confirm?
        </Text>
        <Button
          title="Confirm"
          onPressButton={handleBlockingUser}
          styleText={{
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14,
          }}
          style={{
            marginTop: hp(40),
            marginBottom: hp(20),
            width: "90%",
          }}
        />
        <ButtonWithUnderline
          onPressButton={toggleModal}
          style={{ borderBottomColor: Colors.general.red }}
          title="Cancel"
          styleText={CommonStyles.cancelStyle}
        />
      </View>
    </View>
  );
}

export function UnblockModal({
  toggleModal,
  isModalVisible,
  navigation,
  userToBlock,
}: CommonScreenProps<"BlockUsers"> & IProps) {
  const handleUserUnblocking = () => {
    toggleModal();

    //TODO add ublocking api call here

    // if(unblocked){
    navigation.navigate("StatusScreen", {
      statusIcon: "Success",
      status: "Successful",
      statusMessage: `The user ${userToBlock.fullName} has been successfully unblocked.`,
      navigateTo: "BlockUsers",
    });
    // }else{
    //   throw error
    // }
  };

  return (
    <View
      style={{
        display: isModalVisible ? "flex" : "none",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.75)",
      }}
    >
      <View
        style={{
          borderRadius: 20,
          paddingBottom: 20,
          paddingTop: 30,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "90%",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          Unblock Users
        </Text>
        <Text
          style={{
            fontSize: 14,
            marginVertical: 15,
            maxWidth: 300,
            textAlign: "center",
          }}
        >
          The user{" "}
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Semi-Bold",
              fontSize: hp(15),
            }}
          >
            {userToBlock.fullName}
          </Text>{" "}
          will be unblocked. Do you confirm?
        </Text>
        <Button
          title="Confirm"
          onPressButton={handleUserUnblocking}
          styleText={{
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14,
          }}
          style={{
            marginTop: hp(40),
            marginBottom: hp(20),
            width: "90%",
          }}
        />
        <ButtonWithUnderline
          onPressButton={toggleModal}
          style={{ borderBottomColor: Colors.general.red }}
          title="Cancel"
          styleText={CommonStyles.cancelStyle}
        />
      </View>
    </View>
  );
}
