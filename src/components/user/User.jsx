import React from 'react';
import styles from './User.module.css';
import Profile from '../../images/user.png';

const User = () => {
    return (
        <div className={styles.user}>
            <div className={styles.left}>
                <img src={Profile} alt="/" />
            </div>
            <div className={styles.header}>
                <h2>Find the <span>perfect</span> place for your <span>special day</span></h2>
                <p>Schedule a viewing today</p>
                <button>Browse Locations</button>
            </div>
        </div>
    )
}

export default User
