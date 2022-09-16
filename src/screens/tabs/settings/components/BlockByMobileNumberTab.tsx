import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../../../constants/Colors";
import { hp } from "../../../../common/util/LayoutUtil";
import useColorScheme from "../../../../hooks/useColorScheme";
import { Text, TextInput, View } from "../../../../components/Themed";
import ContactListItem from "../../../../components/ListItem/ContactListItem";
import { AZALightningLogo } from "../../../../../assets/svg";

interface IProps {
  toggleModal: () => void;
}

const BlockByMobileNumberTab = ({ toggleModal }: IProps) => {
  const colorScheme = useColorScheme();

  return (
    <View style={[styles.container, { justifyContent: "space-between" }]}>
      <View>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{ fontSize: 14, fontFamily: "Euclid-Circular-A-Medium" }}
        >
          Blocked users won't be able to send you money, request money from you
          or split payments with you.
        </Text>
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontSize: 14,
            marginTop: hp(30),
          }}
        >
          You can unblock these users anytime
        </Text>
        <View style={{ marginTop: hp(50) }}>
          <TextInput
            lightColor={Colors.light.mainText}
            darkColor={Colors.dark.mainText}
            placeholderTextColor={Colors[colorScheme].secondaryText}
            style={{
              backgroundColor: "transparent",
              fontFamily: "Euclid-Circular-A",
              paddingBottom: 10,
              marginTop: hp(15),
              borderBottomWidth: 1,
              borderBottomColor: Colors[colorScheme].separator,
            }}
            placeholder="Mobile Number"
          />
        </View>
        <Text
          style={{
            color: Colors[colorScheme].secondaryText,
            marginTop: hp(40),
            fontSize: 14,
            marginBottom: 20,
          }}
        >
          Your Aza Contacts
        </Text>
        <ScrollView
          contentContainerStyle={{ paddingBottom: hp(300) }}
          showsVerticalScrollIndicator={false}
        >
          {Array(20)
            .fill("")
            .map((_, i) => (
              <TouchableOpacity key={i} onPress={toggleModal}>
                <ContactListItem
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s"
                  name={"Adewale Adeyesufu"}
                  phoneNumber={"8012345678"}
                  suffixIcon={
                    <AZALightningLogo
                      size={25}
                      color={Colors[colorScheme].text}
                    />
                  }
                />
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    </View>
  );
};
export default BlockByMobileNumberTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
});
