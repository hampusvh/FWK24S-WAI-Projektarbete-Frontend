import { CookiesProvider, useCookies } from "react-cookie";
import ConsentProvider from "../../../providers/ConsentProvider";
import ConsentBanner from "./ConsentBanner";
import AppLayout from "../../../layouts/AppLayout";
import withRouter from "../../../decorators/withRouter";
import { expect } from "storybook/test";
import { waitFor } from "storybook/internal/test";

export default {
  title: "Organisms/ConsentBanner",
  component: ConsentBanner,
  decorators:[withRouter],
}

const mockCookies = {
  consent: {
    version: '1.2.3',
    timestamp: '2025-10-30',
    necessary: false,
    functional: false,
    analytics: false,
    marketing: false,
    personalization: false,
    security: false,
  },
};

const Cookies = () => {
  return (
    <div style={{display: "flex", gap: "10px"}}>
      Cookie (version: {mockCookies.consent.version || "never"}, updated: {mockCookies.consent.timestamp || "never"}):
      <pre>Necessary: {mockCookies.consent.necessary?.toString() || "false"}</pre>
      <pre>Functional: {mockCookies.consent.functional?.toString() || "false"}</pre>
      <pre>Analytics: {mockCookies.consent.analytics?.toString() || "false"}</pre>
      <pre>Marketing: {mockCookies.consent.marketing?.toString() || "false"}</pre>
      <pre>Personalization: {mockCookies.consent.personalization?.toString() || "false"}</pre>
      <pre>Security: {mockCookies.consent.security?.toString() || "false"}</pre>
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

export const TestInteraction = {
  args: {
  },
  play: async ({ args, canvas, userEvent }) => {
    const acceptAllButton = canvas.getByRole("button", { name: /accept all/i });
    await userEvent.click(acceptAllButton);

    const editConsentButton = canvas.getByRole("button", { name: /cookie settings/i });
    await userEvent.click(editConsentButton);

    const rejectAllButton = canvas.getByRole("button", { name: /reject all/i });
    await userEvent.click(rejectAllButton);

    await userEvent.click(editConsentButton);

    const customizeButton = canvas.getByRole("button", { name: /customize preferences/i });
    await userEvent.click(customizeButton);

    const consentSwitch_MarketingCookies = await canvas.findByLabelText(/marketing cookies/i);
    await userEvent.click(consentSwitch_MarketingCookies);

    await waitFor(() => {
      expect(consentSwitch_MarketingCookies).toBeChecked();
    });

    const consentSwitch_SecurityCookies = await canvas.findByLabelText(/security cookies/i);
    await userEvent.click(consentSwitch_SecurityCookies);

    await waitFor(() => {
      expect(consentSwitch_SecurityCookies).toBeChecked();
    });

    const consentSwitch_AnalyticsCookies = await canvas.findByLabelText(/analytics cookies/i);
    await userEvent.click(consentSwitch_AnalyticsCookies);

    await waitFor(() => {
      expect(consentSwitch_AnalyticsCookies).toBeChecked();
    });
  },
  render: (args) => {
    return (
      <CookiesProvider>
        <ConsentProvider>
          <AppLayout>
            <ConsentBanner {...args} />
            <Cookies />
          </AppLayout>
        </ConsentProvider>
      </CookiesProvider>
    );
  }
}