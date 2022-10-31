import api from "..";
import apiCourier from "../courier";

export const fetchAirtimeOperators = async () => {
  // return await apiCourier("/api/top-up/operators");
  return await api.get("/api/top-up/operators");
};
