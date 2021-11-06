import React from "react";
import { withPerformance } from "storybook-addon-performance";

export default {
  title: "Components/Alert",
  decorators: [withPerformance],
};

export const Primary = () => <div>Hello World</div>;

export const Secondary = () => <div>Hello World</div>;

export const Tertiary = () => <div>Hello World</div>;
