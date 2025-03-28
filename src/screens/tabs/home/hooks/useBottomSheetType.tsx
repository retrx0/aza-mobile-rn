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

import {
  RootStackScreenProps,
  RootTabScreenProps,
} from "../../../../types/types.navigation";
import Colors from "../../../../constants/Colors";
import { getAppTheme } from "../../../../theme";

import { toastError, toastSuccess } from "../../../../common/util/ToastUtil";

import { useAppDispatch, useAppSelector } from "../../../../redux";
import { selectAppTheme } from "../../../../redux/slice/themeSlice";
import {
  getUserInfo,
  uploadProfilePicThunk,
} from "../../../../redux/slice/userSlice";
import { forgetUser } from "../../../auth/signin/helpers";
import { updateStoredCredentials } from "../../../../common/util/StorageUtil";

export const useBottomSheetType = (
  itemToReturn: string,
  { navigation }: RootStackScreenProps<"Root">
) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const selectImageFromGallaery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    });

    if (!result.canceled) {
      const { assets } = result;
      const formData = new FormData();
      formData.append("ProfilePicture", {
        uri: assets[0].uri,
        name: `${assets[0].fileName}`,
        type: `image/${assets[0].uri.split(".").pop()}`,
      } as any);

      setLoading(true);
      dispatch(uploadProfilePicThunk(formData))
        .unwrap()
        .then((url) => {
          toastSuccess("Your picture has been successfully uploaded");
          dispatch(getUserInfo());

          updateStoredCredentials({
            pictureUrl: url,
          })
            .then((v) => console.debug("credentials updated!"))
            .catch((e) => console.error("failed to updated credentials " + e));
          setLoading(false);
        })
        .catch(() => {
          toastError("Error uploading profile picture");
          setLoading(false);
        });
    }
  };

  const takePhoto = async () => {
    const permissionStatus = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionStatus.status === "granted") {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.3,
      });

      if (!result.canceled) {
        const { assets } = result;
        const formData = new FormData();
        formData.append("ProfilePicture", {
          uri: assets[0].uri,
          name: `${assets[0].fileName}`,
          type: `image/${assets[0].uri.split(".").pop()}`,
        } as any);
        setLoading(true);
        dispatch(uploadProfilePicThunk(formData))
          .unwrap()
          .then((url) => {
            toastSuccess("Your picture has been successfully uploaded");
            dispatch(getUserInfo());
            updateStoredCredentials({
              pictureUrl: url,
            })
              .then((v) => console.debug("credentials updated!"))
              .catch((e) =>
                console.error("failed to updated credentials " + e)
              );
            setLoading(false);
          })
          .catch(() => {
            toastError("Error uploading profile picture");
            setLoading(false);
          });
      }
    }
  };

  const appTheme = getAppTheme(useAppSelector(selectAppTheme));
  const [isChoosePhoto, setChoosePhoto] = useState(false);
  const [items, _] = useState({
    menuBottomSheetListItems: [
      {
        itemName: "Split",
        itemIcon: <SplitIcon size={16} />,
        onPress: () => navigation.navigate("Common", { screen: "Split" }),
      },
      // {
      //   itemName: "Monthly Summary",
      //   itemIcon: <GraphIcon size={16} />,
      //   onPress: () =>
      //     navigation.navigate("Common", { screen: "MonthlySummary" }),
      // },
      {
        itemName: "Fees & Limits",
        itemIcon: <FeesAndLimitsIcon size={16} />,
        onPress: () =>
          navigation.navigate("Common", { screen: "FeesAndLimits" }),
      },
      // {
      //   itemName: "Frequently Asked Questions (FAQs)",
      //   itemIcon: (
      //     <MessageQuestionIcon size={16} color={Colors[colorScheme].mainText} />
      //   ),
      //   onPress: () => console.log("called"),
      // },
      {
        itemName: "Contact Us",
        itemIcon: <HeadphoneIcon size={16} />,
        onPress: () => navigation.navigate("Common", { screen: "ContactUs" }),
      },
    ],
    profileBottomSheetListItems: [
      {
        itemName: "Choose Profile Photo",
        itemIcon: <GalleryIcon size={16} />,
        onPress: () => setChoosePhoto(true),
      },
      {
        itemName: "Account Details",
        itemIcon: <UserIcon size={16} />,
        onPress: () =>
          navigation.navigate("Common", { screen: "AccountDetails" }),
      },
      {
        itemName: "Transaction History",
        itemIcon: <ClockIcon size={16} />,
        onPress: () =>
          navigation.navigate("Common", { screen: "TransactionHistory" }),
      },
      {
        itemName: "Bank Accounts",
        itemIcon: <BankIcon size={16} />,
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
        itemIcon: <CreditCardIcon size={16} />,
        onPress: () => {
          navigation.navigate("Common", { screen: "DebitCreditCards" });
        },
      },
      {
        itemName: "Sign out",
        itemIcon: <LogoutIcon size={16} />,
        onPress: () => {
          // setLoading(true);
          forgetUser()
            .then(() => {
              // setLoading(false);
              navigation.navigate("Welcome");
            })
            .catch((e) => {
              /* setLoading(false) */
            });
        },
      },
    ],
    transferBottomSheetListItems: [
      {
        itemName: "Send Money",
        itemIcon: <SendMoneyIcon size={16} />,
        onPress: () =>
          navigation.navigate("Common", { screen: "SendMoney", params: {} }),
      },
      // {
      //   itemName: "Request Money",
      //   itemIcon: <RequestMoneyIcon size={16} />,
      //   onPress: () =>
      //     navigation.navigate("Common", { screen: "RequestMoney" }),
      // },
      // {
      //   itemName: "Recurring Transfer",
      //   itemIcon: <RecurringTransferIcon size={16} />,
      //   onPress: () =>
      //     navigation.navigate("Common", { screen: "RecurringTransfer" }),
      // },
    ],
    choosePhotoBottomSheetListItems: [
      {
        itemName: "Take Photo",
        itemIcon: <CameraIcon size={16} />,
        onPress: () => takePhoto(),
      },
      {
        itemName: "Select from Gallery",
        itemIcon: <GalleryIcon size={16} />,
        onPress: () => selectImageFromGallaery(),
      },
      {
        itemName: "Delete Profile Picture",
        itemIcon: <TrashIcon size={16} />,
        onPress: () => console.log("called"),
      },
    ],
  });

  const menuBottomSheets =
    itemToReturn === "menu"
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

  return { menuBottomSheets, loading };
};
