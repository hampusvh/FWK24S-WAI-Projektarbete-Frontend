import UserSettingsSection from './UserSettingsSection';
import { action } from 'storybook/actions';

export default {
  title: "Organisms/UserSettingsSection",
  component: UserSettingsSection,
};

export const Default = {
  args: {},
  onLogout: action("Logout"),
  onDelete: action("Delete account"),
};