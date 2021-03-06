import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 0 ${RFValue(24)}px;
  margin-top: ${RFPercentage(12)}px;
`


export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
  margin-bottom : ${RFValue(16)}px;

`