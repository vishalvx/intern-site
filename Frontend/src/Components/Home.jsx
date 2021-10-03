import React from 'react';

//GlobalStyles
import { GlobalStyles } from '../GlobalStyles';
//Components
import { Header } from './Header/Header';
import { HomeContent } from './HomeContent/HomeContent';
import { Footer } from './Footer/Footer';

export const Home = ({ isLogin, user, setIsLogin, setUser }) => {
  return (
    <>
      <Header
        isLogin={isLogin} 
        
        setIsLogin={setIsLogin}
        setUser={setUser}
      />
      <HomeContent isLogin={isLogin} user={user} />
      <Footer />
      <GlobalStyles />
    </>
  );
};
