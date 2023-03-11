import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { View, Text } from "../../theme/Themed";
import Divider from "../../components/divider/Divider";

import Colors from "../../constants/Colors";
import { hp } from "../../common/util/LayoutUtil";
import CommonStyles from "../../common/styles/CommonStyles";
import SpacerWrapper from "../../common/util/SpacerWrapper";
import { CommonScreenProps } from "../../common/navigation/types";

import useNavigationHeader from "../../hooks/useNavigationHeader";
import { WhatsAppLogo } from "../../../assets/svg";

const ContactUsScreen = ({ navigation }: CommonScreenProps<"ContactUs">) => {
  const insets = useSafeAreaInsets();
  useNavigationHeader(navigation, "Contact Us");

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <View style={{ paddingHorizontal: hp(20) }}>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(14),
              marginTop: hp(20),
              marginBottom: hp(40),

              fontWeight: "400",
            }}
          >
            Contact us with any questions. We are ready to help
          </Text>
          <View style={{ marginBottom: hp(40) }}>
            <Text
              style={{
                fontFamily: "Euclid-Circular-A-Medium",
                fontSize: hp(14),
                fontWeight: "400",
              }}
            >
              Email
            </Text>
            <Text
              style={{
                marginBottom: 5,
                marginTop: 10,
                fontFamily: "Euclid-Circular-A-Semi-Bold",
                fontSize: hp(16),
              }}
            >
              customersupport@aza.com
            </Text>
            <Divider />
          </View>
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              borderWidth: 1,
              borderColor: Colors["general"].grey,
              width: "90%",
              height: hp(50),
              borderRadius: hp(10),
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <View style={{ marginRight: 10 }}>
              <WhatsAppLogo color={"#25D366"} size={23} />
            </View>

            <Text
              style={{
                fontFamily: "Euclid-Circular-A-Semi-Bold",
                fontSize: hp(14),
                fontWeight: "500",
              }}
            >
              Whatsapp Customer Support
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});
