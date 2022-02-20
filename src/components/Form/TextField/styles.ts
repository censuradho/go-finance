import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Input = styled.TextInput`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  padding: ${RFValue(18)}px ${RFValue(16)}px;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  border-radius: ${({ theme }) => RFValue(theme.borderRadius.sm)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${RFValue(8)}px;
  border: 1px solid ${({ theme }) => theme.colors.foreground};
`
