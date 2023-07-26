// import { useState } from 'react';
import styles from './style.module.css';
import { FaBell, FaTrash } from 'react-icons/fa';

// {
//   name: game.name,
//   initialPrice: initPrice,
//   currentPrice: finalPrice,
//   discountPercentage: discount,
// }

interface GameListProps {
  searchResults: Record<string, string>[];
  handleDelete: any;
}

const GameList: React.FC<GameListProps> = ({ searchResults, handleDelete }) => {
  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <div className={`${styles.tableRow} ${styles.tableHead}`}>
          <div>Name</div>
          <div>Current</div>
          <div>Initial</div>
          <div>Discount</div>
          <div>Notification</div>
          <div>Delete</div>
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
              <div
                className={`${styles.bell} ${
                  g.notify ? styles.bellActive : null
                }`}
              >
                <FaBell />
              </div>
              <div className={styles.trash} onClick={() => handleDelete(g.name)}>
                <FaTrash />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GameList;
