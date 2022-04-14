import React from 'react';
import { StyledButton } from './button.styles';

export const Button = (props) => {
  const { onClick, text } = props;

  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};
