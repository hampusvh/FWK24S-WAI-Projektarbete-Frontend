import Banner from "./Banner";
import { fn } from "storybook/test";

export default {
  title: "Atoms/Banner",
  component: Banner,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "text"],
    },
  },
};

export const Default = {
  args: {
    children: "Default Banner",
    onClick: fn(),
    variant: "primary",
  },
};

export const Disabled = {
  args: {
    children: "Disabled Banner",
    disabled: true,
    onClick: fn(),
    variant: "primary",
  },
};

export const MissingArgs = { args: {} };
