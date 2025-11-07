import { forwardRef, useEffect, useRef } from "react";
import styles from "./TextAreaBase.module.css";

// contentEditable base that supports an optional controlled `value` prop
// without clobbering the caret while the user is editing.
const TextAreaBase = forwardRef(({ placeholder, onInput, value, content }, forwardedRef) => {
    const innerRef = useRef(null);
    const ref = forwardedRef || innerRef;

    // Decide which string to render: prefer `value` (controlled) then `content` (initial content)
    const desired = value ?? content ?? "";

    // Sync desired content into the DOM only when the element is not focused.
    // This prevents resetting the caret while the user types (which can make
    // characters appear to be inserted in reverse).
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (document.activeElement === el) return; // don't clobber caret
        el.textContent = desired;
    }, [desired, ref]);

    return (
        <div
            ref={ref}
            contentEditable
            className={styles.textAreaBase}
            suppressContentEditableWarning
                    data-placeholder={placeholder}
            onInput={onInput}
        />
    );
});

export default TextAreaBase;