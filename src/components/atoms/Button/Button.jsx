import styles from './Button.module.css';
import clsx from "clsx";

const Button = ({
    type = "button",
    onClick = () => console.log("default click!"),
    disabled = false,
    variant = "primary",  
    children = "Missing button content",
    className = ""
}) => {
    const isIconOnly = typeof children !== "string" && !Array.isArray(children);
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={clsx(styles.button, styles[variant], isIconOnly && styles.iconOnly, className)}
        >
            {children}
        </button>
    );
};

export default Button;