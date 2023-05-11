import React from "react";
import styles from "./Reddits.module.css";

function Reddits() {

    const redditPosts = async () => {
        const baseUrl = '';
        const endpoint = '';
        const requestParams = '';
        const urlToFetch = '';

        try {
            const response = await fetch(urlToFetch);
            if (response.ok) {
                const jsonResponse = await response.json();
                const post = jsonResponse. ;
            }
        } catch (errors) {
            alert(errors.message); 
        }
    }
    return(
        <div>
            <img className={styles.card}/>
        </div>
    );
};

export default Reddits;