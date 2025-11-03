import EditableText from "../../molecules/EditableText/EditableText";
import styles from "./JournalHeader.module.css";
import Button from "../../atoms/Button/Button";

const JournalHeader = ({ handleSave, handleNewEntry, handleDelete }) => {
  return (
    <div className={styles.JournalHeaderContainer}>
      <div className={styles.TitleContainer}>
        <EditableText placeholder="Title" />
        <p className={styles.Date}>{(new Date).toLocaleDateString()}</p>
      </div>
      <div className={styles.JournalButtonsContainer}>
        <Button onClick={handleSave} aria-label='save entry'>Save</Button>
        <Button onClick={handleNewEntry} aria-label='new entry'>+ New page</Button>
        <Button variant="warning" onClick={handleDelete} aria-label='delete entry' >
          <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="30"
          height="30"
        >
          <path d="M9 3h6a1 1 0 0 1 1 1v1h5v2H3V5h5V4a1 1 0 0 1 1-1zm1 5v11a1 1 0 0 0 2 0V8h2v11a1 1 0 0 0 2 0V8h2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8h2z" />
        </svg>
        </Button>
      </div>
    </div>
  )
}
export default JournalHeader