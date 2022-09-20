import React from "react";
import { TouchableOpacity } from "react-native";
import Button from "../../../../components/buttons/Button";
import { View } from "../../../../components/Themed";
import { Header } from "../../../../components/text/header";
import SpacerWrapper from "../../../../common/util/SpacerWrapper";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { RootTabScreenProps } from "../../../../../types";
import { hp } from "../../../../common/util/LayoutUtil";
import Colors from "../../../../constants/Colors";
import { ExitIcon } from "../../../../../assets/svg";
import BackButton from "../../../../components/buttons/BackButton";
import useColorScheme from "../../../../hooks/useColorScheme";
import AccountBalance from "../../home/components/AccountBalance";

const Transfer = ({ navigation }: RootTabScreenProps<"Vault">) => {
  const colorScheme = useColorScheme();

  return (
    <SpacerWrapper>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}>
          <View>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <Header
            heading="Recurring Transfer"
            description={""}
            descriptionStyle={undefined}
            headerStyle={{ marginTop: 10 }}
          />
          <TouchableOpacity>
            <ExitIcon />
          </TouchableOpacity>
        </View>
        <AccountBalance />

        <View style={[CommonStyles.passwordContainer, { bottom: hp(45) }]}>
          <Button
            title="Continue"
            // onPressButton={() =>
            //   navigation.navigate("Common", { screen: "" })
            // }
            styleText={{
              color: Colors[colorScheme].buttonText,
            }}
            style={[
              {
                backgroundColor: Colors[colorScheme].button,
              },
              CommonStyles.button,
            ]}
          />
        </View>
      </View>
    </SpacerWrapper>
  );
};

export default Transfer;
