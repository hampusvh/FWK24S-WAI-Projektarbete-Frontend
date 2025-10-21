import AgreementTerms from "./AgreementTerms";
import { action } from "storybook/actions";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Organisms/AgreementTerms",
  component: AgreementTerms,
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
    onAccept: action("terms accepted"),
    onDecline: action("terms declined"),
    accepted: false,
  },
};
