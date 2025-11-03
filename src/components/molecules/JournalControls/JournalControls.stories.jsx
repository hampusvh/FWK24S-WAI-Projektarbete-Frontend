import JournalControls from "./JournalControls";
import { action } from "storybook/actions";

export default {
  title: "Molecules/JournalControls",
  component: JournalControls,
  render: () => {
    return (
      <JournalControls
        onNew={action("New entry")}
        onSave={action("Save entry")}
        onDelete={action("Delete entry")}
      />
    )
  }
};

export const Default = {
  args: {},
};