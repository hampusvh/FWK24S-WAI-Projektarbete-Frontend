import React from 'react'
import styles from "./EditProfile.module.css";
import Input from '../../components/atoms/Input/Input';
import Button from '../../components/atoms/Button/Button';


const EditProfile = () => {
  return (
    <div className={styles.settingsPage}>
        <form className={styles.settingsForm}>
            <Input/>
            <Button/>
        </form>
    </div>
  )
}

export default EditProfile;