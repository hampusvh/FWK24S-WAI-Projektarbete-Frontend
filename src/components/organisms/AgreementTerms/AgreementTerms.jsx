import React, { useState, useEffect } from "react";
import styles from "./AgreementTerms.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import { useGdpr } from "../../../hooks/useGdpr";

const AgreementTerms = () => {
  const navigate = useNavigate();
  const [termsData, setTermsData] = useState(null);
  const { handleTransparency } = useGdpr();

  useEffect(() => {
    const fetchTerms = async () => {
      const data = await handleTransparency();
      setTermsData(data);
    };
    fetchTerms();
  }, [handleTransparency]);

  if (!termsData) return <div className={styles.loading}>Loading...</div>;

  return (
    <div className={styles.terms_card}>
      <Text as="h1" variant="heading">
        Terms of agreement
      </Text>

      <div className={styles.terms_text}>
        <Text as="p" variant="body">
          {termsData.summary}
        </Text>

        {termsData.dataCategories.map((category, idx) => (
          <div key={idx} className={styles.category}>
            <Text as="h2" variant="subheading">
              {category.type}
            </Text>
            <Text as="p" variant="body">
              {category.reason}
            </Text>
            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <Text as="span" variant="caption">
                  Duration:&nbsp;
                </Text>
                <Text as="span" variant="caption" className={styles.metaValue}>
                  {category.duration}
                </Text>
              </div>
              <div className={styles.metaItem}>
                <Text as="span" variant="caption">
                  Legal basis:&nbsp;
                </Text>
                <Text as="span" variant="caption" className={styles.metaValue}>
                  {category.legal}
                </Text>
              </div>
            </div>
          </div>
        ))}

        <Text as="p" variant="body">
          For any questions or concerns regarding these terms, please reach out
          to our support team. We're here to help and ensure you have a clear
          understanding of how we handle your data.
        </Text>
      </div>

      <Button variant="text" onClick={() => navigate("/register")}>
        Back
      </Button>
    </div>
  );
};

export default AgreementTerms;
