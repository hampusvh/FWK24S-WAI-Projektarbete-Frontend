import ConsentBanner from "./ConsentBanner";

export default {
  title: "Organisms/ConsentBanner",
  component: ConsentBanner,
}

const Template = (args) => <ConsentBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
  contentText: `We collect and store your email address and phone number for account management purposes only. Your email is used for password recovery, and your phone number is used for two-factor authentication (2FA).\n
                We do not collect IP addresses, analytics data, or activity logs.\n
                This site uses cookies and localStorage to provide essential functionality and maintain account security.\n
                Please review and select your preference. Your choice will be respected and can be changed at any time.`,
};