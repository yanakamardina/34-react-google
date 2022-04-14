import React from 'react';
import { Link } from '../links';
import { ReactComponent as IconMenu } from '../../Images/icon.svg';
import { MenuIconWrapper, StyledHeader } from './header.styles';

export const Header = () => {
  return (
    <StyledHeader >
      <div>
        <Link
          href="https://mail.google.com/mail/u/0/?ogbl#inbox"
          text="Почта"
        />
        <Link
          href="https://www.google.com.ua/imghp?hl=ru&authuser=0&ogbl"
          text="Картинки"
        />
      </div>
      <MenuIconWrapper>
        <IconMenu />
      </MenuIconWrapper>
    </StyledHeader>
  );
};
