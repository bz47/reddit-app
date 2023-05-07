import React from "react";
import styles from "./Nav.module.css";

function Nav() {
    return(
        <div className={styles.nav}>
            <ul>
                <li >Cat 1</li>
                <li>Cat 2</li>
                <li>Cat 3</li>
                <li>Cat 4</li>
            </ul>
        </div>
    );
};

export default Nav;