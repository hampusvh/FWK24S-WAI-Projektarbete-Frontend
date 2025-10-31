import { forwardRef } from "react";
import styles from "./TextAreaBase.module.css";

const TextAreaBase = forwardRef(({ placeholder }, ref) => {
    return (
        <div
            ref={ref}
            contentEditable
            className={styles.textAreaBase}
            suppressContentEditableWarning
            data-placeholder={ placeholder }
        />
    );
});

export default TextAreaBase;