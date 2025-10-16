import Register from './Register';
import { action } from 'storybook/actions';

export default {
  title: "Organisms/RegisterForm",
  component: Register,
}

export const Default = {
  args: {
    handleSubmit: action("form submitted"),
    loading: false,
  },
};

export const Loading = {
  args: {
    handleSubmit: action("form submitted"),
    loading: true,
  },
};