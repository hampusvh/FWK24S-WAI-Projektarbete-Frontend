import EditableText from "../../molecules/EditableText/EditableText";
import styles from "./JournalHeader.module.css";
import Button from "../../atoms/Button/Button";
import DeleteIcon from "../../../assets/icons/delete-icon.svg?react";

const JournalHeader = ({ onSave, onNew, onDelete, onTitleChange, title, date }) => {
  return (
    <div className={styles.JournalHeaderContainer}>
      <div className={styles.TitleContainer}>
        <div className={styles.Title}> 
          <h1><EditableText placeholder="Enter your title..." onChange={onTitleChange} defValue={title} /> </h1>
        </div>
        <p className={styles.Date}>{date}</p>
      </div>
      <div className={styles.JournalButtonsContainer}>
        <Button onClick={onSave} label='save entry'>Save</Button>
        <Button variant="warning" onClick={onDelete} ariaLabel='delete entry' >
          <DeleteIcon />
        </Button>
      </div>
    </div>
  )
}



export default JournalHeader