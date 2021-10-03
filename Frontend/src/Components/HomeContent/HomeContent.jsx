import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Wrapper, Content, Button } from './HomeContent.styles';

export const HomeContent = ({ isLogin }) => {
  return (
    <>
      <Wrapper>
        <Content>
          <h1> Welcome To Intern site </h1>
          <p>connect skillful students to Their exprience </p>
        </Content>
        {!isLogin && (
          <div className="buttons">
            <Link to="/login">
              <Button>Login</Button>
            </Link>
            <Link to="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        )}
      </Wrapper>
    </>
  );
};
HomeContent.propTypes = {
  isLogin: PropTypes.bool,
};
