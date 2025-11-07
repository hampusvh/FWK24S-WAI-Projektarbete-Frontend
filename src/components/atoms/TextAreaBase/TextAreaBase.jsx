import { forwardRef } from "react";
import styles from "./TextAreaBase.module.css";

const TextAreaBase = forwardRef(({ placeholder, onInput }, ref) => {
    return (
        <div
            ref={ref}
            contentEditable
            className={styles.textAreaBase}
            suppressContentEditableWarning
            data-placeholder={ placeholder }
            onInput={onInput}
        />
    );
});

export default TextAreaBase;