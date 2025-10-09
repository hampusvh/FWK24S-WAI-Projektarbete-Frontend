import Login from "./Login";
import { fn } from "storybook/test";

export default {
  title: "Organisms/Login",
  component: Login,
};

export const Default = {
  args: {
    onSubmit: fn(),
  },
};
