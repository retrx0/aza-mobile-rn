import {
  STORAGE_KEY_JWT_TOKEN,
  STORAGE_KEY_EMAIL_OTP_ACCESS_TOKEN,
  STORAGE_KEY_PHONE_OTP_ACCESS_TOKEN,
} from "@env";
import { AxiosError } from "axios";
import api from "..";
import { getItemSecure } from "../../common/util/StorageUtil";
import { toastError } from "../../common/util/ToastUtil";

//legacy
const _apiCourier = (query: any, payload?: any) => {
  let path = api.defaults.baseURL;
  path += `/${query.model}`;
  if (query.id) path += `/${query.id}`;
  if (query.url) path += `/${query.url}`;
  // if (query.var) path += `?${QueryString.stringify(query.var)}`;

  return api(query, { data: payload })
    .then((response) => response)
    .catch((error) => ({ error }));
};

export const addJWTAuthorizationHeader = async (
  type: "jwt" | "emailOTP" | "phoneOTP" | "none"
) => {
  switch (type) {
    case "jwt":
      const jwt = await getItemSecure(STORAGE_KEY_JWT_TOKEN);
      return `Bearer ${jwt}`;
    case "emailOTP":
      const ejwt = await getItemSecure(STORAGE_KEY_EMAIL_OTP_ACCESS_TOKEN);
      return `Bearer ${ejwt}`;
    case "phoneOTP":
      const pjwt = await getItemSecure(STORAGE_KEY_PHONE_OTP_ACCESS_TOKEN);
      return `Bearer ${pjwt}`;
    default:
      return "";
  }
};

export async function apiCourier<T, R>(
  type: "get" | "post" | "patch" | "put",
  url: string,
  data: T,
  jwtAuthType: "jwt" | "emailOTP" | "phoneOTP" | "none",
  shouldReturnHeaderAccessToken?: boolean
): Promise<R> {
  try {
    const authJwt = await addJWTAuthorizationHeader(jwtAuthType);
    const result = await api.request<R>({
      method: type,
      url: url,
      data: type === "get" ? undefined : data,
      headers: {
        Authorization: authJwt,
      },
    });
    if (shouldReturnHeaderAccessToken)
      return result.headers["access-token"] as R;
    return result.data;
  } catch (e) {
    let error = e as AxiosError;
    // console.debug(error);

    // throw new AxiosError(
    //   "Api Courier: Request failed: " + error.response?.config.url,
    //   error.code,
    //   error.config,
    //   error.request,
    //   error.response
    // );
    throw error;
  }
}

export default apiCourier;
