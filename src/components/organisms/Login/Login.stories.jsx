import Login from "./Login";
import { action } from "storybook/actions";
import { MemoryRouter } from "react-router-dom";
import { fn, expect, waitFor } from 'storybook/test';

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

export const TestSubmit = {
  args: {
    handleSubmit: fn()
  },
  play: async ({ args, canvas, userEvent }) => {
    const testData = {
      username: "axel",
      password: "12345678"
    }

    const usernameInput = canvas.getByPlaceholderText("Username");
    await userEvent.type(usernameInput, testData.username);

    const passwordInput = canvas.getByPlaceholderText("Password");
    await userEvent.type(passwordInput, testData.password);

    await waitFor(() => {
      expect(usernameInput).toHaveValue(testData.username);
      expect(passwordInput).toHaveValue(testData.password);
    });

    const submitButton = canvas.getByRole("button", { name: "Login" });
    await userEvent.click(submitButton);

    await waitFor(async () => {
      expect(args.handleSubmit).toHaveBeenCalledWith({
        username: testData.username,
        password: testData.password
      });
    });
  }
}