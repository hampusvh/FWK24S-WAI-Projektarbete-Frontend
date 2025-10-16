import Card from "../../atoms/Card/Card";
import Text from "../../atoms/Text/Text";
import styles from './Toaster.module.css';
import clsx from "clsx";

const Toaster = ({ icon, text, position = "bottom-left" }) => {
  return (
    <Card variant="small" className={clsx(styles.ToasterContainer, styles[position])}>
      <p>{icon}</p>
      <Text 
        as="p"
        variant="body"
        children={text}
      />
    </Card>
  );
};

export default Toaster;