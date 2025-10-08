import Button from "./Button";
import { fn } from 'storybook/test';

export default {
  title: "Atoms/Button",
  component: Button,
};

export const Default = {
  args: {
    children: "Default button",
    onClick: fn(),
  },
};

export const Disabled = {
  args: {
    children: "Disabled button",
    disabled: true,
    onClick: fn(),
  },
};

export const MissingArgs = {
  args: {
  },
};
