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
  }, []);

  if (!termsData) return <div>Loading...</div>;

  return (
    <div className={styles.terms_card}>
      <Text as="h2" variant="heading">
        Terms of agreement
      </Text>
      <div className={styles.terms_text}>
        <Text as="p" variant="body">
          {termsData.summary}
        </Text>
        {termsData.dataCategories.map((category, index) => (
          <div key={index}>
            <Text as="h3" variant="subheading">
              {category.type}
            </Text>
            <Text as="p" variant="body">
              {category.reason}
            </Text>
            <Text as="p" variant="body">
              Duration: {category.duration}
            </Text>
            <Text as="p" variant="body">
              Legal basis: {category.legal}
            </Text>
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
