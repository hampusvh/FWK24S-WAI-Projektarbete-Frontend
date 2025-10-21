import { CookiesProvider, useCookies } from "react-cookie";
import ConsentProvider from "../../../providers/ConsentProvider";
import ConsentPreferencesBanner from "./ConsentPreferencesBanner";

export default {
  title: "Organisms/ConsentPreferencesBanner",
  component: ConsentPreferencesBanner,
}

const Template = (args) => {
  return (
    <CookiesProvider>
      <ConsentProvider>
        <ConsentPreferencesBanner {...args} />
      </ConsentProvider>
    </CookiesProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
};
