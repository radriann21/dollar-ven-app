import { defaultConfig } from "@tamagui/config/v5";
import { createTamagui } from "@tamagui/core";

export const config = createTamagui({
  ...defaultConfig,
  themes: {
    ...defaultConfig.themes,
    light: {
      ...defaultConfig.themes.light,
      background: "#F9F9FF",
    },
  },
});
