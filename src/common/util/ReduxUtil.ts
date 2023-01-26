import { STORAGE_KEY_JWT_TOKEN } from "@env";
import { AxiosError } from "axios";
import api from "../../api";
import { getItemSecure } from "./StorageUtil";

export const thunkCourier = async (
  type: "get" | "post" | "put",
  url: string
) => {
  const jwt = await getItemSecure(STORAGE_KEY_JWT_TOKEN);
  return api({
    method: type,
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
    url: url,
  }).then(
    (response) => {
      return response.data.data;
    },
    (e) => {
      console.debug((e as AxiosError).message);
    }
  );
};
