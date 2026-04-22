import { useReferentialDollar } from "@/hooks/usePrices";
import { Circle, Text, XStack } from "tamagui";
import { ReferentialDollarDialog } from "./ReferentialDollarDialog";

export function ReferentialDollar() {
  const { data: referential } = useReferentialDollar();

  return (
    <XStack
      borderRadius="$4"
      backgroundColor="$gray3"
      padding="$3"
      alignItems="center"
      justifyContent="space-between"
    >
      <XStack alignItems="center" gap="$2">
        <Circle size={8} backgroundColor="$green9" />
        <Text fontWeight="bold">Dólar Referencial:</Text>
        <Text fontWeight="600" fontStyle="italic" color="$gray11">
          {referential?.referential.price} Bs.S
        </Text>
      </XStack>

      <ReferentialDollarDialog />
    </XStack>
  );
}
