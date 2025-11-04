import Button from "../../atoms/Button/Button";
import Card from "../../atoms/Card/Card";
import styles from './UserSettingsSection.module.css';
import { Link } from "react-router-dom";

const UserSettingsSection = ({ onEdit, onLogout, onDelete }) => {
  return (
    <section>
      <Card className={styles.container}>
        <Link to="/settings">
        <Button onClick={onEdit}>Edit Profile</Button>
        </Link>
        <Button onClick={onLogout}>Logout</Button>
        <Button onClick={onDelete} variant="warning">Delete account</Button>
      </Card>
    </section>
  );
};

export default UserSettingsSection;