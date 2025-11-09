import React from "react";
import styles from "./JournalEntry.module.css";
import JournalHeader from "../../molecules/JournalHeader/JournalHeader";
import JournalEditor from "../../molecules/JournalEditor/JournalEditor";
import JournalControls from "../../molecules/JournalControls/JournalControls";


const JournalEntry = (props) => {
  const { onSave, onDelete, onNew, onNext, onPrev, onList, onTitleChange, onContentChange, data } = props;
  
  return (
    <div className={styles.container}>
      <JournalHeader onDelete={onDelete} onNew={onNew} onSave={onSave} onTitleChange={onTitleChange} title={data.title} date={data.date || formatDate(new Date())} />
      <div className={styles.page}>
        <JournalControls onNext={onNext} onPrev={onPrev} onList={onList}/>
        <JournalEditor onContentChange={onContentChange} content={data.content} />
      </div>
    </div>
  );
};

function formatDate(date) {
  return date.toLocaleDateString("sv-SE"); 
}

export default JournalEntry;