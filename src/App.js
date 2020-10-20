import React, {useCallback, useState} from 'react';
import axios from 'axios';
import NewsList from './component/NewsList';
import Categories from './component/Categories';
import NewsPage from './component/NewsPage';
import { Route } from 'react-router-dom';

const App = () => {
 
  return (
    <>
      {/* <Categories/>  BrowserRouter로 감싸진 App 내부에 있으므로 Categories의 NavLink가 작동한 것이 App의 Route를 이용해 이동가능함. */}
      <Route path="/:category?" component={NewsPage}/>
    </>
  )
};

export default App;