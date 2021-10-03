import React from 'react';

import { Redirect } from 'react-router-dom';
import { Header } from './Header/Header';

export const Profile = ({ isLogin, user,setIsLogin,setUser }) => {
  if (!isLogin) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <Header isLogin={isLogin} setIsLogin={setIsLogin} setUser={setUser} />
      <h1>Profile Page</h1>
      <h1>Welcome {user.name}</h1>
    </>
  );
};

