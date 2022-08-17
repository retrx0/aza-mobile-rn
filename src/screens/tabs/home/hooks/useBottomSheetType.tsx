import { useState } from "react";

import {
  BankIcon,
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
  UserIcon,
} from "../../../../../assets/svg";
import Colors from "../../../../constants/Colors";
import useColorScheme from "../../../../hooks/useColorScheme";

export const useBottomSheetType = (itemToReturn: string) => {
  const colorScheme = useColorScheme();
  const [items, _] = useState({
    menuBottomSheetListItems: [
      {
        itemName: "Split",
        itemIcon: <SplitIcon size={16} color={Colors[colorScheme].mainText} />,
        onPress: () => console.log("called"),
      },
      {
        itemName: "Monthly Summary",
        itemIcon: <GraphIcon size={16} color={Colors[colorScheme].mainText} />,
        onPress: () => console.log("called"),
      },
      {
        itemName: "Fees & Limits",
        itemIcon: (
          <FeesAndLimitsIcon size={16} color={Colors[colorScheme].mainText} />
        ),
        onPress: () => console.log("called"),
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
        onPress: () => console.log("called"),
      },
      {
        itemName: "Account Details",
        itemIcon: <UserIcon size={16} color={Colors[colorScheme].mainText} />,
        onPress: () => console.log("called"),
      },
      {
        itemName: "Transaction History",
        itemIcon: <ClockIcon size={16} color={Colors[colorScheme].mainText} />,
        onPress: () => console.log("called"),
      },
      {
        itemName: "Bank Accounts",
        itemIcon: <BankIcon size={16} color={Colors[colorScheme].mainText} />,
        onPress: () => console.log("called"),
      },
      {
        itemName: "Debit/Credit Cards",
        itemIcon: (
          <CreditCardIcon size={16} color={Colors[colorScheme].mainText} />
        ),
        onPress: () => console.log("called"),
      },
      {
        itemName: "Sign out",
        itemIcon: <LogoutIcon size={16} color={Colors[colorScheme].mainText} />,
        onPress: () => console.log("called"),
      },
    ],
    transferBottomSheetListItems: [
      {
        itemName: "Send Money",
        itemIcon: (
          <SendMoneyIcon size={16} color={Colors[colorScheme].mainText} />
        ),
        onPress: () => console.log("called"),
      },
      {
        itemName: "Request Money",
        itemIcon: (
          <RequestMoneyIcon size={16} color={Colors[colorScheme].mainText} />
        ),
        onPress: () => console.log("called"),
      },
      {
        itemName: "Recurring Transfer",
        itemIcon: (
          <RecurringTransferIcon
            size={16}
            color={Colors[colorScheme].mainText}
          />
        ),
        onPress: () => console.log("called"),
      },
    ],
  });

  return itemToReturn === "menu"
    ? items.menuBottomSheetListItems
    : itemToReturn === "profile"
    ? items.profileBottomSheetListItems
    : items.transferBottomSheetListItems;
};
