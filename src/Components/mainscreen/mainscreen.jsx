import React from 'react';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Main } from '../main/main';

export const MainScreen = () => {
  return (
    <>
      <Header />
      <Main/>
      <Footer/>
    </>
  );
};
