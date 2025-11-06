import clsx from "clsx";
import styles from "./ConsentPreferencesBanner.module.css";
import Banner from "../../atoms/Banner/Banner";
import { useState, useEffect, useRef } from "react";
import Switch from "../../atoms/Switch/Switch";
import { useConsent } from "../../../providers/ConsentProvider";
import Button from "../../atoms/Button/Button";
import { useGdpr } from "../../../hooks/useGdpr";

const ConsentPreferencesBanner = ({ handleBack }) => {
  const [visible, setVisible] = useState(true);
  const { consent, setConsent, setEditing } = useConsent();
  const [loading, setLoading] = useState(true);
  const [transparency, setTransparency] = useState(null);
  const { handleTransparency } = useGdpr();

  useEffect(() => {
    console.log("Consent updated:", consent);
  }, [consent]);

  const onChange = (values) => {
    let updated = {
      ...(values.necessary != null && { necessary: values.necessary }),
      ...(values.functional != null && { functional: values.functional }),
    };

    setConsent((prev) => ({
      ...prev,
      ...updated,
      status: "custom",
    }));
  };

  const handleClose = () => {
    setVisible(false);
    setEditing(false);
    setConsent((prev) => ({
      ...prev,
      status: "custom",
      timestamp: new Date().toISOString(),
    }));
  };

  const didFetch = useRef(false);
  useEffect(() => {
    if (didFetch.current) return;
    didFetch.current = true;

    const fetchTransparency = async () => {
      try {
        const result = await handleTransparency();
        console.log("Transparency data:", result);
        setTransparency(result);
      } catch (err) {
        console.error("Failed to fetch transparency:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTransparency();
  }, []);

  if (loading) return null;

  return (
    <Banner visible={visible}>
      <p>
        This website uses cookies and similar technologies for essential
        functionality, analytics, and personalization. You may accept all
        cookies, reject non-essential ones, or customize your consent settings
        below. You can modify your preferences at any time in the Privacy
        Settings.
      </p>
      <div className={clsx(styles.ConsentPreferencesBanner)}>
        {(transparency?.dataCategories ?? []).map((category) => (
          <div key={category.code}>
            <Switch
              checked={(category.code == "necessary" ? true : consent[category.code]) || false}
              onChange={(val) =>
                onChange({
                  [category.code]: category.code == "necessary" ? true : val,
                })
              }
              label={category.type}
            />
            <p className={clsx(styles.Description)}>{category.reason}</p>
          </div>
        ))}
      </div>

      <div className={clsx(styles.optionButtons)}>
        <Button onClick={handleBack}>Back</Button>
        <Button onClick={handleClose}>Close</Button>
      </div>
    </Banner>
  );
};

export default ConsentPreferencesBanner;
