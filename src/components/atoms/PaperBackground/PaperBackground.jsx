import styles from "./PaperBackground.module.css";

const PaperBackground = ({ children }) => {
  return <div className={styles.linedPaper}>{children}</div>;
};

export default PaperBackground;