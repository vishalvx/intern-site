import React from 'react';
//styles
import { Wrapper, Content } from './NotFound.style';
//component
import { Header } from '../Header/Header';

export const NotFound = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Content>
          <h2> page not found </h2>
          <p>Go back to home page</p>
        </Content>
      </Wrapper>
    </>
  );
};
