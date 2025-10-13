import Text from "./Text";
import styles from "./Text.module.css";

export default {
  title: 'Atoms/Text',
  component: Text,
}

const Template = (args) => <Text {...args} />;

export const Body = Template.bind({});
Body.args = {
  as: "p",
  variant: "body",
  children: "Detta är en vanlig brödtext"
};

export const Bold = Template.bind({});
Bold.args = {
  as: "p",
  variant: "body",
  bold: true,
  children: "Detta är en fetstilad brödtext"
};

export const Muted = Template.bind({});
Muted.args = {
  as: "p",
  variant: "body",
  muted: true,
  children: "Detta är en ljusare brödtext"
};

export const Heading = Template.bind({});
Heading.args = {
  as: "h2",
  variant: "heading",
  children: "Detta är en rubrik"
};

export const Subheading = Template.bind({});
Subheading.args = {
  as: "h3",
  variant: "subheading",
  children: "Detta är en underrubrik"
};

export const Caption = Template.bind({});
Caption.args = {
  as: "span",
  variant: "caption",
  children: "Detta är en bildtext eller liten beskrivande text"
}