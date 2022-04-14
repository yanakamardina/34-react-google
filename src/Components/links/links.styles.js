import styled from 'styled-components';
import { Link } from './links';

export const StyledLinks = styled.a`
  color: rgba(0, 0, 0, 0.87);
  text-decoration: none;
  font-family: arial, sans-serif;
  display: inline-block;
  line-height: 24px;
  vertical-align: middle;
  padding-left: 5px;
`;

export const StyledLinkLang = styled(StyledLinks)`
  color: #1a0dab;
`;
