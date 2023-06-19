import api from "..";

import apiCourier from "../courier";
import {
  IAddBVNRequest,
  IIdentifyAzaContactRequest,
  IRegisterUserRequest,
} from "../../libs/requests";
import {
  IAddUserBVNResponse,
  IIdentifyAzaContactResponse,
} from "../../libs/response";
import { IRegisterUserResponse } from "../../libs";

export const checkUserEndpointHealthAPI = async () => {
  try {
    const result = await api.get("/api/v1/user/health");
    if (result.status === 200) return result.data;
    return undefined;
  } catch (e) {
    console.log(e);
  }
};

// Use only without the need to update data in redux, else call the dispatch(getUserInfo)

// export const old_registerUserAPI = async (data: IRegisterUserRequest) => {
//   try {
//     const jwt = await SecureStore.getItemAsync(
//       STORAGE_KEY_PHONE_OTP_ACCESS_TOKEN
//     );
//     const result = await api.put("/api/v1/user/register", data, {
//       headers: {
//         Authorization: `Bearer ${jwt}`,
//       },
//     });
//     if (result.status === 200) return result.data;
//     return undefined;
//   } catch (e) {
//     const err = e as AxiosError;
//     console.debug("Error registering user: ", err.message);
//     if (err.status && err.status === "409") {
//       toastError("User already registered!");
//     } else {
//       toastError("We encountered a problem while creating your account ⚠️");
//     }
//   }
// };

export const registerUserAPI = async (data: IRegisterUserRequest) => {
  return await apiCourier<IRegisterUserRequest, IRegisterUserResponse>(
    "put",
    "/api/v1/user/register",
    data,
    "phoneOTP"
  );
};

export const changePasswordAPI = async (
  oldPassword: string,
  newPassword: string
) => {
  return await apiCourier(
    "patch",
    "/api/v1/user/change-password",
    {
      oldPassword,
      newPassword,
    },
    "jwt"
  );
};

export const verifyEmailAPI = async (email: string) => {
  return await apiCourier(
    "patch",
    "/api/v1/user/verify-email",
    {
      email,
    },
    "jwt"
  );
};

export const setUserTransactionPinAPI = async (newTransactionPin: string) => {
  return await apiCourier(
    "patch",
    "/api/v1/user/set/transactionPin",
    {
      newTransactionPin,
    },
    "jwt"
  );
};

export const createPinAPI = async (newTransactionPin: string) => {
  return await apiCourier(
    "patch",
    "/api/v1/user/create-pin",
    {
      newTransactionPin,
    },
    "jwt"
  );
};

export const updatePinAPI = async (oldPin: string, newPin: string) => {
  return await apiCourier(
    "patch",
    "/api/v1/user/update-pin",
    {
      oldPin,
      newPin,
    },
    "jwt"
  );
};

export const resetPinAPI = async (newTransactionPin: string) => {
  return await apiCourier(
    "post",
    "/api/v1/user/reset-pin",
    {
      newTransactionPin,
    },
    "jwt"
  );
};

export const inviteUserAPI = async (phoneNumber: string, email: string) => {
  return await apiCourier(
    "post",
    "/api/v1/user/invite",
    {
      phoneNumber,
      email,
    },
    "jwt"
  );
};

export const getUserLoginInfoAPI = async (email: string) => {
  return await apiCourier<
    null,
    {
      data: {
        fullName: string;
        phoneNumber: string;
        profilePictureUrl: string;
      };
      message: string;
      requestState: string;
      statusCode: string;
    }
  >("get", `/api/v1/user/${email}`, null, "jwt");
};

export const updateUserNotificationToken = async (newPushToken: string) => {
  return await apiCourier<any, any>(
    "patch",
    "/api/v1/user/update-push-token",
    {
      newPushToken,
    },
    "jwt"
  );
};

export const editNameAPI = async ({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) => {
  return await apiCourier<
    {
      firstName: string;
      lastName: string;
    },
    unknown
  >("patch", "/api/v1/user/edit-name", { firstName, lastName }, "jwt");
};

export const identifyAzaUserAPI = async ({
  contactName,
  contactPhoneNumber,
}: IIdentifyAzaContactRequest) => {
  return await apiCourier<
    IIdentifyAzaContactRequest,
    IIdentifyAzaContactResponse
  >(
    "post",
    "/api/v1/user/identify/contact",
    {
      contactPhoneNumber,
      contactName,
    },
    "jwt"
  );
};

export const addBVNAPI = async ({ bvn, dateOfBirth }: IAddBVNRequest) => {
  return await apiCourier<IAddBVNRequest, IAddUserBVNResponse>(
    "post",
    "/api/v1/user/add-bvn",
    { bvn, dateOfBirth },
    "jwt"
  );
};

const deleteUserAPI = async () => {};

const getUserAccountStatus = async (email: string) => {};
