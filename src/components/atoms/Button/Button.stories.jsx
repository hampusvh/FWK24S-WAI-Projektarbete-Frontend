import Button from "./Button";
import { fn } from "storybook/test";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "text"],
    },
  },
};

export const Default = {
  args: {
    children: "Default button",
    onClick: fn(),
    variant: "primary",
  },
};

export const Disabled = {
  args: {
    children: "Disabled button",
    disabled: true,
    onClick: fn(),
    variant: "primary",
  },
};

export const MissingArgs = { args: {} };
