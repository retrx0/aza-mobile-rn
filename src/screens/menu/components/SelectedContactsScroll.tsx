import React from "react";
import { Image, TouchableOpacity } from "react-native";

import { Text, View } from "../../../components/Themed";

import CommonStyles from "../../../common/styles/CommonStyles";
import Colors from "../../../constants/Colors";

import { CloseCircleIcon } from "../../../../assets/svg";
import { Contact } from "expo-contacts";
import { hp } from "../../../common/util/LayoutUtil";

interface IProps {
  deSelectContact: (id: Contact["id"]) => void;
  selectedContacts: Contact[];
}

const SelectedContactsScroll = ({
  deSelectContact,
  selectedContacts,
}: IProps) => {
  return (
    <>
      {selectedContacts?.map(({ firstName, id }) => (
        <View key={id} style={[CommonStyles.row, { alignItems: "center" }]}>
          <View
            style={[
              CommonStyles.col,
              {
                alignItems: "center",
                marginLeft: hp(20),
              },
            ]}>
            <View
              style={{
                position: "relative",
              }}>
              <Image
                style={{ borderRadius: 50, width: 45, height: 45 }}
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
                }}
              />
              <TouchableOpacity
                onPress={() => deSelectContact(id)}
                style={{
                  position: "absolute",
                  right: 0,
                  backgroundColor: "transparent",
                }}>
                <CloseCircleIcon size={16} color="#FF361A" />
              </TouchableOpacity>
            </View>

            <Text
              lightColor={Colors.light.text}
              darkColor={Colors.dark.mainText}
              style={{ fontSize: 10, marginTop: 5 }}>
              {firstName}
            </Text>
          </View>
        </View>
      ))}
    </>
  );
};

export default SelectedContactsScroll;
