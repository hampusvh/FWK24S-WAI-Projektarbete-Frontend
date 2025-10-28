import AppProvider from "../../../providers/AppProvider";
import LogoutButton from "./LogoutButton";
import { fn } from "storybook/test";

export default {
  title: "Molecules/LogoutButton",
  component: LogoutButton,
  decorators: [
    (Story) => (
      <AppProvider>
        <Story />
      </AppProvider>
    ),
  ],
}

export const Default = {
  args: {
    onClick: fn(),
  },
};
