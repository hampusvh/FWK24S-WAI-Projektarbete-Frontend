import React from "react";
import styles from "./JournalSheet.module.css";
import JournalEntry from "../JournalEntry/JournalEntry";
import { useJournal } from "../../../hooks/useJournal";
import { useAuth } from "../../../providers/AuthProvider";
import { useCsrf } from "../../../providers/CsrfProvider";
import { useRecaptcha } from "../../../utils/recaptcha";

/*
* Todo: den ska visa den senaste journalen 
*/
const JournalSheet = () => {
  const { handlePostSave } = useJournal();
  const { user } = useAuth();
  const [data, setData] = React.useState({});
  const { getRecaptchaToken } = useRecaptcha();

  const onSave = async () => {
    let token = null;

    if (import.meta.env.VITE_ENV == "production") {
      token = await getRecaptchaToken("login");
      if (!token) {
        setError("reCAPTCHA verification failed");
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
          setError("");
        }, 4000);
        return;
      }
    }

    const save = await handlePostSave({ ...data, author: user.id }, token);
    console.log("Saved journal entry:", save);
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

  return <JournalEntry
      onSave={onSave}
      onDelete={onDelete}
      onNew={onNew}
      onNext={onNext}
      onPrev={onPrev}
      onList={onList}
      onTitleChange={onTitleChange}
      onContentChange={onContentChange}
    />;
};

export default JournalSheet;
