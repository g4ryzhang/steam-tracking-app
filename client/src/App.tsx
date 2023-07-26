import { useState } from 'react';
import './App.css';
import GameList from './components/GameList';
import TopNav from './components/TopNav';

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

const tempResults = [
  {
    name: 'Game Name',
    currentPrice: '20.00',
    initialPrice: '40.00',
    discountPercentage: '50%',
    // notify: true,
  },
  {
    name: 'Game Name 2',
    currentPrice: '20.00',
    initialPrice: '80.00',
    discountPercentage: '75%',
    // notify: false,
  },
];

const App = () => {
  const [value, setValue] = useState<string>('');
  const [gameList, setGameList] = useState<Record<string, string>[]>([]);

  const searchGame = async () => {
    try {
      const res = await axios.post('/api/games', {
        name: value,
        currency: 'cad',
      });

      setGameList((list) => {
        const newList = [...list];
        newList.push(res.data);
        return newList;
      });
    } catch (e) {
      console.error(e);
    } finally {
      setValue('');
    }
    

  };

  const listAllGames = async () => {
    const res = await axios.get('/api/games');

    setGameList(res.data);
  }

  const deleteGame = async (name: string) => {
    const res = await axios.delete(`/api/games?name=${name}`);

    setGameList(res.data);
  }

  return (
    <>
      <TopNav
        value={value}
        setInputValue={setValue}
        handleSubmit={searchGame}
        listAllGames={listAllGames}
      />
      <GameList searchResults={tempResults} handleDelete={deleteGame.bind(this)}/>
    </>
  );
};

export default App;
