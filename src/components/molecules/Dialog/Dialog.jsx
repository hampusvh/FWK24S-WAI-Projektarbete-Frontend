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
        {title && <h2 id="dialog-title">{title}</h2>}
        <div className={styles.Body}>
        {children}
        </div>

        {actions && <footer className={styles.Footer}>{actions}</footer>}
      </Card>
    </div>
  )
}
export default Dialog