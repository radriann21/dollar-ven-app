import { LastPricesResponse } from "@/interfaces/interfaces";
import { apiClient } from "./apiClient";

export const pricesApi = {
  getLastPrices: async (): Promise<LastPricesResponse> => {
    const response = await apiClient.get("/rates/last");
    return response.data;
  },
};
