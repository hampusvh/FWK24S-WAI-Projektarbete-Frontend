import JournalControls from "./JournalControls";
import { action } from "storybook/actions";

export default {
  title: "Molecules/JournalControls",
  component: JournalControls,
  render: () => {
    return (
      <JournalControls
        handleNewEntry={action("New entry")}
        handleSave={action("Save entry")}
        handleDelete={action("Delete entry")}
      />
    )
  }
};

export const Default = {
  args: {},
};