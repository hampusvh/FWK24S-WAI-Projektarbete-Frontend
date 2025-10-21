import AgreementTerms from "./AgreementTerms";
import { action } from "@storybook/addon-actions";

export default {
  title: "Organisms/AgreementTerms",
  component: AgreementTerms,
};

export const Default = {
  args: {
    onAccept: action("terms accepted"),
    onDecline: action("terms declined"),
    accepted: false,
  },
};
