import React, { useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import { CloseCircleLargeIcon } from "../../../assets/svg";
import { hp, wp } from "../../common/util/LayoutUtil";
import Colors from "../../constants/Colors";
import Modal from "react-native-modal";
import { AnnouncementDraw } from "../../../assets/images";
import { View as View, Text as Text } from "../../theme/Themed";
import Button from "../../components/buttons/Button";
import CancelButtonWithUnderline from "../../components/buttons/CancelButtonWithUnderline";
const AnnouncementModal = ({
  title,
  body,
}: {
  title: string;
  body: string;
}) => {
  const [ModalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal
        onBackdropPress={() => setModalVisible(false)}
        isVisible={ModalVisible}
        style={{ justifyContent: "flex-end", margin: 0 }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "transparent",
            alignItems: "flex-end",
            marginBottom: 10,
            marginRight: 10,
          }}
          onPress={() => setModalVisible(false)}
        >
          <CloseCircleLargeIcon color={Colors.light.disabled} />
        </TouchableOpacity>
        <View
          style={{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingHorizontal: 15,
          }}
        >
          <View
            style={{
              height: hp(570),
            }}
          >
            <Image
              source={AnnouncementDraw}
              style={{
                width: wp(203),
                height: hp(117),
                alignSelf: "center",
                marginTop: hp(40),
                marginBottom: hp(24),
              }}
            />
            <Text
              style={{
                fontFamily: "Euclid-Circular-A-Bold",
                fontSize: hp(24),
                textAlign: "center",
                fontWeight: "600",
              }}
            >
              {title}
            </Text>
            <Text
              style={{
                fontSize: hp(16),
                lineHeight: hp(25),
                fontFamily: "Euclid-Circular-A",
                textAlign: "center",
                fontWeight: "400",
                alignSelf: "center",
                marginTop: hp(24),
                maxWidth: 335,
                marginBottom: hp(50),
              }}
            >
              {body}
            </Text>
            <View>
              <Button title="OK, I understand" />
              <CancelButtonWithUnderline
                title="Do not show this again"
                style={{ borderBottomColor: Colors.general.apple }}
                styleText={{
                  textAlign: "center",
                  fontSize: hp(16),
                  fontWeight: "500",
                  lineHeight: hp(17),
                  fontFamily: "Euclid-Circular-A",
                  marginTop: hp(20),
                  color: Colors.dark.text,
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AnnouncementModal;
