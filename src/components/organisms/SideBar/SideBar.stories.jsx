import AppProvider from "../../../providers/AppProvider";
import SideBar from "./SideBar";

export default {
  title: "Organisms/SideBar",
  component: SideBar,
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
};
