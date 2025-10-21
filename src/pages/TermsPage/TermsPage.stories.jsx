import AppProvider from "../../providers/AppProvider";
import TermsPage from "./TermsPage";

export default {
  title: "Pages/TermsPage",
  component: TermsPage,
  decorators: [
    (Story) => (
      <AppProvider>
        <Story />
      </AppProvider>
    ),
  ],
};

export const Default = {
  args: {},
};
