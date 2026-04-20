import { ActualGap } from "@/components/features/ActualGap";
import { DollarPricesList } from "@/components/features/DollarPricesList";
import { ReferentialDollar } from "@/components/features/ReferentialDollar";
import { AppHeader } from "@/components/ui/AppHeader";
import { ScrollView, YStack } from "tamagui";

export default function HomeScreen() {
  return (
    <YStack flex={1} backgroundColor="$background">
      <AppHeader />
      <ScrollView paddingHorizontal="$4">
        <ReferentialDollar />
        <DollarPricesList />
        <ActualGap />
      </ScrollView>
    </YStack>
  );
}
