import EditableText from "./EditableText";
import { useArgs } from 'storybook/preview-api';

export default {
  title: "Molecules/EditableText",
  component: EditableText,
  render: function Render(args) {
    const [{ textValue }, updateArgs] = useArgs();
 
    function onChange(e) {
        let newValue = e.target.value;
        
        if(newValue && newValue.length > 0) {
            updateArgs({ textValue: newValue });
        }
    }
 
    return <EditableText textValue={textValue} onChange={onChange} {...args}/>;
  }
};

export const Default = {
  args: {
    textValue: "Hello World",
    placeholder: "Hello World"
  },
};

export const WithOnlyPlaceholderText = {
  args: {
    placeholder: "Placeholder text",
    textValue: ""
  },
};