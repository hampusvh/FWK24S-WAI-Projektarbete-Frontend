import AppProvider from "../../providers/AppProvider";
import UserDashboard from "./UserDashboard";

export default {
  title: "Pages/Dashboard",
  component: UserDashboard,
  decorators: [
    (Story) => (
      <AppProvider>
        <Story />
      </AppProvider>
    ),
  ],
}

export const Default = {
  args: {},
}