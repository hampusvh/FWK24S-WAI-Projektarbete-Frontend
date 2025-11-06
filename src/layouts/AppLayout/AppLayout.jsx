import { Outlet } from "react-router-dom";
import Sidebar from "../../components/organisms/SideBar/SideBar";
import styles from "./AppLayout.module.css";
import { useConsent } from "../../providers/ConsentProvider";

const AppLayout = ({ children }) => {
  const { setEditing } = useConsent();

  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.content}>
        {children}
      </main>
      <footer className={styles.footer}>
        <div role="button" className={styles.cookieSettings} onClick={() => setEditing(true)}>Cookie Settings</div>
      </footer>
    </div>
  );
};

export default AppLayout;
