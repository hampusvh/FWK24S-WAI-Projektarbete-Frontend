import React from "react";
import styles from "./JournalEntry.module.css";
import JournalHeader from "../../molecules/JournalHeader/JournalHeader";
import JournalEditor from "../../molecules/JournalEditor/JournalEditor";
import JournalControls from "../../molecules/JournalControls/JournalControls";


const JournalEntry = ({ actions }) => {
  const { onSave, onDelete, onNew, onNext, onPrev, onList } = actions;
  
  return (
    <div className={styles.container}>
      <JournalHeader onDelete={onDelete} onNew={onNew} onSave={onSave} />
      <div className={styles.page}>
        <JournalControls onNext={onNext} onPrev={onPrev} onList={onList}/>
        <JournalEditor />
      </div>
    </div>
  );
};

export default JournalEntry;