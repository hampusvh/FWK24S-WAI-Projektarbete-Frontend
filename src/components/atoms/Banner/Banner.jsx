import styles from './Banner.module.css';
import clsx from "clsx";

const Banner = ({
    type = "Banner",
    visible = true,
    children = "Missing Banner content",
    className = ""
}) => {
    return (
        <div
            type={type}
            className={clsx(styles.Banner, className)}
            style={{visibility: visible ? "visible" : "hidden"}}
        >
            {children}
        </div>
    );
};

export default Banner;