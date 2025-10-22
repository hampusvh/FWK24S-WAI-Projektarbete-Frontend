import AgreementTerms from "../../components/organisms/AgreementTerms/AgreementTerms";
import styles from "./TermsPage.module.css";

const TermsPage = () => {
  return (
    <div className={styles.TermsContainer}>
      <AgreementTerms />
    </div>
  );
};

export default TermsPage;
