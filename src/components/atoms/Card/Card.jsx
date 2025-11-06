import styles from './Card.module.css';
import clsx from "clsx";

const Card = ({ children, variant = "medium", className = "", ...props }) => {
  return (
    <div className={clsx(styles.CardContainer, styles[variant], className)} {...props }>
      {children}
    </div>
  );
};

export default Card;