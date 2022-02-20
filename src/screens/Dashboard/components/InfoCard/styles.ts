import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'


export interface CardProps {
  variant?: 'default' | 'primary'
}

export const Container = styled.View<CardProps>`
  padding: ${RFValue(19)}px ${RFValue(23)}px;
  border: 1px solid ${({ theme }) => theme.colors.foreground};
  padding-bottom: ${RFValue(42)}px;
  ${({ variant = 'default' }) => variant === 'default'  && css`
    background: ${({ theme }) => theme.colors.background};
  `};
  ${({ variant = 'default' }) => variant === 'primary'  && css`
    background: ${({ theme }) => theme.colors.primary};
  `};
  ${({ variant = 'default' }) => variant === 'primary'  && css`
      border-color: #fff;
  `};


  border-radius: ${({ theme }) => RFValue(theme.borderRadius.sm)}px;
  width: ${RFValue(285)}px;
  margin-right: 16px;
`

export const Title = styled.Text<CardProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(14)}px;

  ${({ variant = 'default' }) => variant === 'primary'  && css`
    color: ${({ theme }) => theme.colors.background};
  `};
`

export const Amount = styled.Text<CardProps>`
  font-family: ${({ theme }) => theme.fonts.mediumn};
  margin-top: 24px;
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.title};

  ${({ variant }) => variant === 'primary' && css`
    color: ${({ theme }) => theme.colors.background};
  `};
`

export const Description = styled.Text<CardProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(12)}px;
  ${({ variant }) => variant === 'primary' && css`
    color: ${({ theme }) => theme.colors.background};
  `};
`