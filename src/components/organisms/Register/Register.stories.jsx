import Register from './Register';
import { fn } from "storybook/test";

export default {
  title: "Organisms/RegisterForm",
  component: Register,
}

export const Defualt = {
  args: {
    onSubmit: fn(),
  }
}