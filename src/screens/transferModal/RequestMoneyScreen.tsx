import React, { useLayoutEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { TabView, TabBar } from "react-native-tab-view";

import BackButton from "../../components/buttons/BackButton";
import { Text, TextInput, View } from "../../components/Themed";
import ContactListItem from "../../components/ListItem/ContactListItem";

import Colors from "../../constants/Colors";
import { CommonScreenProps } from "../../common/navigation/types";
import useColorScheme from "../../hooks/useColorScheme";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { AZALargeLightningLogo } from "../../../assets/svg";
import { hp } from "../../common/util/LayoutUtil";
import CommonStyles from "../../common/styles/CommonStyles";

const RequestMoneyScreen = ({
  navigation,
}: CommonScreenProps<"RequestMoney">) => {
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
          Request Money
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
              <TextInput
                lightColor={Colors.light.mainText}
                darkColor={Colors.dark.mainText}
                placeholderTextColor={Colors[colorScheme].secondaryText}
                style={{
                  backgroundColor: "transparent",
                  fontFamily: "Euclid-Circular-A",
                  paddingBottom: 10,
                  marginTop: hp(15),
                  marginBottom: hp(35),
                  borderBottomWidth: 1,
                  borderBottomColor: Colors[colorScheme].separator,
                }}
                placeholder="From?"
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
                            headerTitle: "Request Money",
                            transactionType: {
                              transaction: "request",
                              type: "normal",
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
                            <AZALargeLightningLogo
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

export default RequestMoneyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(20),
    paddingHorizontal: 15,
  },
});
