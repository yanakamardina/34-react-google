import React from 'react';
import { Button } from '../button';

export const MainScreen = () => {
  return (
    <div>
      <Button text="Поиск в Google" onClick={() => alert('GO!')} />
      <Button text="Мне повезёт!" onClick={() => alert('Good Luck!')} />
    </div>
  );
};
