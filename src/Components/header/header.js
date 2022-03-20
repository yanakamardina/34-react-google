import React from 'react';
import { Link } from '../links';

export const Header = () => {
  return (
    <div>
      <Link href="https://mail.google.com/mail/u/0/?ogbl#inbox" text="Почта" />
      <Link
        href="https://www.google.com.ua/imghp?hl=ru&authuser=0&ogbl"
        text="Картинки"
      />
    </div>
  );
};
