import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.foreground};
  border-radius: ${({ theme }) => theme.borderRadius.sm}px;
  padding: ${RFValue(24)}px ${RFValue(20)}px;
  margin-bottom: ${RFValue(16)}px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`

interface AmountProps {
  type: string
}

export const Amount = styled.Text<AmountProps>`
  color: ${({ theme, type }) => type === 'expense' ?  theme.colors.red : theme.colors.green };
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const Type = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-left: 16px;


`
export const CreatedAt = styled(Type)`
  margin-left: 0;
`