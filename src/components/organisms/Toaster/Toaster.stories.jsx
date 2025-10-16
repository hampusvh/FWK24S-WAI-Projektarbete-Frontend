import Toaster from "./Toaster";

export default {
  title: "Organisms/Toaster",
  component: Toaster,
}

const Template = (args) => <Toaster {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: "✅",
  text: "This is a toaster",
};


export const MultiLine = Template.bind({});
MultiLine.args = {
  icon: "✅",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum tellus, luctus dictum tellus id, pharetra ultrices dolor. Vestibulum sit amet turpis nunc.",
};