import React, { useState } from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import { DangerIcon } from "../../../../../assets/svg";
import { RootTabScreenProps } from "../../../../types/types.navigation";
import { hp } from "../../../../common/util/LayoutUtil";
import Colors from "../../../../constants/Colors";
import { View, Text } from "../../../../theme/Themed";
import CommonStyles from "../../../../common/styles/CommonStyles";
import { useAppDispatch, useAppSelector } from "../../../../redux";
import {
  getUserAccountDetails,
  getUserInfo,
  selectUser,
} from "../../../../redux/slice/userSlice";
import { create9PSBWallet } from "../../../../api/account";
import { toastError, toastSuccess } from "../../../../common/util/ToastUtil";
import { AxiosError } from "axios";

interface IProps {
  isWalletCreated: boolean;
}

export const CreateWallet = ({
  navigation,
  isWalletCreated,
}: RootTabScreenProps<"Home"> & IProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    bvnNumber,
    bvnVerified,
    dateOfBirth,
    aza9PSBAccountNumber,
    azaAccountNumber,
  } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  return (
    <View
      style={{
        marginTop: hp(10),
        backgroundColor: "#FAEB9E",
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 10,
        display: isWalletCreated ? "none" : "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "row",
      }}
    >
      <DangerIcon />
      <View
        style={{
          marginLeft: 10,
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "transparent",
        }}
      >
        <Text
          darkColor={Colors["general"].black}
          style={{
            fontFamily: "Euclid-Circular-A-Semi-Bold",
            fontSize: hp(16),
          }}
        >
          Your BVN is linked but your wallet is not your created
        </Text>
        <Text
          darkColor={Colors["general"].black}
          style={{
            fontSize: hp(12),
            marginTop: 5,
          }}
        >
          Please click the button below to create a wallet.
        </Text>
        <View
          style={[
            CommonStyles.row,
            { backgroundColor: "#FAEB9E", alignSelf: "flex-start" },
          ]}
        >
          <TouchableOpacity
            onPress={() => {
              setIsLoading(true);
              if (bvnVerified) {
                if (aza9PSBAccountNumber === null) {
                  create9PSBWallet({ bvn: bvnNumber, dateOfBirth: dateOfBirth })
                    .then(() => {
                      dispatch(getUserAccountDetails());
                      dispatch(getUserInfo());
                      toastSuccess("Your account is created 🎉");
                      setIsLoading(false);
                    })
                    .catch((e) => {
                      const error = e as AxiosError;
                      console.error(
                        "There was a problem creating your wallet",
                        error
                      );
                      // toastError("There was a problem creating your wallet");
                      setIsLoading(false);
                    });
                } else {
                  setIsLoading(false);
                }
              } else {
                toastError("BVN is not linked!");
                setIsLoading(false);
              }
            }}
            disabled={isLoading}
          >
            <View
              style={{
                backgroundColor: "transparent",
                borderBottomWidth: 1,
                paddingBottom: 1,
                marginTop: 10,
                alignSelf: "flex-start",
              }}
            >
              <Text
                darkColor={Colors["dark"].buttonText}
                style={{
                  fontSize: hp(14),
                  fontFamily: "Euclid-Circular-A-Medium",
                }}
              >
                Create a wallet
              </Text>
            </View>
          </TouchableOpacity>
          <ActivityIndicator
            animating={isLoading}
            size={20}
            style={{
              marginTop: 10,
              alignSelf: "center",
              paddingHorizontal: 10,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default CreateWallet;
