import React from "react";
import styles from "./Footer.module.css";

function Footer() {
    return(
        <div>
            <button className={styles.btn}>Back</button>
            <button className={styles.btn}>Forward</button>
        </div>
    );
};

export default Footer;