import Banner from "./Banner";

export default {
  title: "Atoms/Banner",
  component: Banner,
  argTypes: {
    visible: {
      control: { type: Boolean },
      options: [true, false],
    },
  },
};

export const Default = {
  args: {
    children: "Default Banner",
    visible: true
  },
};

export const Hidden = {
  args: {
    children: "Default Banner",
    visible: false
  },
};
