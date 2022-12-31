import { CommonScreenProps } from "../../../../common/navigation/types";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { hp } from "../../../../common/util/LayoutUtil";
import Button from "../../../../components/buttons/Button";
import ButtonWithUnderline from "../../../../components/buttons/CancelButtonWithUnderline";
import { View } from "../../../../theme/components/View";
import { Text } from "../../../../theme/components/Text";
import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";

interface IProps {
  toggleModal: () => void;
  isModalVisible: boolean;
  user: string;
}

export default function BlockUserModal({
  toggleModal,
  isModalVisible,
  navigation,
  user,
}: CommonScreenProps<"BlockNewUser"> & IProps) {
  const colorScheme = useColorScheme();
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
          backgroundColor: Colors[colorScheme].backgroundSecondary,
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
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          Block User
        </Text>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
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
            {user}
          </Text>{" "}
          will be blocked. Do you confirm?
        </Text>
        <Button
          title="Confirm"
          onPressButton={() => {
            toggleModal();
            navigation.navigate("StatusScreen", {
              statusIcon: "Success",
              status: "Successful",
              statusMessage: `The user ${user} has been successfully blocked.`,
              navigateTo: "BlockNewUser",
            });
          }}
          styleText={{
            color: Colors[colorScheme].buttonText,
            fontFamily: "Euclid-Circular-A-Medium",
            fontSize: 14,
          }}
          style={{
            marginTop: hp(40),
            marginBottom: hp(20),
            backgroundColor: Colors[colorScheme].button,
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
