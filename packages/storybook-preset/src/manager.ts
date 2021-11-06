import { addons } from "@storybook/addons";
import { create } from "@storybook/theming/create";

export const theme = create({
  base: "light",
  colorPrimary: "#8a88c1",
  colorSecondary: "#8a88c1",
  appBg: "white",
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",
  inputBorderRadius: 4,
  // brandTitle: "My custom storybook",
  // brandUrl: "https://example.com",
  // brandImage: "https://place-hold.it/350x150",
});

addons.setConfig({
  theme,
});
