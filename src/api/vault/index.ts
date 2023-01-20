import api from "..";

export const checkVaultEndpointHealthAPI = async () => {
  try {
    const result = await api.get("/api/v1/vault/health");
    if (result.status === 200) return result.data;
    return undefined;
  } catch (e) {
    console.log(e);
  }
};
