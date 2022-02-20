import styled from 'styled-components/native'

import { RectButton } from 'react-native-gesture-handler'
import { theme } from 'src/theme/templates'
import { RFValue } from 'react-native-responsive-fontsize'

type Variant = keyof typeof theme['buttons']

export interface ButtonProps {
  variant?: Variant
}

export const Button = styled(RectButton).attrs(props => ({
	...props,
	activeOpacity: props.theme.activityOpacity,
}))<ButtonProps>`
  background: ${({ theme, variant = 'primary' }) => theme.buttons[variant].background};
  color: ${({ theme, variant = 'primary' }) => theme.buttons[variant].color};
  height: ${RFValue(56)}px;
  border-radius: ${({ theme }) => RFValue(theme.borderRadius.sm)}px;
  align-items: center;
  justify-content: center;
`

export const Label = styled.Text<ButtonProps>`
  font-family: ${({ theme }) => theme.fonts.mediumn};
  color: ${({ theme, variant = 'primary' }) => theme.buttons[variant].color};
`