import { MaterialCommunityIcons } from "@expo/vector-icons";
import { H2, H5, Text, View, XStack, YStack } from "tamagui";

export function DollarPriceCard() {
  return (
    <View
      backgroundColor="white"
      borderRadius="$4"
      padding="$5"
      display="flex"
      flexDirection="column"
      gap="$4"
      shadowColor="#000"
      shadowOpacity={0.05}
      shadowRadius={8}
      shadowOffset={{ width: 0, height: 2 }}
    >
      <XStack alignItems="flex-start" justifyContent="space-between">
        <YStack gap="$1">
          <Text
            fontSize={10}
            fontWeight="700"
            color="$gray10"
            letterSpacing={1}
          >
            OFICIAL BCV
          </Text>
          <H5 fontWeight="800" color="$gray12">
            Banco Central
          </H5>
        </YStack>

        <View borderRadius="$3" backgroundColor="#F0F4FF" padding="$2">
          <MaterialCommunityIcons name="bank" size={22} color="#0D7A5E" />
        </View>
      </XStack>

      <YStack gap="$2" marginTop="$2">
        <XStack alignItems="baseline" gap="$2">
          <H2 fontWeight="900" color="$gray12">
            36.50
          </H2>
          <Text fontSize={16} fontWeight="700" color="$gray10">
            VES
          </Text>
        </XStack>

        <XStack alignItems="center" gap="$1">
          <MaterialCommunityIcons
            name="trending-up"
            size={16}
            color="#0D7A5E"
          />
          <Text fontSize={13} fontWeight="600" color="#0D7A5E">
            +0.12% Today
          </Text>
        </XStack>
      </YStack>
    </View>
  );
}
