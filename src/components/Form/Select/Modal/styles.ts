import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { colors } from 'src/theme/templates/colors'

export const Modal = styled.Modal`

`

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View`
  padding: ${RFValue(16)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: ${RFValue(24)}px;

`

interface ItemProps {
  isActive?: boolean
}

export const Item = styled.TouchableOpacity.attrs(props => ({
	...props,
	activeOpacity: props.theme.activityOpacity
}))<ItemProps>`
  width: 100%;
  padding:${RFValue(15)}px;
  flex-direction: row;
  align-items: center;
  background: ${({ theme, isActive }) => isActive ? theme.colors.primary : 'transparent'};
`

export const ItemName = styled.Text<ItemProps>`
  font-size: ${RFValue(14)}px
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-left: 14px;
  color: ${({ theme, isActive }) => isActive ? theme.colors.background : theme.colors.text};
`

export const Footer = styled.View`
  width: 100%;
  padding: ${RFValue(16)}px;
`