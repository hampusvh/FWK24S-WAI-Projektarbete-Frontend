import Button from "../../atoms/Button/Button";
import Card from "../../atoms/Card/Card";
import styles from "./Dialog.module.css";

const Dialog = ({ onClose, title, children, actions }) => {
  return (
    <div className={styles.Overlay} onClick={onClose}>
      <Card
        className={styles.Dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "dialog-title" : undefined}
        onClick={(e) => e.stopPropagation()}
      >
        <header className={styles.Header}>
          <Button onClick={onClose} variant="iconButton">✕</Button>
        </header>
        
        <div className={styles.Body}>
          {title && <h2 id="dialog-title" className={styles.dialogTitle}>{title}</h2>}
          {children}
        </div>

        {actions && <footer className={styles.Footer}>{actions}</footer>}
      </Card>
    </div>
  )
}
export default Dialog