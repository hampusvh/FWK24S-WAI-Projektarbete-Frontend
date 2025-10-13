import Login from "./Login";
import { action } from 'storybook/actions';

export default {
  title: "Organisms/Login",
  component: Login,
};

export const Default = {
  args: {
    handleSubmit: action("form submitted"),
    loading: false,
  },
};

export const Error = {
  args: {
    handleSubmit: action("form submitted"),
    loading: false,
    error: "This is a error message",
  },
};