import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { CommonScreenProps } from "../../../../common/navigation/types";
import BackButton from "../../../../components/buttons/BackButton";
import { View as View, Text as Text } from "../../../../theme/Themed";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { UndrawCancelIcon } from "../../../../../assets/svg";
import Button from "../../../../components/buttons/Button";
import ButtonWithUnderline from "../../../../components/buttons/CancelButtonWithUnderline";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { UnblockModal } from "../components/BlockUserModal";
import Contact from "../../../../components/ListItem/Contact";

const BlockUsersScreen = ({
  navigation,
  route,
}: CommonScreenProps<"BlockNewUser">) => {
  const insets = useSafeAreaInsets();
  const [blockUser] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
            fontWeight: "500",
          }}>
          Block Users
        </Text>
      ),
      // hide default back button which only shows in android
      headerBackVisible: false,
      //center it in android
      headerTitleAlign: "center",
      headerShadowVisible: false,
      headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
    });
  }, []);

  if (blockUser) {
    return (
      <SpacerWrapper>
        <View style={[CommonStyles.vaultcontainer]}>
          <View style={{ paddingHorizontal: 20 }}>
            <Text
              lightColor={Colors.light.text}
              darkColor={Colors.dark.mainText}
              style={{
                fontSize: hp(16),
                fontFamily: "Euclid-Circular-A-Medium",
                fontWeight: "500",
              }}>
              Blocked users won't be able to send you money, request money from
              you or split payments with you.
            </Text>
            <Text
              lightColor={Colors.light.text}
              darkColor={Colors.dark.mainText}
              style={{
                fontSize: hp(16),
                fontFamily: "Euclid-Circular-A",
                fontWeight: "400",
                marginTop: hp(30),
              }}>
              You can unblock these users anytime
            </Text>
          </View>
          <View style={{ alignSelf: "center", marginTop: hp(40) }}>
            <UndrawCancelIcon size={30} />
            <Text
              style={{
                fontSize: hp(16),
                fontFamily: "Euclid-Circular-A-Semi-Bold",
                marginTop: hp(30),
                textAlign: "center",
              }}>
              You have not blocked anyone
            </Text>
          </View>

          <View
            style={[
              CommonStyles.passwordContainer,
              { bottom: insets.top || hp(45) },
            ]}>
            <Button
              title="Block A User"
              onPressButton={() => navigation.navigate("BlockNewUser")}
              styleText={{}}
              style={[CommonStyles.button]}
            />
            <ButtonWithUnderline
              title="Cancel"
              onPressButton={() => navigation.goBack()}
              style={{ borderBottomColor: Colors.general.red }}
              styleText={CommonStyles.cancelStyle}
            />
          </View>
        </View>
      </SpacerWrapper>
    );
  }

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <View style={{ paddingHorizontal: 20 }}>
          <Text
            lightColor={Colors.light.text}
            darkColor={Colors.dark.mainText}
            style={{
              fontSize: hp(16),
              fontFamily: "Euclid-Circular-A-Medium",
              fontWeight: "500",
            }}>
            Blcoked users won't be able to send you money, request money from
            you or split payments with you.
          </Text>
          <Text
            lightColor={Colors.light.text}
            darkColor={Colors.dark.mainText}
            style={{
              fontSize: hp(16),
              fontFamily: "Euclid-Circular-A",
              fontWeight: "400",
              marginTop: hp(30),
            }}>
            You can unblock these users anytime
          </Text>
        </View>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontSize: hp(16),
            fontFamily: "Euclid-Circular-A-Medium",
            fontWeight: "400",
            marginTop: hp(30),
            marginLeft: hp(20),
            marginBottom: hp(45),
          }}>
          Blocked Users
        </Text>
        <TouchableOpacity
          style={{
            paddingHorizontal: hp(20),
          }}
          onPress={toggleModal}>
          <Contact
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s"
            name={"Adewale Adeyesufu"}
            phoneNumber={"8012345678"}
            isContactOnAza={true}
          />
        </TouchableOpacity>

        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}>
          <Button
            title="Block A New User"
            onPressButton={() => navigation.navigate("BlockNewUser")}
            styleText={{}}
            style={[CommonStyles.button]}
          />
        </View>
      </View>
      <UnblockModal
        navigation={navigation}
        route={route}
        user="Chiazo"
        toggleModal={toggleModal}
        isModalVisible={isModalVisible}
      />
    </SpacerWrapper>
  );
};

export default BlockUsersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: hp(20),
  },
});
