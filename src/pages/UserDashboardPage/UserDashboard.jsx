import UserSettingsSection from "../../components/organisms/UserSettingsSection/UserSettingsSection";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from 'react';

const UserDashboard = () => {
  const { handleLogout, handleDeleteUser } = useAuth();
  const [ id, setId ] = useState(null);

  useEffect(() => {
    const retrivedId = sessionStorage.getItem("id");
    setId(retrivedId);
  }, [])

  return (
    <div>
      <h1>Dashboard</h1>
      <UserSettingsSection onLogout={handleLogout} onDelete={() => handleDeleteUser(id)}/>
    </div>
  );
};

export default UserDashboard;