import { pricesApi } from "@/shared/api/pricesApi";
import { queryKeys } from "@/shared/query/queryKeys";
import { useQuery } from "@tanstack/react-query";

export const usePrices = () => {
  return useQuery({
    queryKey: queryKeys.lastPrices.all,
    queryFn: () => pricesApi.getLastPrices(),
  });
};
