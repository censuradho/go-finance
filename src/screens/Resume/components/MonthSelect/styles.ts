import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  margin-top: 18px;
  padding: 0 ${RFValue(16)}px;
`

export const CurrentMonth = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.mediumn};
  font-size: ${RFValue(20)}px;
`