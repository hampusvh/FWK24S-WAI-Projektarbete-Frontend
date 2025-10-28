import Button from "../../atoms/Button/Button";
import Card from "../../atoms/Card/Card";
import styles from './UserSettingsSection.module.css';

const UserSettingsSection = ({ onEdit, onLogout, onDelete }) => {
  return (
    <section>
      <Card className={styles.container}>
        <Button onClick={onEdit}>Edit Profile</Button>
        <Button onClick={onLogout}>Logout</Button>
        <Button onClick={onDelete} variant="warning">Delete account</Button>
      </Card>
    </section>
  );
};

export default UserSettingsSection;