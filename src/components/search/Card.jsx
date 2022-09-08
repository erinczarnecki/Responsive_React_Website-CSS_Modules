import React from 'react';
import styles from './Search.module.css';

const Card = ({ image, location }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt="/" />
            <p>{location}</p>

        </div>
    );
};


export default Card
