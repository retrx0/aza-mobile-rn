import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

import {
  BankIcon,
  CameraIcon,
  ClockIcon,
  CreditCardIcon,
  FeesAndLimitsIcon,
  GalleryIcon,
  GraphIcon,
  HeadphoneIcon,
  LogoutIcon,
  MessageQuestionIcon,
  RecurringTransferIcon,
  RequestMoneyIcon,
  SendMoneyIcon,
  SplitIcon,
  TrashIcon,
  UserIcon,
} from "../../../../../assets/svg";

import { RootTabScreenProps } from "../../../../../types";
import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";

export const useBottomSheetType = (
  itemToReturn: string,
  { navigation }: RootTabScreenProps<"Home">
) => {
  const [image, setImage] = useState("");

  const selectImageFromGallaery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const { uri } = result;
      setImage(uri);
    }
  };

  const takePhoto = async () => {
    const permissionStatus = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionStatus.status === "granted") {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        const { uri } = result;
        setImage(uri);
      }
    }
  };

  const colorScheme = useColorScheme();
  const [isChoosePhoto, setChoosePhoto] = useState(false);
  const [items, _] = useState({
    menuBottomSheetListItems: [
      {
        itemName: "Split",
        itemIcon: <SplitIcon size={16} color={Colors[colorScheme].mainText} />,
        onPress: () => navigation.navigate("Common", { screen: "Split" }),
      },
      {
        itemName: "Monthly Summary",
        itemIcon: <GraphIcon size={16} color={Colors[colorScheme].mainText} />,
        onPress: () =>
          navigation.navigate("Common", { screen: "MonthlySummary" }),
      },
      {
        itemName: "Fees & Limits",
        itemIcon: (
          <FeesAndLimitsIcon size={16} color={Colors[colorScheme].mainText} />
        ),
        onPress: () =>
          navigation.navigate("Common", { screen: "FeesAndLimits" }),
      },
      {
        itemName: "Frequently Asked Questions (FAQs)",
        itemIcon: (
          <MessageQuestionIcon size={16} color={Colors[colorScheme].mainText} />
        ),
        onPress: () => console.log("called"),
      },
      {
        itemName: "Customer Support",
        itemIcon: (
          <HeadphoneIcon size={16} color={Colors[colorScheme].mainText} />
        ),
        onPress: () => console.log("called"),
      },
    ],
    profileBottomSheetListItems: [
      {
        itemName: "Choose Profile Photo",
        itemIcon: (
          <GalleryIcon size={16} color={Colors[colorScheme].mainText} />
        ),
        onPress: () => setChoosePhoto(true),
      },
      {
        itemName: "Account Details",
        itemIcon: <UserIcon size={16} color={Colors[colorScheme].mainText} />,
        onPress: () =>
          navigation.navigate("Common", { screen: "AccountDetails" }),
      },
      {
        itemName: "Transaction History",
        itemIcon: <ClockIcon size={16} color={Colors[colorScheme].mainText} />,
        onPress: () =>
          navigation.navigate("Common", { screen: "TransactionHistory" }),
      },
      {
        itemName: "Bank Accounts",
        itemIcon: <BankIcon size={16} color={Colors[colorScheme].mainText} />,
        onPress: () =>
          navigation.navigate("Common", {
            screen: "BankAccounts",
            params: {
              screenType: "Bank Account",
            },
          }),
      },
      {
        itemName: "Debit/Credit Cards",
        itemIcon: (
          <CreditCardIcon size={16} color={Colors[colorScheme].mainText} />
        ),
        onPress: () => {
          navigation.navigate("Common", { screen: "DebitCreditCards" });
        },
      },
      {
        itemName: "Sign out",
        itemIcon: <LogoutIcon size={16} color={Colors[colorScheme].mainText} />,
        onPress: () => {
          navigation.navigate("Welcome");
        },
      },
    ],
    transferBottomSheetListItems: [
      {
        itemName: "Send Money",
        itemIcon: (
          <SendMoneyIcon size={16} color={Colors[colorScheme].mainText} />
        ),
        onPress: () => navigation.navigate("Common", { screen: "SendMoney" }),
      },
      {
        itemName: "Request Money",
        itemIcon: (
          <RequestMoneyIcon size={16} color={Colors[colorScheme].mainText} />
        ),
        onPress: () =>
          navigation.navigate("Common", { screen: "RequestMoney" }),
      },
      {
        itemName: "Recurring Transfer",
        itemIcon: (
          <RecurringTransferIcon
            size={16}
            color={Colors[colorScheme].mainText}
          />
        ),
        onPress: () =>
          navigation.navigate("Common", { screen: "RecurringTransfer" }),
      },
    ],
    choosePhotoBottomSheetListItems: [
      {
        itemName: "Take Photo",
        itemIcon: <CameraIcon size={16} color={Colors[colorScheme].mainText} />,
        onPress: () => takePhoto(),
      },
      {
        itemName: "Select from Gallery",
        itemIcon: (
          <GalleryIcon size={16} color={Colors[colorScheme].mainText} />
        ),
        onPress: () => selectImageFromGallaery(),
      },
      {
        itemName: "Delete Profile Picture",
        itemIcon: <TrashIcon size={16} color={Colors[colorScheme].mainText} />,
        onPress: () => console.log("called"),
      },
    ],
  });

  return itemToReturn === "menu"
    ? items.menuBottomSheetListItems
    : itemToReturn === "profile"
    ? isChoosePhoto
      ? {
          profileBottomSheetListItems: items.choosePhotoBottomSheetListItems,
          setChoosePhoto,
        }
      : {
          profileBottomSheetListItems: items.profileBottomSheetListItems,
          setChoosePhoto,
        }
    : items.transferBottomSheetListItems;
};
