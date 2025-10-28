import AppProvider from "../../../providers/AppProvider";
import SideBar from "./SideBar";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Organisms/SideBar",
  component: SideBar,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Default = {
  args: {},
};
