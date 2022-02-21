import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;  
  height: ${RFValue(113)}px;
  background: ${({ theme }) => theme.colors.primary};
  justify-content: flex-end;
  padding-bottom:  ${RFValue(19)}px;
  align-items: center;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`
