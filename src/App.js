import React, {useCallback, useState} from 'react';
import axios from 'axios';
import NewsList from './component/NewsList';
import Categories from './component/Categories';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const onSelect = useCallback(category => setSelectedCategory(category), []);

  return (
    <>
      <Categories onSelect={onSelect} />
      <NewsList selectedCategory={selectedCategory}/>
    </>
  )
};

export default App;