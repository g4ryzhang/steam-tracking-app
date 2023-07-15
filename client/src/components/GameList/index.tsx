// import { useState } from 'react';
import styles from './style.module.css';
import { FaBell } from 'react-icons/fa';

const searchResults = [
  {
    name: 'Game Name',
    currentPrice: '20.00',
    initialPrice: '40.00',
    discountPercentage: '50%',
    notify: true,
  },
  {
    name: 'Game Name 2',
    currentPrice: '20.00',
    initialPrice: '80.00',
    discountPercentage: '75%',
    notify: false,
  },
];

const GameList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <div className={`${styles.tableRow} ${styles.tableHead}`}>
          <div>Name</div>
          <div>Current</div>
          <div>Initial</div>
          <div>Discount</div>
          <div>Notification</div>
        </div>
        {searchResults.map((g, idx) => {
          return (
            <div
              className={`${styles.tableRow} ${styles.tableResult}`}
              key={idx}
            >
              <div>{g.name}</div>
              <div>{g.currentPrice}</div>
              <div>{g.initialPrice}</div>
              <div>{g.discountPercentage}</div>
              <div className={`${styles.bell} ${g.notify ? styles.bellActive : null}`}>
                <FaBell />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GameList;
