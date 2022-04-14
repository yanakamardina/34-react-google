import styled from 'styled-components';

export const MenuIconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: none;
  svg {
    width: 30px;
    height: 30px;
    opacity: 0.7;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background: rgba(60, 64, 67, 0.08);
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
`;
