import { STORAGE_KEY_JWT_TOKEN } from "@env";
import { AxiosError } from "axios";
import api from "..";
import { getItemSecure } from "../../common/util/StorageUtil";

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

export async function apiCourier<T>(
  type: "get" | "post" | "patch" | "put",
  url: string,
  data: T
) {
  try {
    const jwt = await getItemSecure(STORAGE_KEY_JWT_TOKEN);
    const result = await api.request({
      method: type,
      url: url,
      data: type === "get" ? undefined : data,
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    if (result.status === 200) return result.data;
    return undefined;
  } catch (e) {
    throw new Error(
      "Error making request: " + (e as AxiosError).response?.config.url,
      e as AxiosError
    );
  }
}

export default apiCourier;
