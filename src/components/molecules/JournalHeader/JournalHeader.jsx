import EditableText from "../../molecules/EditableText/EditableText";
import styles from "./JournalHeader.module.css";
import Button from "../../atoms/Button/Button";
import DeleteIcon from "../../../assets/icons/delete-icon.svg?react";

const JournalHeader = ({ onSave, onNew, onDelete }) => {
  return (
    <div className={styles.JournalHeaderContainer}>
      <div className={styles.TitleContainer}>
        <EditableText placeholder="Title" />
        <p className={styles.Date}>{(new Date).toLocaleDateString()}</p>
      </div>
      <div className={styles.JournalButtonsContainer}>
        <Button onClick={onSave} label='save entry'>Save</Button>
        <Button onClick={onNew} label='new entry'>+ New page</Button>
        <Button variant="warning" onClick={onDelete} ariaLabel='delete entry' >
          <DeleteIcon />
        </Button>
      </div>
    </div>
  )
}
export default JournalHeader