import React from 'react';
import { Button } from '../button/button';
import {ButtonPosition} from '../button/button.styles'

export const SearchScreen = () => {
  return (
    <ButtonPosition>
      <Button text="Поиск в Google" onClick={() => alert('GO!')} />
      <Button text="Мне повезёт!" onClick={() => alert('Good Luck!')} />
    </ButtonPosition>
  );
};
