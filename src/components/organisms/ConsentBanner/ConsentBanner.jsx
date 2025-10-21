import clsx from "clsx";
import styles from './ConsentBanner.module.css';
import Banner from "../../atoms/Banner/Banner";
import Button from "../../atoms/Button/Button";

const ConsentBanner = ({ contentText }) => {
    const handleAccept = () => {
        console.log("User clicked Accept All");
    }

    const handleReject = () => {
        console.log("User clicked Reject All");
    }

    const handleCustomize = () => {
        console.log("User clicked Customize Preferences");
    }

    return (
        <Banner>
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