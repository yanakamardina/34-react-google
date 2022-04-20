import React from 'react'
import { TextFooter } from '../text/text.styles'
import {FooterWrapper, FooterLinksWrapper, FooterLinksDivOne, FooterLinksDivTwo} from '../../Components/footer/footer.styles'
import { FooterLinks } from '../links/links.styles'

export const Footer = () => {
  return (
    <FooterWrapper>
    <TextFooter>
      Украина
    </TextFooter>
    <FooterLinksWrapper>
    <FooterLinksDivOne>
    <FooterLinks href = '#'>Всё о Google</FooterLinks>
    <FooterLinks href = '#'>Реклама</FooterLinks>
    <FooterLinks href = '#'>Для бизнеса</FooterLinks>
    <FooterLinks href = '#'>Как работает Google Поиск</FooterLinks>
    </FooterLinksDivOne>
    <FooterLinksDivTwo>
    <FooterLinks href = '#'>Конфиденциальность</FooterLinks>
    <FooterLinks href = '#'>Условия</FooterLinks>
    <FooterLinks href = '#'>Настройки</FooterLinks>
    </FooterLinksDivTwo>
    </FooterLinksWrapper>
    </FooterWrapper>
  )
}