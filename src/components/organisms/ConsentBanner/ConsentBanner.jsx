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
                `This website uses essential cookies for security, authentication, and to maintain your session while you browse. We also use session storage to ensure proper functionality during your visit. Optional cookies may be used for analytics or personalization if you consent.`}</p>

            <div className={clsx(styles.optionButtons)}>
                <Button className={clsx(styles.acceptAll)} onClick={handleAccept}>Accept All</Button>
                <Button className={clsx(styles.rejectAll)} onClick={handleReject}>Reject All</Button>
                <Button className={clsx(styles.customize)} onClick={handleCustomize}>Customize Preferences</Button>
            </div>
        </Banner>
    );
}

export default ConsentBanner;