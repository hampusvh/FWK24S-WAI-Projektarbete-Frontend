import JournalEntry from "./JournalEntry";
import { action } from "storybook/actions";

export default {
  title: "Organisms/JournalEntry",
  component: JournalEntry,
};

const actions = {
  onSave: action("Save pressed"),
  onDelete: action("Delete pressed"),
  onNew: action("New pressed"),
  onNext: action("Next pressed"),
  onPrev: action("Prev pressed"),
  onList: action("List pressed"),
};

export const EmptyPage = {
  render: () => <JournalEntry actions={actions} />,
};
