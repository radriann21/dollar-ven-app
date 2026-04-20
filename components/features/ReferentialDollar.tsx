import { useReferentialDollar } from "@/hooks/usePrices";
import { Circle, Text, View, XStack } from "tamagui";

export function ReferentialDollar() {
  const { data: referential } = useReferentialDollar();

  return (
    <XStack borderRadius="$4" backgroundColor="$gray3" padding="$3" gap="$2">
      <View flexDirection="row" alignItems="center" gap="8px">
        <Circle size={8} backgroundColor="$green9" marginRight="$2" />
        <Text fontWeight="bold">Dólar Referencial:</Text>
      </View>
      <View>
        <Text fontWeight="600" fontStyle="italic" color="$gray11">
          {referential?.referential.price} Bs.S
        </Text>
      </View>
    </XStack>
  );
}
