import React, { useEffect } from "react";
import JournalSheet from "../../components/organisms/JournalSheet/JournalSheet";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <main className={styles.mainContent}>
        <JournalSheet />
      </main>
    </div>
  );
};

export default HomePage;
