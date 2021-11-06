/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { addons } from "@storybook/addons";
import { create } from "@storybook/theming/create";

const theme = create({
  base: "light",
  colorPrimary: "#8a88c1",
  colorSecondary: "#8a88c1",
  appBg: "white",
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",
  inputBorderRadius: 4,
});

addons.setConfig({
  theme,
});
