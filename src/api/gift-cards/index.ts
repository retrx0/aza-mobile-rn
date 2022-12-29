import api from "..";

import { STORAGE_KEY_JWT_TOKEN } from "@env";
import { getItemSecure } from "../../common/util/StorageUtil";

export const checkGiftCardsEndpointHealthAPI = async () => {
  try {
    const result = await api.get("/api/v1/gift-cards/health");
    if (result.status === 200) return result.data;
    return undefined;
  } catch (e) {
    console.log(e);
  }
};

export const getGiftCardsByCountryAPI = async (country: string) => {
  try {
    const jwt = await getItemSecure(STORAGE_KEY_JWT_TOKEN);
    const result = await api.get(`/api/v1/gift-cards/${country}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    if (result.status === 200) return result.data;
    return undefined;
  } catch (e) {
    console.log(e);
  }
};

export const getGiftCardsBrandsByCountryAPI = async (country: string) => {
  try {
    const jwt = await getItemSecure(STORAGE_KEY_JWT_TOKEN);
    const result = await api.get(`/api/v1/gift-cards/brand/${country}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    if (result.status === 200) return result.data;
    return undefined;
  } catch (e) {
    console.log(e);
  }
};

export const searchGiftCardsAPI = async (
  countryISO: string,
  searchTerm: string
) => {
  try {
    const jwt = await getItemSecure(STORAGE_KEY_JWT_TOKEN);
    const result = await api.get(
      `/api/v1/gift-cards/brand/${countryISO}/search?searchTerm=${searchTerm}`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    if (result.status === 200) return result.data;
    return undefined;
  } catch (e) {
    console.log(e);
  }
};

export const getGiftCardCountriesAPI = async () => {
  try {
    const jwt = await getItemSecure(STORAGE_KEY_JWT_TOKEN);
    const result = await api.get(`/api/v1/gift-cards`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    if (result.status === 200) return result.data;
    return undefined;
  } catch (e) {
    console.log(e);
  }
};

export const orderGiftCardAPI = async (
  productId: string,
  orderAmount: number,
  quantity: number,
  sourceAccount: string
) => {
  try {
    const jwt = await getItemSecure(STORAGE_KEY_JWT_TOKEN);
    const result = await api.post(
      `/api/v1/gift-cards/order/${productId}`,
      {
        productId,
        orderAmount,
        quantity,
        sourceAccount,
      },
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    if (result.status === 200) return result.data;
    return undefined;
  } catch (e) {
    console.log(e);
  }
};
