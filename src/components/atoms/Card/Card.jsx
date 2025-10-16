import styles from './Card.module.css';
import clsx from "clsx";

const Card = ({ children, variant = "medium", className = "" }) => {
  return (
    <div className={clsx(styles.CardContainer, styles[variant], className)}>
      {children}
    </div>
  );
};

export default Card;