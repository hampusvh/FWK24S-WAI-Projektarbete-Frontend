import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
    return (
        <input
            className={styles.input}
            name={props.name}
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            {...props}
        />
    );
};

export default Input;
