import ProfileButton from "./ProfileButton";
import { fn } from "storybook/test";

export default {
  title: "Molecules/ProfileButton",
  component: ProfileButton,
};

export const Default = {
  args: {
    onClick: fn(),
  },
};
