import styles from './Banner.module.css';
import clsx from "clsx";

const Banner = ({
    type = "Banner",
    onClick = () => console.log("default click!"),
    disabled = false,
    variant = "primary",  
    children = "Missing Banner content",
    className = ""
}) => {
    return (
        <div
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={clsx(styles.Banner, styles[variant], className)}
        >
            {children}
        </div>
    );
};

export default Banner;