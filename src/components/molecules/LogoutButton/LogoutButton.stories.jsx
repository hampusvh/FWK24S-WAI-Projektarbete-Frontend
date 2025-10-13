import LogoutButton from "./LogoutButton";
import { fn } from "storybook/test";

export default {
  title: "Molecules/LogoutButton",
  component: LogoutButton,
};

export const Default = {
  args: {
    onClick: fn(),
  },
};
