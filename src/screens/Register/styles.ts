import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`

export const FormContainer = styled.View`
  padding: ${RFValue(24)}px;
  flex: 1;
`

export const SubmitContainer = styled.View`
  margin-top: auto;
`