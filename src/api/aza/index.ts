import api from "..";
import { IBeneficiary } from "../../redux/types";

export const verifyAzaNumber = async (azaNumber: string) => {
  const result = await api.post("/verify/aza/", { azaNumber: azaNumber });
  const ret: IBeneficiary = {
    fullName: result.data.fullName,
    azaAccountNumber: result.data.azaAccountNumber,
  };
  return ret;
};
