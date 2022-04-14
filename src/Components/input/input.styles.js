import styled from 'styled-components';

export const StyledInput = styled.input`
  display: flex;
  justify-content: center;
  z-index: 3;
  height: 44px;
  background: #fff;
  border: 1px solid #dfe1e5;
  box-shadow: none;
  border-radius: 24px;
  width: 100%;

  :hover {
    background-color: #fff;
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
    border-color: rgba(223, 225, 229, 0);
  }
`;

export const InputDiv = styled.div`
  width: 580px;
  margin: 0 auto;
  position: relative;
`;

export const IconSearch = styled.img``;

export const IconSearshWrapper = styled.div`
  width: 20px;
  * {
    width: 100%;
  }
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-45%);
  left: 15px;
`;

export const IconKeyboard = styled.img``;

export const IconKeyboardWrapper = styled.div`
  width: 24px;
  * {
    width: 100%;
  }
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-45%);
  right: 55px;
`;

export const IconVoice = styled.img``;

export const IconVoiceWrapper = styled.div`
  width: 24px;
  * {
    width: 100%;
  }
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-45%);
  right: 15px;
`;

export const SearchDiv = styled.div`
  padding: 20px;
`;
