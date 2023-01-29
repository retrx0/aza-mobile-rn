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
    (error) => {
      console.debug("Thunk courier Error: " + (error as AxiosError).message);

      if (error.response) {
        // Request made and server responded
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }

      Promise.reject(error);
    }
  );
}
