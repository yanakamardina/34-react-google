import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: #f8f9fa;
  border: 1px solid #f8f9fa;
  border-radius: 4px;
  color: #3c4043;
  font-family: arial, sans-serif;
  font-size: 14px;
  margin: 11px 4px;
  padding: 0 16px;
  line-height: 27px;
  height: 36px;
  min-width: 54px;
  text-align: center;
  cursor: pointer;
  user-select: none;

  :hover {
    box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
    border: 1px solid #dadce0;
    color: #202124;
  }
`;

export const ButtonPosition = styled.div`
  display: flex;
  justify-content: center;
`;
