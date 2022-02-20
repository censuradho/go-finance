import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`
export const WrapperHeader = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  margin-top: ${RFValue(50)}px;
  flex-direction: row;
`

export const Header = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  height: ${RFPercentage(42)}px;
  justify-content: flex-start;

`
export const User = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Avatar = styled.Image`
  width: ${RFValue(55)}px;
  height: ${RFValue(55)}px;
  border-radius: ${({ theme }) => RFValue(theme.borderRadius.sm)}px;
  margin-right: 17px;
`


export const Gretting = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.background};
  font-size: ${RFValue(18)}px;
`

export const Username = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.background};
  font-size: ${RFValue(18)}px;
`
