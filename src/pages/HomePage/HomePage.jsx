import React, { useEffect } from "react";
import JournalSheet from "../../components/organisms/JournalSheet/JournalSheet";
import styles from "./HomePage.module.css";
import { useAuth } from "../../hooks/useAuth";

const HomePage = () => {
  const { checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div className={styles.homePage}>
      <main className={styles.mainContent}>
        <JournalSheet />
      </main>
    </div>
  );
};

export default HomePage;
