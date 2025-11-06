import JournalWritingSVG from "../../components/atoms/Icons/JournalWritingSVG/JournalWritingSVG";
import Logo from "../../components/atoms/Logo/Logo";
import styles from "./GuestLayout.module.css";

const GuestLayout = ({ children }) => {
  return (
    <div className={styles.GuestLayout}>
      <div className={styles.hero}>
        <div className={styles.introText}>Sign up and start your journaling journey today for free.</div>

        <div className={styles.svgWrapper}>
          <h1>Begin your journaling journey</h1>
          <JournalWritingSVG />
        </div>
      </div>

      <div className={styles.main}>
        <Logo />
        {children}
      </div>
    </div>
  );
};

export default GuestLayout;
