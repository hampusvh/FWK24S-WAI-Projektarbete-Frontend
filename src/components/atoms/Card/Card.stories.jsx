import Card from './Card';

export default {
  title: 'Atoms/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <p>This is a card text</p>,
};

export const Small = Template.bind({});
Small.args = {
  variant: "small",
  children: <p>This is a card text</p>,
};

export const Big = Template.bind({});
Big.args = {
  variant: "big",
  children: <p>This is a card text</p>,
};