import PaperBackground from "../../atoms/PaperBackground/PaperBackground";
import TextAreaBase from "../../atoms/TextAreaBase/TextAreaBase";
import styles from "./JournalEditor.module.css";

const JournalEditor = ({ onContentChange, content }) => {
  return (
    <div className={styles.JournalEditor}>
      <PaperBackground >
        <div className={styles.TextAreaBaseWrapper} >
          <TextAreaBase onInput={onContentChange} content={content} placeholder="Start journaling..." />
        </div>
      </PaperBackground>
    </div>
  )
};

export default JournalEditor;