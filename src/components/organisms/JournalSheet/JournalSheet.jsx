import React, { useEffect, useState } from "react";
import styles from "./JournalSheet.module.css";
import JournalEntry from "../JournalEntry/JournalEntry";
import { useJournal } from "../../../hooks/useJournal";
import { useAuth } from "../../../providers/AuthProvider";
import { todayISODate } from "../../../utils/dates";

/*
* Todo: den ska visa den senaste journalen 
*/
const JournalSheet = () => {
  const { handleUpsertJournal, handleGetJournal } = useJournal();
  const { user } = useAuth();
  const [data, setData] = useState({
    title: "",
    content: "",
    author: user.id,
    date: todayISODate(),
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getJournal = handleGetJournal(user.id, todayISODate(), null);
    getJournal.then((res) => {
      setData(res.journal);
    })
    .finally(error => {
      setLoading(false);
    })
  }, []);

  const onSave = async () => {
    const save = await handleUpsertJournal({ ...data, author: user.id }, null);
  };

  const onDelete = () => {};
  const onNew = () => {};
  const onNext = () => {};
  const onPrev = () => {};
  const onList = () => {};

  const onContentChange = (e) => {
    setData({ ...data, content: e.target.textContent });
  };

  const onTitleChange = (e) => {
    setData({ ...data, title: e.target.value });
  };

  if(loading) return <>Loading...</>

  return <JournalEntry
      onSave={onSave}
      onDelete={onDelete}
      onNew={onNew}
      onNext={onNext}
      onPrev={onPrev}
      onList={onList}
      onTitleChange={onTitleChange}
      onContentChange={onContentChange}
      data={data}
    />;
};

export default JournalSheet;
