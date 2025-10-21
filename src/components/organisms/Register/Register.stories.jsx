import Register from "./Register";
import { action } from "storybook/actions";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Organisms/RegisterForm",
  component: Register,
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

export const Loading = {
  args: {
    handleSubmit: action("form submitted"),
    loading: true,
  },
};
