import styled from 'styled-components';

export const StyledLinks = styled.a`
  color: rgba(0, 0, 0, 0.87);
  text-decoration: none;
  font-family: arial, sans-serif;
  font-size: 13px;
  display: inline-block;
  line-height: 24px;
  vertical-align: middle;
  padding-right: 15px;
`;

export const StyledLinkLang = styled(StyledLinks)`
  color: #1a0dab;
  padding-left: 5px;
`;

export const FooterLinks = styled(StyledLinks)`
  color: #70757a;
  padding: 15px;
  text-decoration: none;
  font-size: 14px;
  font-family: arial, sans-serif;
`;
