import AppProvider from '../../providers/AppProvider';
import LoginPage from './LoginPage';

export default {
  title: "Pages/LoginPage",
  component: LoginPage,
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
