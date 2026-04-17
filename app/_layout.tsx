import { config } from "@/constants/config";
import { QueryProvider } from "@/shared/query/queryClient";
import { TamaguiProvider } from "@tamagui/core";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <QueryProvider>
      <TamaguiProvider config={config} defaultTheme="light">
        <SafeAreaView style={{ flex: 1, backgroundColor: "#F9F9FF" }}>
          <Slot />
        </SafeAreaView>
      </TamaguiProvider>
    </QueryProvider>
  );
}
