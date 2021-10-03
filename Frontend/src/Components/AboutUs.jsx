import React from 'react';
import { Header } from './Header/Header';
import { AboutContent } from './AboutContent/AboutContent';
import { Footer } from './Footer/Footer';

export const AboutUs = ({
  setIsLoginClick,
  isLoginClick,
  setIsSignUpClick,
  isSignUpClick,
}) => {
  return (
    <>
      <Header />
      <AboutContent />
      <Footer />
    </>
  );
};
