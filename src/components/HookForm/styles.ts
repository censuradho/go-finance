import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
`

export const ErrorMessage = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.red};
  font-family: ${({ theme }) => theme.fonts.regular}
  margin: 7px 0;
`