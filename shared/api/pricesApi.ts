import {
  ActualGapResponse,
  LastPricesResponse,
  ReferentialDollar,
} from "@/interfaces/interfaces";
import { apiClient } from "./apiClient";

export const pricesApi = {
  getLastPrices: async (): Promise<LastPricesResponse> => {
    const response = await apiClient.get("/rates/last");
    return response.data;
  },
  getActualGap: async (): Promise<ActualGapResponse> => {
    const response = await apiClient.get("/analitics/gap");
    return response.data;
  },
  getReferentialDollar: async (): Promise<ReferentialDollar> => {
    const response = await apiClient.get("/analitics/referential");
    return response.data;
  },
};
