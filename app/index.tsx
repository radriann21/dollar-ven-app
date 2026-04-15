import { DollarPriceCard } from "@/components/features/DollarPriceCard";
import { LastPrice } from "@/components/features/LastPrice";
import { AppHeader } from "@/components/ui/AppHeader";
import { ScrollView, YStack } from "tamagui";

export default function HomeScreen() {
  return (
    <YStack flex={1} backgroundColor="$background">
      <AppHeader />
      <ScrollView paddingHorizontal="$4">
        <LastPrice />
        <YStack gap="$4" marginVertical="$6">
          <DollarPriceCard />
          <DollarPriceCard />
        </YStack>
      </ScrollView>
    </YStack>
  );
}
