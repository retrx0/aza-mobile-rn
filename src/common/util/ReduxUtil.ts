import { STORAGE_KEY_JWT_TOKEN } from "@env";
import { AxiosError } from "axios";
import api from "../../api";
import { getItemSecure } from "./StorageUtil";

export async function thunkCourier<T>(
  type: "get" | "post" | "put" | "patch",
  url: string,
  data?: T
) {
  const jwt = await getItemSecure(STORAGE_KEY_JWT_TOKEN);
  return api({
    method: type,
    data: type === "get" ? undefined : data,
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
    url: url,
  }).then(
    (response) => {
      return response.data.data;
    },
    (e) => {
      console.debug("Thunk courier Error: " + (e as AxiosError).message);
    }
  );
}
