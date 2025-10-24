import React from "react";
import SideBar from "../../components/organisms/SideBar/SideBar";
import JournalSheet from "../../components/organisms/JournalSheet/JournalSheet";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <SideBar />
      <main className={styles.mainContent}>
        <JournalSheet />
      </main>
    </div>
  );
};

export default HomePage;
