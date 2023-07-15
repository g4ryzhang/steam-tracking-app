import { useRef } from 'react';
import styles from './style.module.css';
import { FaSteam, FaUser } from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6'

const TopNav = () => {
  const textFieldRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {console.log('submit')};

  return (
    <div className={styles.container}>
      <div className={styles.brandIcon}><FaSteam /></div>
      <div className={styles.searchBarWrapper}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            ref={textFieldRef}
            placeholder="Enter game name or game id"
            className={styles.input}
          ></input>
          <button
            className={styles.searchButton}
            onClick={handleSubmit}
          >
            <FaMagnifyingGlass />
          </button>
        </div>
      </div>
      <div className={styles.userIcon}><FaUser/></div>
    </div>
  );
};

export default TopNav;
