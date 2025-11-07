import PaperBackground from "../../atoms/PaperBackground/PaperBackground";
import TextAreaBase from "../../atoms/TextAreaBase/TextAreaBase";
import styles from "./JournalEditor.module.css";

const JournalEditor = ({ onContentChange }) => {
  return (
    <div className={styles.JournalEditor}>
      <PaperBackground >
        <div className={styles.TextAreaBaseWrapper} >
          <TextAreaBase onInput={onContentChange} placeholder="Skriv här..." />
        </div>
      </PaperBackground>
    </div>
  )
};

export default JournalEditor;