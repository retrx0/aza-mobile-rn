import { TouchableOpacity, useWindowDimensions } from "react-native";
import { Text } from "../../../../theme/Themed";
import { useAppSelector } from "../../../../redux";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { getAppTheme } from "../../../../theme";
import { TabBar, TabView } from "react-native-tab-view";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { useLayoutEffect, useState } from "react";
import Colors from "../../../../constants/Colors";
import { RootTabScreenProps } from "../../../../../types";
import BackButton from "../../../../components/buttons/BackButton";
import { hp } from "../../../../common/util/LayoutUtil";
import { InfoIcon } from "../../../../../assets/svg";
import { CommonScreenProps } from "../../../../common/navigation/types";
import Airtime from "./Airtime";
import DataBundle from "./DataBundle";

const AirtimeDataScreen = ({
  navigation,
  route,
}: CommonScreenProps<"AirtimeData">) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Airtime" },
    { key: "second", title: "Data-Bundle" },
  ]);
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));
  const layout = useWindowDimensions();

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
          Airtime & Data
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

  const renderScene = (props: any) => {
    switch (props.route.key) {
      case "first":
        return <Airtime navigation={navigation} route={route} />;
      case "second":
        return <DataBundle navigation={navigation} route={route} />;
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
              borderBottomColor: Colors[appTheme].secondaryText,
              borderBottomWidth: 2,
            }}
            indicatorStyle={{
              backgroundColor: Colors[appTheme].text,
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
                    fontSize: hp(16),
                  }}>
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

export default AirtimeDataScreen;

// import React, { useEffect, useState } from "react";
// import { ScrollView } from "react-native";
// import { useRoute } from "@react-navigation/native";

// import { AIrtimeStyles as styles } from "./styles";

// import { hp } from "../../../../common/util/LayoutUtil";
// import { CommonScreenProps } from "../../../../common/navigation/types";
// import { toastError } from "../../../../common/util/ToastUtil";
// import { numberWithCommas } from "../../../../common/util/NumberUtils";
// import { NAIRA_UNICODE } from "../../../../constants/AppConstants";

// import { View } from "../../../../theme/Themed";
// import { Header } from "../../../../components/text/header";
// import { UnderlinedInput } from "../../../../components/input/UnderlinedInput";
// import CustomSwitch from "../../../../components/input/CustomSwitch";
// import Button from "../../../../components/buttons/Button";
// import CustomDropdown from "../../../../components/dropdown/CustomDropdown";
// import { Card } from "../sub-components/Card";

// import { useAppDispatch, useAppSelector } from "../../../../redux";
// import { selectUser } from "../../../../redux/slice/userSlice";
// import { toggleActivityModal } from "../../../../redux/slice/activityModalSlice";

// import {
//   detectNetworkOperatorAPI,
//   fetchNetworkOperatorDataPlansAPI,
// } from "../../../../api/airtime";
// import {
//   getMobileAirtimeOperators,
//   selectPayment,
// } from "../../../../redux/slice/paymentSlice";
// import ProviderSkeleton from "../sub-components/ProviderSkeleton";
// import { selectAppTheme } from "../../../../redux/slice/themeSlice";
// import { getAppTheme } from "../../../../theme";
// import SpacerWrapper from "../../../../common/util/SpacerWrapper";
// import CommonStyles from "../../../../common/styles/CommonStyles";

// export default function AirtimeIndex({
//   navigation,
// }: CommonScreenProps<"AirtimeData">) {
//   const [isEnabled, setIsEnabled] = useState(false);
//   const [selectedProvider, setSelectedProvider] = useState<{
//     name: any;
//     logoUrls: string[];
//     operatorId: number;
//   }>({
//     name: "",
//     logoUrls: [],
//     operatorId: 0,
//   });
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [amount, setAmount] = useState("");
//   const [dataBundles, setDataBundles] = useState<
//     { label: string; value: string }[]
//   >([]);

//   const route = useRoute();
//   const dispatch = useAppDispatch();
//   const user = useAppSelector(selectUser);
//   const { airtimeOperators } = useAppSelector(selectPayment);
//   const selectedTheme = useAppSelector(selectAppTheme);
//   const appTheme = getAppTheme(selectedTheme);

//   useEffect(() => {
//     if (!airtimeOperators.loaded) dispatch(getMobileAirtimeOperators());
//   }, []);

//   useEffect(() => {
//     if (isEnabled) {
//       detectNetworkProvider(user.phoneNumber);
//     }
//   }, [isEnabled]);

//   useEffect(() => {
//     if (route.name === "data-bundle" && selectedProvider.name) {
//       fetchNetworkOperatorDataPlansAPI(
//         selectedProvider.name.split(" ")[0].toUpperCase()
//       )
//         .then(({ data }) => {
//           const entires = Object.entries(data.fixedAmountsDescriptions).map(
//             ([value, label]) => ({ value, label: label as string })
//           );
//           setDataBundles(entires);
//         })
//         .catch((err) => console.log(err));
//     }
//   }, [route.name, selectedProvider.name]);

//   const detectNetworkProvider = (number: string) => {
//     dispatch(toggleActivityModal(true));
//     detectNetworkOperatorAPI(number.replace("+", ""))
//       .then((res) => {
//         setMobileNumber(number);
//         setSelectedProvider(res.data);
//         dispatch(toggleActivityModal(false));
//       })
//       .catch(() => {
//         dispatch(toggleActivityModal(false));
//         toastError("Error detecting provider. Please select manually");
//       });
//   };

//   const handleChange = (text: string) => {
//     let updatedText = text;
//     if (text.charAt(0) === "0") {
//       updatedText = text.substring(1);
//     }
//     if (updatedText.length === 13) {
//       detectNetworkProvider(updatedText);
//     }
//     setMobileNumber(
//       mobileNumber.startsWith("234") ? updatedText : `234${updatedText}`
//     );
//   };

//   // removes duplicated operators
//   const displayedOperators = new Set();

//   return (
//     <SpacerWrapper>
//       <View style={CommonStyles.vaultcontainer}>
//         <Header
//           description=""
//           descriptionStyle={null}
//           headerStyle={{
//             fontFamily: "Euclid-Circular-A-Medium",
//             fontWeight: "600",
//             fontSize: hp(16),
//             marginTop: hp(30),
//           }}
//           heading="Select Network Provider"
//         />
//         <ScrollView
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           style={{ marginTop: hp(15), maxHeight: 80 }}
//           contentContainerStyle={{
//             justifyContent: "space-between",
//             width: "100%",
//           }}>
//           {airtimeOperators.loaded ? (
//             airtimeOperators.data.map((operator, index) => {
//               if (displayedOperators.has(operator.name.split(" ")[0])) {
//                 return null;
//               }
//               displayedOperators.add(operator.name.split(" ")[0]);

//               return (
//                 <Card
//                   key={index}
//                   title={operator.name.split(" ")[0]}
//                   icon={operator.logoUrls[0]}
//                   onPress={() => {
//                     setSelectedProvider(operator);
//                   }}
//                   isActive={
//                     operator.name.split(" ")[0] ===
//                     selectedProvider.name.split(" ")[0]
//                   }
//                 />
//               );
//             })
//           ) : (
//             <ProviderSkeleton numberOfItems={4} />
//           )}
//         </ScrollView>

//         <View style={{ paddingHorizontal: hp(20) }}>
//           <UnderlinedInput
//             icon={null}
//             maxLength={13}
//             keyboardType="phone-pad"
//             value={isEnabled ? user.phoneNumber : mobileNumber}
//             inputStyle={[
//               styles.input,
//               {
//                 borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC",
//               },
//             ]}
//             labelStyle={styles.label}
//             style={{ marginTop: hp(10) }}
//             label="Phone Number"
//             placeholder="Enter a phone number"
//             returnKeyType="done"
//             onChangeText={handleChange}
//           />
//           <CustomSwitch
//             title="My number"
//             onValueChange={() =>
//               setIsEnabled((previousState) => !previousState)
//             }
//             isEnabled={isEnabled}
//           />
//         </View>
//         {route.name === "data-bundle" && (
//           <View
//             style={{
//               paddingHorizontal: hp(20),
//               marginTop: hp(10),
//               marginBottom: hp(10),
//             }}>
//             <CustomDropdown
//               data={dataBundles}
//               placeholder="Choose a bundle"
//               setValue={setAmount}
//               value={amount}
//               style={[
//                 { fontFamily: "Euclid-Circular-A" },
//                 { fontWeight: "400" },
//                 { fontSize: hp(16) },
//               ]}
//               label={"Bundle"}
//             />
//           </View>
//         )}

//         <UnderlinedInput
//           value={
//             route.name == "data-bundle"
//               ? NAIRA_UNICODE + numberWithCommas(amount)
//               : amount
//           }
//           style={{ paddingHorizontal: hp(20) }}
//           disabled={route.name === "data-bundle"}
//           icon={null}
//           inputStyle={[
//             styles.input,
//             { borderBottomColor: appTheme === "dark" ? "#262626" : "#EAEAEC" },
//           ]}
//           labelStyle={styles.label}
//           label="Amount"
//           placeholder="Enter an amount"
//           keyboardType="number-pad"
//           returnKeyType={route.name !== "data-bundle" ? "done" : "none"}
//           showSoftInputOnFocus={route.name !== "data-bundle"}
//           onChangeText={(text) => {
//             setAmount(text);
//           }}
//         />

//         <View style={{ marginTop: "auto", marginBottom: hp(45) }}>
//           <Button
//             title="Continue"
//             onPressButton={() => {
//               navigation.navigate("PaymentConfirmation", {
//                 amount,
//                 beneficiaryLogo: selectedProvider.logoUrls[0],
//                 beneficiaryName: selectedProvider.name,
//                 purchaseName: route.name == "data-bundle" ? "Data" : "Airtime",
//                 paymentMethod: "Aza Account",
//                 phoneNumber: mobileNumber,
//               });
//             }}
//             disabled={!amount || !selectedProvider || mobileNumber.length < 13}
//           />
//         </View>
//       </View>
//     </SpacerWrapper>
//   );
// }
