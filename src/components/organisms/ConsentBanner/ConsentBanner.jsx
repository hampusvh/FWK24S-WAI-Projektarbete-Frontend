import clsx from "clsx";
import styles from './ConsentBanner.module.css';
import Banner from "../../atoms/Banner/Banner";
import Button from "../../atoms/Button/Button";
import { background } from "storybook/internal/theming";
import { useState } from "react";
import { useConsent } from "../../../providers/ConsentProvider";
import ConsentPreferencesBanner from "../ConsentPreferencesBanner/ConsentPreferencesBanner";

const ConsentBanner = ({ contentText }) => {
    const [visible, setVisible] = useState(true);
    const [preferencesOpen, setPreferencesOpen] = useState(false);
    const { consentAll, setEditing } = useConsent();

    const handleAccept = () => {
        console.log("User clicked Accept All");
        setVisible(false);
        consentAll(true);
    }

    const handleReject = () => {
        console.log("User clicked Reject All");
        setVisible(false);
        consentAll(false);
    }

    const handleCustomize = () => {
        console.log("User clicked Customize Preferences");
        setPreferencesOpen(true);
    }

    const handleBack = () => {
        setPreferencesOpen(false);
    }

    return visible && preferencesOpen ? <ConsentPreferencesBanner handleReject={handleReject} handleAccept={handleAccept} handleBack={handleBack} /> : (
        <Banner visible={visible}>
            <p>{contentText || 
                `We collect and store your email address and phone number for account management purposes only. Your email is used for password recovery, and your phone number is used for two-factor authentication (2FA).\n
                We do not collect IP addresses, analytics data, or activity logs.\n
                This site uses cookies and localStorage to provide essential functionality and maintain account security.\n
                Please review and select your preference. Your choice will be respected and can be changed at any time.`}</p>

            <div className={clsx(styles.optionButtons)}>
                <Button className={clsx(styles.acceptAll)} onClick={handleAccept}>Accept All</Button>
                <Button className={clsx(styles.rejectAll)} onClick={handleReject}>Reject All</Button>
                <Button className={clsx(styles.customize)} onClick={handleCustomize}>Customize Preferences</Button>
            </div>
        </Banner>
    );
}

export default ConsentBanner;