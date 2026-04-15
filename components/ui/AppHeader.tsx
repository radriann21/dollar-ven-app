import { Ionicons } from "@expo/vector-icons";
import { H3, View, XStack } from "tamagui";

export function AppHeader() {
  return (
    <XStack
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      padding="$4"
    >
      <View display="flex" flexDirection="row" alignItems="center" gap="$2">
        <View width={24} height={24} backgroundColor="$green10">
          <Ionicons name="logo-usd" size={24} color="white" />
        </View>
        <H3 color="black">Dolar Ven</H3>
      </View>
    </XStack>
  );
}
