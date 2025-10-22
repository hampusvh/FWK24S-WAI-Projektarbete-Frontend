import React from "react";
import styles from "./AgreementTerms.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";

const AgreementTerms = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.terms_card}>
      <Text
        as="h2"
        variant="heading">
        Terms of agreement
      </Text>
      <div className={styles.terms_text}>
          <Text
            as="p"
            variant="body">
            By accessing or registering for this service, you acknowledge that
            you have read, understood, and with admirable confidence, accepted
            the terms below. The platform is provided as-is, without any
            promises of eternal uptime or bug-free perfection, though we do our
            best to keep things civilized and functional.
          </Text>

          <Text
            as="p"
            variant="body">
            We collect only the information we actually need to make this thing
            work. We do not sell, barter, or secretly whisper your data to
            anyone. Some anonymous statistics may be gathered to help improve
            performance or reassure us that someone, somewhere, is indeed using
            this app.
          </Text>

          <Text
            as="p"
            variant="body">
            By continuing, you agree to use the service responsibly, treat other
            users with basic human decency, and not attempt to break things just
            to see what happens. Should anything go wrong, please take a deep
            breath, refresh the page, and remember - we’re all just humans
            behind keyboards trying our best.
          </Text>
      </div>

      <Button
        variant="text"
        onClick={() => navigate("/register")}>
        Back
      </Button>
    </div>
  );
};

export default AgreementTerms;
