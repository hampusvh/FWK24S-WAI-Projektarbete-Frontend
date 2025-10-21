import Login from "./Login";
import { action } from "storybook/actions";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Organisms/Login",
  component: Login,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Default = {
  args: {
    handleSubmit: action("form submitted"),
    loading: false,
  },
};
