import React from 'react';
import { Header } from '../header/header';
import { SearchScreen } from '../SearcPanel/searchpanel';
import { InputSearch } from '../input/input';
import { GoogleLogo } from '../../Images/images.styles';
import Logo from '../../Images/googlelogo.png'
import { DivLogo } from '../../Images/images.styles';
import { SearchDiv } from '../input/input.styles';
import {SearchPalelStyle} from '../SearcPanel/searchpanel.styles'
import { InputDiv } from '../input/input.styles';
import {IconKeyboard} from '../input/input.styles'
import {ReactComponent as IconSearch} from '../../Images/search.svg'
import Keyboard from '../../Images/keyboard.png';
import {ReactComponent as IconVoice} from '../../Images/voice.svg'
import {IconSearshWrapper, IconKeyboardWrapper, IconVoiceWrapper} from '../input/input.styles'
import { Text } from '../../text/text';

export const MainScreen = () => {
  return (
    <>
      <Header />
      <DivLogo> 
      <GoogleLogo src = {Logo}/>
      </DivLogo>
      <SearchDiv>
      <InputDiv>
      <InputSearch />
      <IconSearshWrapper>
      <IconSearch/>
      </IconSearshWrapper>
      <IconKeyboardWrapper>
      <IconKeyboard src = {Keyboard}/>
      </IconKeyboardWrapper>
      <IconVoiceWrapper>
      <IconVoice/>
      </IconVoiceWrapper>
      </InputDiv>
      <SearchPalelStyle>
      <SearchScreen />
      </SearchPalelStyle>
      </SearchDiv>
      <Text/>
    </>
  );
};
