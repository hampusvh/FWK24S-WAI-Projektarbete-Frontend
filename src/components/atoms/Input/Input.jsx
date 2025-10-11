import React from "react";
import styles from "./Input.module.css";

const Input = ({ type = "text", name, placeholder, value, onChange }) => {

    return (
        <input
            className={styles.input}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;
