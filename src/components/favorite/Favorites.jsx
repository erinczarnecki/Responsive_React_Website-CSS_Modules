import React from 'react';
import styles from './Favorites.module.css';

const Favorites = () => {
    return (
        <div className={styles.favorites}>
            <div className={styles.heading}>
                <h2>Customer Favorites</h2>
                <div className={styles.text_bg}>
                    <p>
                        <span>View our most popular locations</span>
                    </p>
                </div>
            </div>
            <div className={styles.container}>
                {/* Card 1 */}
                <div className={styles.card}>
                    <img src="https://images.unsplash.com/photo-1583119911525-37570f67226b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxNzY0MTM2fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=60"
                        alt="Church Hallway with statues on left and windows on right" />
                    <div className={styles.content}>
                        <h3>Church of Stone</h3>
                    </div>
                </div>
                {/* Card 2 */}
                <div className={styles.card}>
                    <img src="https://images.unsplash.com/photo-1600714888429-242326b473bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8MTgzODU0OHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1296&q=60"
                        alt="Garden with floral arbor. Chairs facing." />
                    <div className={styles.content}>
                        <h3>Garden Arbor</h3>
                    </div>
                </div>
                {/* Card 3 */}
                <div className={styles.card}>
                    <img src="https://images.unsplash.com/photo-1600096194735-ec70b8463112?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGZvcmVzdCUyMHdlZGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                        alt="Wooden Outdoor with windows" />
                    <div className={styles.content}>
                        <h3>Church of the Woods</h3>
                    </div>
                </div>
                {/* Card 4 */}
                <div className={styles.card}>
                    <img src="https://images.unsplash.com/photo-1543359905-c5d15c3a23dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b2NlYW4lMjB3ZWRkaW5nJTIwdmVudWV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                        alt="seaside beach wedding venue" />
                    <div className={styles.content}>
                        <h3>Ocean Front</h3>
                    </div>
                </div>
                {/* Card 5 */}
                <div className={styles.card}>
                    <img src="https://images.unsplash.com/photo-1559060538-01c384567b47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW4lMjByZXNvcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                        alt="Mountain Villa" />
                    <div className={styles.content}>
                        <h3>Mountain Villa</h3>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Favorites
