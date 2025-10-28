import AppProvider from "../../providers/AppProvider";
import HomePage from "./HomePage";

export default {
  title: "Pages/HomePage",
  component: HomePage,
  decorators: [
    (Story) => (
      <AppProvider>
        <Story />
      </AppProvider>
    ),
  ],
}

export const Default = {
  args: {}
}