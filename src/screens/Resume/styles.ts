import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`
export const Content = styled.View`
  padding: 0px ${RFValue(24)}px;
  flex: 1;

`
export const ChartContainer = styled.View`
  align-items: center;
`