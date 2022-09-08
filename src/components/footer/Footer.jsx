import React from 'react';
import styles from './Footer.module.css';
import Logo from '../../images/Logo.png';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={Logo} alt="Logo" />
                </div>
                <div className={styles.share_btn}>
                    <button>Share a Location</button>
                </div>
            </div>


        </div>
    );
};

export default Footer
