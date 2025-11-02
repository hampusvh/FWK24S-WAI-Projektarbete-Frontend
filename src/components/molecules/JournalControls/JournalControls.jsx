import Button from '../../atoms/Button/Button';
import styles from './JournalControls.module.css';

const JournalControls = ({ handleSave, handleNewEntry, handleDelete }) => {
  return (
    <div className={styles.JournalControlsContainer}>
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
  )
}
export default JournalControls;