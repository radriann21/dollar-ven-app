import { DollarPriceCard } from "@/components/features/DollarPriceCard";
import { usePrices } from "@/hooks/usePrices";
import { YStack } from "tamagui";

export function DollarPricesList() {
  const { data: prices, isPending } = usePrices();
  return (
    <YStack gap="$4" marginVertical="$4">
      <DollarPriceCard
        source="BCV"
        officialName="Banco Central de Venezuela"
        price={prices?.bcv.price}
      />
      <DollarPriceCard
        source="Binance"
        officialName="Binance P2P"
        price={prices?.binance.price}
      />
    </YStack>
  );
}
