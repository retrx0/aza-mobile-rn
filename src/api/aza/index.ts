import api from "..";
import { Beneficiary } from "../../common/navigation/types";

export const verifyAzaNumber = async (azaNumber: string) => {
  const result = await api.post("/verify/aza/", { azaNumber: azaNumber });
  const ret: Beneficiary = {
    fullName: result.data.fullName,
    azaAccountNumber: result.data.azaAccountNumber,
  };
  return ret;
};
