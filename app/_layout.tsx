import { config } from "@/constants/config";
import { QueryProvider } from "@/shared/query/queryClient";
import { TamaguiProvider } from "@tamagui/core";
import "@tamagui/native/setup-burnt";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { PortalProvider, ToastProvider } from "tamagui";

export default function RootLayout() {
  return (
    <QueryProvider>
      <TamaguiProvider config={config} defaultTheme="light">
        <ToastProvider>
          <PortalProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: "#F9F9FF" }}>
              <Slot />
            </SafeAreaView>
          </PortalProvider>
        </ToastProvider>
      </TamaguiProvider>
    </QueryProvider>
  );
}
