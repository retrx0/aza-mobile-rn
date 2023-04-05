import { STORAGE_KEY_JWT_TOKEN, API_KEY } from "@env";
import { AxiosError } from "axios";
import api from "../../api";
import { getItemSecure } from "./StorageUtil";

export async function thunkCourier<T>(
  type: "get" | "post" | "put" | "patch" | "delete",
  url: string,
  data?: T
) {
  const jwt = await getItemSecure(STORAGE_KEY_JWT_TOKEN);
  return api
    .request({
      method: type,
      data: type === "get" ? undefined : data,
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
      url: url,
    })
    .then(
      (response) => {
        return response.data.data;
      },
      (error) => {
        console.debug("Thunk courier Error: " + (error as AxiosError).message);

        if (error.response) {
          // Request made and server responded
          console.debug(error.respons);
        } else if (error.request) {
          // The request was made but no response was received
          console.debug(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.debug("Error", error.message);
        }

        return Promise.reject(error);
      }
    );
}
