import React, { useEffect } from "react";
import JournalSheet from "../../components/organisms/JournalSheet/JournalSheet";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <JournalSheet />
    </div>
  );
};

export default HomePage;
