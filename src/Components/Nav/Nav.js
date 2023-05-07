import React from "react";
import styles from "./Nav.module.css";

function Nav() {
    return(
        <div>
            <ul className={styles.nav}>
                <li><a>Cat 1</a></li>
                <li><a>Cat 2</a></li>
                <li><a>Cat 3</a></li>
                <li><a>Cat 4</a></li>
            </ul>
        </div>
    );
};

export default Nav;