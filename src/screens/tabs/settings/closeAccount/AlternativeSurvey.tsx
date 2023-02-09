import { View, Text, TextInput } from "../../../../theme/Themed";
import Button from "../../../../components/buttons/Button";
import { CommonScreenProps } from "../../../../common/navigation/types";
import Colors from "../../../../constants/Colors";
import { hp, wp } from "../../../../common/util/LayoutUtil";
import CommonStyles from "../../../../common/styles/CommonStyles";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getAppTheme } from "../../../../theme";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import { useAppSelector } from "./../../../../redux";
import useNavigationHeader from "../../../../hooks/useNavigationHeader";

const AlternativeSurvey = ({
  navigation,
}: CommonScreenProps<"CloseAccountScreen">) => {
  const insets = useSafeAreaInsets();
  const appTheme = getAppTheme(useAppSelector(selectAppTheme));

  useNavigationHeader(navigation, "Account Closure Survey");

  return (
    <SpacerWrapper>
      <View style={[CommonStyles.vaultcontainer]}>
        <View style={{ paddingHorizontal: hp(15) }}>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(16),
              marginBottom: hp(100),
              fontWeight: "500",
              maxWidth: wp(350),
            }}
          >
            We would love to know why you decided to close your account
          </Text>
        </View>

        <View style={{ paddingHorizontal: hp(20) }}>
          <Text
            style={{
              fontFamily: "Euclid-Circular-A-Medium",
              fontSize: hp(16),
              marginBottom: hp(20),
              fontWeight: "500",
            }}
          >
            Leave your reason here
          </Text>
          <View
            style={{
              maxWidth: wp(390),
              height: hp(150),
              borderRadius: hp(5),
              borderWidth: hp(0.8),
              borderColor: Colors[appTheme].secondaryText,
              paddingLeft: hp(12),
              backgroundColor: Colors[appTheme].background,
              paddingVertical: hp(10),
            }}
          >
            <TextInput
              placeholder="Write your reason..."
              style={{
                borderColor: Colors[appTheme].secondaryText,
                backgroundColor: Colors[appTheme].background,
              }}
            />
          </View>
        </View>
        <View
          style={[
            CommonStyles.passwordContainer,
            { bottom: insets.top || hp(45) },
          ]}
        >
          <Button
            title="Continue"
            onPressButton={() =>
              navigation.navigate("StatusScreen", {
                status: "Successful",
                statusIcon: "Success",
                //TODO update message to accept JSX
                statusMessage: "Survey has been successfully filled and sent",
                navigateTo: "Settings",
              })
            }
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default AlternativeSurvey;
