import React from "react";
import styles from "./Switch.module.css";
import clsx from "clsx";

const Switch = ({ checked, onChange, label }) => {
  return (
    <label className={clsx(styles.switch)}>
      <input
        type="checkbox"
        name={label}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className={clsx(styles.slider)} />
      {label && <span className={clsx(styles["switch-label"])}>{label}</span>}
    </label>
  );
};

export default Switch;
