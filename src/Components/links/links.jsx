import React from 'react';
import { StyledLinks } from './links.styles';

export const Link = (props) => {
  const { href, text } = props;
  return <StyledLinks href={href}>{text}</StyledLinks>;
};

