import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Image } from "react-native";

import BackButton from "../../components/buttons/BackButton";
import { Text, TextInput, View } from "../../components/Themed";
import Button from "../../components/buttons/Button";

import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { hp } from "../../common/util/LayoutUtil";
import CommonStyles from "../../common/styles/CommonStyles";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { CommonScreenProps } from "../../common/navigation/types";
import CancelButtonWithUnderline from "../../components/buttons/CancelButtonWithUnderline";
import { numberWithCommas } from "../../common/util/NumberUtils";

const SplitEditContactScreen = ({
  navigation,
  route,
}: CommonScreenProps<"SplitEditContact">) => {
  const { contactSplitAmount, contactImage, contactName } = route.params;
  const [editedAmount, setEditedAmount] = useState(contactSplitAmount);
  const colorScheme = useColorScheme();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          lightColor={Colors.light.mainText}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: 16,
          }}
        >
          Edit
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

  return (
    <SpacerWrapper>
      <View style={styles.container}>
        <View>
          <Text
            lightColor={Colors.light.mainText}
            darkColor={Colors.dark.mainText}
            style={{
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: 14,
              marginBottom: hp(50),
            }}
          >
            You can edit the split amount
          </Text>
          <View style={{ marginBottom: hp(30), position: "relative" }}>
            <Text
              lightColor={Colors.light.secondaryText}
              darkColor={Colors.dark.secondaryText}
              style={{
                fontSize: 14,
              }}
            >
              With whom?
            </Text>
            <TextInput
              lightColor={Colors.light.mainText}
              darkColor={Colors.dark.mainText}
              placeholderTextColor={Colors[colorScheme].secondaryText}
              style={[
                styles.input1,
                {
                  borderBottomColor: Colors[colorScheme].separator,
                },
              ]}
              showSoftInputOnFocus={false}
              value={contactName}
            />
            <Image
              source={{
                uri: contactImage,
              }}
              style={styles.contactImage}
            />
          </View>
          <View style={{ marginBottom: hp(30) }}>
            <Text
              lightColor={Colors.light.secondaryText}
              darkColor={Colors.dark.secondaryText}
              style={{
                fontFamily: "Euclid-Circular-A",
                fontSize: 14,
              }}
            >
              Amount
            </Text>
            <View
              style={[
                CommonStyles.row,
                {
                  marginTop: hp(15),
                  alignSelf: "stretch",
                  position: "relative",
                },
              ]}
            >
              <Text
                lightColor={Colors.light.mainText}
                darkColor={Colors.dark.mainText}
                style={{ position: "absolute", paddingBottom: 5 }}
              >
                {"\u20A6 "}
              </Text>
              <TextInput
                lightColor={Colors.light.mainText}
                darkColor={Colors.dark.mainText}
                placeholderTextColor={Colors[colorScheme].secondaryText}
                style={[
                  styles.input2,
                  {
                    borderBottomColor: Colors[colorScheme].separator,
                  },
                ]}
                keyboardType="number-pad"
                returnKeyType="done"
                onChangeText={(e) => setEditedAmount(e.replace(/[^0-9]/g, ""))}
                value={numberWithCommas(editedAmount)}
              />
            </View>
          </View>
        </View>
        <View
          style={[
            CommonStyles.col,
            { width: "100%", marginBottom: hp(35), marginTop: 5 },
          ]}
        >
          <Button
            title="Confirm"
            onPressButton={() => navigation.goBack()}
            styleText={{
              color: Colors[colorScheme].buttonText,
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: 14,
            }}
            style={{
              marginVertical: 10,
              width: "100%",
              backgroundColor: Colors[colorScheme].button,
            }}
          />
          <CancelButtonWithUnderline
            title="Cancel"
            onPressButton={() => navigation.goBack()}
            style={{ borderBottomColor: Colors.general.red }}
            styleText={CommonStyles.cancelStyle}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default SplitEditContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    paddingVertical: hp(20),
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  input1: {
    backgroundColor: "transparent",
    fontFamily: "Euclid-Circular-A-Medium",
    paddingBottom: 5,
    marginTop: hp(15),
    borderBottomWidth: 1,
  },
  contactImage: {
    position: "absolute",
    right: 0,
    bottom: hp(10),
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: "white",
  },
  input2: {
    flex: 1,
    backgroundColor: "transparent",
    fontFamily: "Euclid-Circular-A-Medium",
    paddingBottom: 5,
    paddingLeft: 20,
    borderBottomWidth: 1,
  },
});
