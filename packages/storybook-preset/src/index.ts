import { withPerformance } from "storybook-addon-performance";

export const managerEntries = (entry) => {
  return [...entry, require.resolve("./manager")];
};

export const addons: string[] = [
  "@storybook/addon-essentials",
  "@storybook/addon-a11y",
  "@storybook/addon-jest",
  "storybook-addon-designs",
  "storybook-addon-performance",
];

export const managerHead = (head): string => `
  ${head}
  <link rel="stylesheet" href="src/index.css" />
`;

export const decorators = [withPerformance];
