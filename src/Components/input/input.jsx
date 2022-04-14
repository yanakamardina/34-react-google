import React from 'react';
import { StyledInput } from './input.styles';

export const InputSearch = (props) => {
  const { onchange } = props;
  return <StyledInput onchange={onchange}></StyledInput>;
};
