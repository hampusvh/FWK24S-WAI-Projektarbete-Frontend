const Button = ({
    type = "button",
    onClick = () => console.log("default click!"),
    disabled = false,
    children = "Missing button content",
    className = ""
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`button ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;