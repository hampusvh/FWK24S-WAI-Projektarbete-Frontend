import { useEffect, useRef, useState } from "react";
import Input from "../../atoms/Input/Input";
import styles from "./EditableText.module.css";

const EditableText = ({ name, placeholder, textValue, onChange }) => {
    const [editable, setEditable] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if(editable && inputRef.current) {
            inputRef.current.focus();
        }
    }, [editable])

    return editable ? <Input
        className={styles.editableText}
        ref={inputRef}
        type="text"
        name={name}
        placeholder={placeholder}
        value={textValue}
        onBlur={() => setEditable(false)}
        onChange={onChange}
      /> : <div className={styles.editableTextLabel} onClick={() => setEditable(true)}>{textValue || placeholder}</div>;
}

export default EditableText;