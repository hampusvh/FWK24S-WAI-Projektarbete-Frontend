import React from 'react'
import styles from "./AgreementTerms.module.css";
import { Link } from "react-router-dom";

const AgreementTerms = () => {
  return (
    <div>
        <div className={styles.terms_card}>
            <h3>Terms of agreement</h3>
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate fugiat corporis, recusandae, reprehenderit distinctio est aliquam, earum vitae non mollitia voluptas consequatur aperiam. Libero tempore, ex explicabo beatae soluta commodi. <br/> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed dolorem, delectus nihil a rerum vitae temporibus, doloremque doloribus error accusantium voluptas, rem recusandae totam ad facilis architecto. Doloremque, sit quibusdam?</div>
            <Link to="/register">Back</Link>
        </div>
    </div>
  )
}

export default AgreementTerms;
