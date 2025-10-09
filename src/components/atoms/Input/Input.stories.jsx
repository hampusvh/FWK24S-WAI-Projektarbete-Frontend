import Input from "./Input";
import { fn } from "storybook/test";

export default {
  title: "Atoms/Input",
  component: Input,
};

export const Default = {
  args: {
    type: "text",
    placeholder: "Enter text...",
    value: "",
    onChange: fn(),
  },
};

export const Password = {
  args: {
    type: "password",
    placeholder: "Enter password...",
    value: "",
    onChange: fn(),
  },
};

export const MissingArgs = {
  args: {},
};
