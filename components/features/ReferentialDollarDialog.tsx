import { Ionicons } from "@expo/vector-icons";
import { Dialog, Text, YStack } from "tamagui";

export const ReferentialDollarDialog = () => {
  return (
    <Dialog modal>
      <Dialog.Trigger asChild>
        <Ionicons name="information-circle-outline" size={16} color="#8e8e93" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay backgroundColor="rgba(0, 0, 0, 0.6)" />

        <Dialog.Content
          bordered
          elevate
          backgroundColor="white"
          borderRadius="$6"
          padding={24}
          width="100%"
          maxWidth={360}
        >
          <YStack gap="$3">
            <Dialog.Title fontSize="$4" fontWeight="bold" color="$gray12">
              ¿Qué es el dólar referencial?
            </Dialog.Title>

            <Text fontSize="$3" color="$gray11" lineHeight="$2">
              Calcula una tasa de referencia ponderada (60% BCV + 40% Binance)
              que representa un precio medio entre el oficial y el paralelo.
            </Text>

            <Dialog.Close position="absolute" top={0} right={0} asChild>
              <Ionicons name="close-circle" size={28} color="#8e8e93" />
            </Dialog.Close>
          </YStack>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
};
