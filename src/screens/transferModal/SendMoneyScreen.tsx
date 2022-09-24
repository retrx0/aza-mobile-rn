import React, { useLayoutEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { TabView, TabBar } from "react-native-tab-view";

import { CommonScreenProps } from "../../common/navigation/types";

import BackButton from "../../components/buttons/BackButton";
import { Text, TextInput, View } from "../../components/Themed";
import ContactListItem from "../../components/ListItem/ContactListItem";

import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { AZALightningLogo } from "../../../assets/svg";
import { hp } from "../../common/util/LayoutUtil";
import CommonStyles from "../../common/styles/CommonStyles";

const SendMoneyScreen = ({ navigation }: CommonScreenProps<"SendMoney">) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Mobile Number" },
    { key: "second", title: "Aza Number" },
  ]);
  const colorScheme = useColorScheme();
  const layout = useWindowDimensions();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          lightColor={Colors.light.text}
          darkColor={Colors.dark.mainText}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: 16,
          }}
        >
          Send Money
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

  const renderScene = ({ route }: any) => {
    switch (route.key) {
      case "first":
        return (
          <View style={[styles.container, { justifyContent: "space-between" }]}>
            <View>
              <Text
                style={{
                  color: Colors[colorScheme].mainText,
                  fontSize: 14,
                }}
              >
                Quick contacts
              </Text>
              <View
                style={[
                  CommonStyles.row,
                  {
                    marginTop: hp(20),
                  },
                ]}
              >
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={[CommonStyles.row]}>
                    {Array(3)
                      .fill("")
                      .map((_, i) => (
                        <View
                          key={i}
                          style={[
                            CommonStyles.col,
                            { alignItems: "center", marginRight: 20 },
                          ]}
                        >
                          <Image
                            style={{
                              borderRadius: 50,
                              width: 45,
                              height: 45,
                            }}
                            source={{
                              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s",
                            }}
                          />
                          <Text
                            lightColor={Colors.light.text}
                            darkColor={Colors.dark.mainText}
                            style={{ fontSize: 10, marginTop: 5 }}
                          >
                            Chiazo
                          </Text>
                        </View>
                      ))}
                  </View>
                </ScrollView>
              </View>

              <TextInput
                lightColor={Colors.light.mainText}
                darkColor={Colors.dark.mainText}
                placeholderTextColor={Colors[colorScheme].secondaryText}
                style={{
                  backgroundColor: "transparent",
                  fontFamily: "Euclid-Circular-A",
                  paddingBottom: 10,
                  marginVertical: hp(35),
                  borderBottomWidth: 1,
                  borderBottomColor: Colors[colorScheme].separator,
                }}
                placeholder="To (Search for a contact)"
              />

              <ScrollView
                contentContainerStyle={{ paddingBottom: hp(300) }}
                showsVerticalScrollIndicator={false}
              >
                <View style={{ marginBottom: hp(20) }}>
                  <View
                    style={[
                      CommonStyles.row,
                      {
                        alignItems: "flex-end",
                        alignSelf: "flex-start",
                        marginTop: hp(15),
                      },
                    ]}
                  >
                    <Text
                      lightColor={Colors.light.text}
                      darkColor={Colors.dark.secondaryText}
                      style={{ fontSize: 14 }}
                    >
                      Contacts using Aza
                    </Text>
                    <Text
                      style={{
                        color: "#2A9E17",
                        marginLeft: 10,
                        fontSize: 12,
                        fontFamily: "Euclid-Circular-A-Light",
                      }}
                    >
                      +18
                    </Text>
                  </View>
                  {Array(4)
                    .fill("")
                    .map((_, i) => (
                      <TouchableOpacity
                        key={i}
                        onPress={() =>
                          navigation.navigate("TransactionKeypad", {
                            headerTitle: "Send Money",
                            transactionType: {
                              transaction:'send',
                              type: "normal transaction",
                              beneficiary: {
                                beneficiaryAccount: "",
                                beneficiaryImage: "",
                                beneficiaryName: "",
                              },
                              openDescriptionModal: true,
                            },
                          })
                        }
                      >
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
                </View>
                <View
                  style={[
                    CommonStyles.row,
                    {
                      alignItems: "flex-end",
                      alignSelf: "flex-start",
                    },
                  ]}
                >
                  <Text
                    lightColor={Colors.light.text}
                    darkColor={Colors.dark.secondaryText}
                    style={{ fontSize: 14 }}
                  >
                    Contacts not using Aza yet
                  </Text>
                  <Text
                    style={{
                      color: "#2A9E17",
                      marginLeft: 10,
                      fontSize: 12,
                      fontFamily: "Euclid-Circular-A-Light",
                    }}
                  >
                    +200
                  </Text>
                </View>
                {Array(10)
                  .fill("")
                  .map((_, i) => (
                    <TouchableOpacity key={i}>
                      <ContactListItem
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbyNWazv3E1ToRNblv4QnUK8m696KHm-w96VapAaMHQ&s"
                        name={"Adewale Adeyesufu"}
                        phoneNumber={"8012345678"}
                        suffixIcon={
                          <View
                            style={{
                              backgroundColor: "#2A9E17",
                              borderRadius: 5,
                              paddingHorizontal: 10,
                              paddingVertical: 2,
                            }}
                          >
                            <Text style={{ color: "white", fontSize: 10 }}>
                              Invite
                            </Text>
                          </View>
                        }
                      />
                    </TouchableOpacity>
                  ))}
              </ScrollView>
            </View>
          </View>
        );
      case "second":
        return (
          <View style={[styles.container, { justifyContent: "space-between" }]}>
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
              placeholder="Aza Number"
            />
          </View>
        );
    }
  };

  return (
    <SpacerWrapper>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        sceneContainerStyle={{ overflow: "visible" }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            style={{
              elevation: 0,
              backgroundColor: "transparent",
              borderBottomColor: Colors[colorScheme].secondaryText,
              borderBottomWidth: 2,
            }}
            indicatorStyle={{
              backgroundColor: Colors[colorScheme].text,
              marginBottom: -2,
            }}
            renderLabel={({ focused, route }) => {
              return (
                <Text
                  lightColor={
                    focused ? Colors.light.text : Colors.light.secondaryText
                  }
                  darkColor={
                    focused ? Colors.dark.mainText : Colors.dark.secondaryText
                  }
                  style={{
                    fontFamily: "Euclid-Circular-A-Medium",
                    fontSize: 16,
                  }}
                >
                  {route.title}
                </Text>
              );
            }}
          />
        )}
      />
    </SpacerWrapper>
  );
};

export default SendMoneyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
});
