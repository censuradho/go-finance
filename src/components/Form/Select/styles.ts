import styled from 'styled-components/native'

import { Icon } from 'src/components'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.TouchableOpacity.attrs(props => ({
	...props,
	activeOpacity: props.theme.activityOpacity,
}))`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.foreground};
  background: ${({ theme }) => theme.colors.background};
  flex-direction: row;
  padding: ${RFValue(16)}px ${RFValue(18)}px;
  border-radius: ${({ theme }) => RFValue(theme.borderRadius.sm)}px;
`

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-left: 16px;
`

export const IconSvg = styled(Icon)`
  margin-left: auto;
`