import React from 'react';


import { Link } from 'react-router-dom';
//styles
import { Wrapper, Content, List } from './Header.style';

export const Header = ({ isLogin, setIsLogin, setUser }) => {
  return (
    <div>
      <Wrapper>
        <Content>
          <Link to="/">
            <h2>Intern Site</h2>
          </Link>
          <List>
            <Link to="/aboutus">
              <li>About us</li>
            </Link>
            {!isLogin ? (
              <Link to="/login">
                <li>Login</li>
              </Link>
            ) : (
              <Link to="/profile">
                <li>Profile</li>
              </Link>
            )}
            {!isLogin ? (
              <Link to="/signup">
                <li>Sign Up</li>
              </Link>
            ) : (
              <li onClick={() => setIsLogin(false)}>LogOut</li>
            )}
          </List>
        </Content>
      </Wrapper>
    </div>
  );
};

