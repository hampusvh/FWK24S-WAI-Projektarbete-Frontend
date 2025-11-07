import { useEffect, useRef, useState } from "react";
import Input from "../../atoms/Input/Input";
import styles from "./EditableText.module.css";

const EditableText = ({ name, placeholder, onChange, defValue = "" }) => {
    const [editable, setEditable] = useState(false);
    const [text, setText] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        if(editable && inputRef.current) {
            inputRef.current.focus();
        }
    }, [editable]);

    useEffect(() => {
        setText(defValue);
    }, [defValue]);

    const handleChange = (e) => {
        setText(e.target.value);
        onChange?.(e); 
    };

    return editable ? <Input
        className={styles.editableText}
        ref={inputRef}
        type="text"
        name={name}
        placeholder={placeholder}
        value={text}
        onBlur={() => setEditable(false)}
        onChange={handleChange}
      /> : <div className={styles.editableTextLabel} onClick={() => setEditable(true)}>{text || placeholder}</div>;
}

export default EditableText;