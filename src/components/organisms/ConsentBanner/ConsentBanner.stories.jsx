import { CookiesProvider, useCookies } from "react-cookie";
import ConsentProvider from "../../../providers/ConsentProvider";
import ConsentBanner from "./ConsentBanner";

export default {
  title: "Organisms/ConsentBanner",
  component: ConsentBanner,
}

const Cookies = () => {
  const [cookies] = useCookies();
  return (
    <div style={{display: "flex", gap: "10px"}}>
      Cookie (version: {cookies.consent.version || "never"}, updated: {cookies.consent.timestamp || "never"}):
      <pre>Necessary: {cookies.consent.necessary?.toString() || "false"}</pre>
      <pre>Functional: {cookies.consent.functional?.toString() || "false"}</pre>
      <pre>Analytics: {cookies.consent.analytics?.toString() || "false"}</pre>
      <pre>Marketing: {cookies.consent.marketing?.toString() || "false"}</pre>
      <pre>Personalization: {cookies.consent.personalization?.toString() || "false"}</pre>
      <pre>Security: {cookies.consent.security?.toString() || "false"}</pre>
    </div>
  );
}

const Template = (args) => {
  return (
    <CookiesProvider>
      <ConsentProvider>
        <Cookies />
        <ConsentBanner {...args} />
      </ConsentProvider>
    </CookiesProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  contentText: `We collect and store your email address and phone number for account management purposes only. Your email is used for password recovery, and your phone number is used for two-factor authentication (2FA).\n
                We do not collect IP addresses, analytics data, or activity logs.\n
                This site uses cookies and localStorage to provide essential functionality and maintain account security.\n
                Please review and select your preference. Your choice will be respected and can be changed at any time.`,
};
