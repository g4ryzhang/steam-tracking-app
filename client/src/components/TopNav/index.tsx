import { useRef } from 'react';
import styles from './style.module.css';
import { FaSteam, FaUser } from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';

interface TopNavProp {
  setInputValue: any;
  value: string;
  handleSubmit: any;
  listAllGames: any;
}

const TopNav: React.FC<TopNavProp> = ({ setInputValue, value, handleSubmit, listAllGames }) => {
  const textFieldRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // console.log(e.target);
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (value.length) {
      handleSubmit(e);
    } else {
      listAllGames(e);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.brandIcon}>
        <FaSteam />
      </div>
      <div className={styles.searchBarWrapper}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            ref={textFieldRef}
            placeholder="Enter game name or game id"
            className={styles.input}
            value={value}
            onChange={handleInputChange}
          ></input>
          <button className={styles.searchButton} onClick={handleSearch}>
            <FaMagnifyingGlass />
          </button>
        </div>
      </div>
      <div className={styles.userIcon}>
        <FaUser />
      </div>
    </div>
  );
};

export default TopNav;
