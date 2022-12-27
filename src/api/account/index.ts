import { AxiosError } from "axios";
import api from "..";
import { toastError } from "../../common/util/ToastUtil";

const createVFDAccount = async (data: { bvn: string }) => {
  try {
    const response = await api.post(`/api/v1/account/create`, data);
    if (response.status === 200) return response.data.data;
    return undefined;
  } catch (e) {
    if ((e as AxiosError).response) {
      if ((e as AxiosError).response?.status === 404)
        toastError("Email address not valid!");
      else toastError("We encountered an error, please try again!");
    }
    console.debug("Error get user login details: ", e as Error);
  }
};

const fetchVFDAccountData = async () => {};

const closeVFDAccount = async () => {};
