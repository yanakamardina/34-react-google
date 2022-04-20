import React from 'react';
import { MainStyle } from './main.styles';
import {SearchScreen} from '../SearcPanel/searchpanel'
import { InputSearch } from '../input/input';
import { GoogleLogo } from '../../Images/images.styles';
import Logo from '../../Images/googlelogo.png'
import { DivLogo } from '../../Images/images.styles';
import {SearchPalelStyle} from '../SearcPanel/searchpanel.styles'
import { InputDiv, IconKeyboard, SearchDiv,IconSearshWrapper, IconKeyboardWrapper, IconVoiceWrapper } from '../input/input.styles';
import {ReactComponent as IconSearch} from '../../Images/search.svg'
import Keyboard from '../../Images/keyboard.png';
import {ReactComponent as IconVoice} from '../../Images/voice.svg'
import { Text } from '../text/text';

export const Main = () => {
  return (
    <MainStyle>
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
    </MainStyle>
  )
}