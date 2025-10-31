import styles from "./PaperBackground.module.css";

const PaperBackground = ({ children }) => {
  return <div className={styles.paperBackground}>{children}</div>;
};

export default PaperBackground;