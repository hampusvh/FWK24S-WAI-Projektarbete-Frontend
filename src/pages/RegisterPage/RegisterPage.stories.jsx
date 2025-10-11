import AppProvider from '../../providers/AppProvider';
import RegisterPage from './RegisterPage';

export default {
  title: "Pages/RegisterPage",
  component: RegisterPage,
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