import clsx from "clsx";
import styles from './ConsentBanner.module.css';
import Banner from "../../atoms/Banner/Banner";
import Button from "../../atoms/Button/Button";
import { background } from "storybook/internal/theming";
import { useState } from "react";
import { useConsent } from "../../../providers/ConsentProvider";

const ConsentBanner = ({ contentText }) => {
    const [visible, setVisible] = useState(true);
    const { updateConsent } = useConsent();

    const handleAccept = () => {
        console.log("User clicked Accept All");
        setVisible(false);
        updateConsent(true, true, true, true, true, true);
    }

    const handleReject = () => {
        console.log("User clicked Reject All");
        setVisible(false);
        updateConsent(false, false, false, false, false, false);
    }

    const handleCustomize = () => {
        console.log("User clicked Customize Preferences");
        setVisible(false);
        // open another banner or change banner contents here
    }

    return (
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