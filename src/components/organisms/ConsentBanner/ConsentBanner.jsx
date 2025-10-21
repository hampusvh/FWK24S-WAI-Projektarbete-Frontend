import clsx from "clsx";
import styles from './ConsentBanner.module.css';
import Banner from "../../atoms/Banner/Banner";
import Button from "../../atoms/Button/Button";
import { background } from "storybook/internal/theming";
import { useState } from "react";

const ConsentBanner = ({ contentText }) => {
    const [visible, setVisible] = useState(true);

    const handleAccept = () => {
        console.log("User clicked Accept All");
        setVisible(false);
    }

    const handleReject = () => {
        console.log("User clicked Reject All");
        setVisible(false);
    }

    const handleCustomize = () => {
        console.log("User clicked Customize Preferences");
        setVisible(false);
    }

    return (
        <Banner visible={visible}>
            <p>{contentText}</p>

            <div className={clsx(styles.optionButtons)}>
                <Button className={clsx(styles.acceptAll)} onClick={handleAccept}>Accept All</Button>
                <Button className={clsx(styles.rejectAll)} onClick={handleReject}>Reject All</Button>
                <Button className={clsx(styles.customize)} onClick={handleCustomize}>Customize Preferences</Button>
            </div>
        </Banner>
    );
}

export default ConsentBanner;