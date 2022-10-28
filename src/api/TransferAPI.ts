import api from ".";
import { Beneficiary } from "../common/navigation/types";

export const getBeneficiaryDetails = ({}: {
  fullName: string;
}): Beneficiary => {
  // api.get("/getAzaDetails", {})

  return {
    azaAccountNumber: "12333536",
    fullName: "",
    pictureUrl: "",
    currency: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  };
};
