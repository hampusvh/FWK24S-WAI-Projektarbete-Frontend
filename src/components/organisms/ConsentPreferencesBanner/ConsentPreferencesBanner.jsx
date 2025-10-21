import clsx from "clsx";
import styles from "./ConsentPreferencesBanner.module.css";
import Banner from "../../atoms/Banner/Banner";
import { useState } from "react";
import Switch from "../../atoms/Switch/Switch";
import { useConsent } from "../../../providers/ConsentProvider";
import Button from "../../atoms/Button/Button";

const ConsentconsentBanner = ({ handleBack }) => {
    const [visible, setVisible] = useState(true);
    const { consent, setConsent } = useConsent();

    const onChange = (values) => {
        let updated = {
            ...(values.necessary != null && { necessary:  values.necessary }),
            ...(values.functional != null && { functional:  values.functional }),
            ...(values.analytics != null && { analytics:  values.analytics }),
            ...(values.marketing != null && { marketing:  values.marketing }),
            ...(values.personalization != null && { personalization:  values.personalization }),
            ...(values.security != null && { security:  values.security }),
        };

        setConsent(prev => ({
            ...prev,
            ...updated
        }));
    }

    return (
        <Banner visible={visible}>
            <p>This website uses cookies and similar technologies for essential functionality, analytics, and personalization. You may accept all cookies, reject non-essential ones, or customize your consent settings below. You can modify your preferences at any time in the Privacy Settings.</p>
            <div className={clsx(styles.ConsentPreferencesBanner)}>
                <div>
                    <Switch
                        checked={consent.necessary || false}
                        onChange={(val) => onChange({ necessary: val })}
                        label="Necessary cookies"
                    />
                    <p className={clsx(styles.Description)}>
                    Required for the website to function. These can’t be turned off.
                    </p>
                </div>

                <div>
                    <Switch
                        checked={consent.functional  || false}
                        onChange={(val) => onChange({ functional: val })}
                        label="Functional cookies"
                    />
                    <p className={clsx(styles.Description)}>
                    Remember your settings and improve site features like language or theme.
                    </p>
                </div>

                <div>
                    <Switch
                        checked={consent.analytics  || false}
                        onChange={(val) => onChange({ analytics: val })}
                        label="Analytics cookies"
                    />
                    <p className={clsx(styles.Description)}>
                    Help us understand how visitors use our site (anonymous statistics).
                    </p>
                </div>

                <div>
                    <Switch
                        checked={consent.marketing  || false}
                        onChange={(val) => onChange({ marketing: val })}
                        label="Marketing cookies"
                    />
                    <p className={clsx(styles.Description)}>
                    Used to deliver relevant ads and measure marketing performance.
                    </p>
                </div>

                <div>
                    <Switch
                        checked={consent.personalization  || false}
                        onChange={(val) => onChange({ personalization: val })}
                        label="Personalization cookies"
                    />
                    <p className={clsx(styles.Description)}>
                    Tailor content and recommendations based on your interests.
                    </p>
                </div>

                <div>
                    <Switch
                        checked={consent.security || false}
                        onChange={(val) => onChange({ security: val })}
                        label="Security cookies"
                    />
                    <p className={clsx(styles.Description)}>
                    Help protect your account and detect fraudulent activity.
                    </p>
                </div>
            </div>

            <div className={clsx(styles.optionButtons)}>
                <Button onClick={handleBack}>Back</Button>
                <Button onClick={() => setVisible(false)}>Close</Button>
            </div>
        </Banner>
    );
};

export default ConsentconsentBanner;