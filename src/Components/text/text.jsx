import React from 'react';
import { StyleText, StyleTextDiv } from './text.styles';
import { StyledLinkLang } from '../links/links.styles';

export const Text = () => {
  return (
    <StyleTextDiv>
      <StyleText>
        Сервисы Google доступны на этих языках:
      </StyleText>
      <StyledLinkLang href="#"> українська</StyledLinkLang>
    </StyleTextDiv>
  );
};
