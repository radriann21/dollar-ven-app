import { ActualGap } from "@/components/features/ActualGap";
import { DollarPriceCard } from "@/components/features/DollarPriceCard";
import { LastPrice } from "@/components/features/LastPrice";
import { AppHeader } from "@/components/ui/AppHeader";
import { usePrices } from "@/hooks/usePrices";
import { ScrollView, YStack } from "tamagui";

export default function HomeScreen() {
  const { data: prices, isPending } = usePrices();

  return (
    <YStack flex={1} backgroundColor="$background">
      <AppHeader />
      <ScrollView paddingHorizontal="$4">
        <LastPrice />
        <YStack gap="$4" marginVertical="$6">
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
        <ActualGap />
      </ScrollView>
    </YStack>
  );
}
