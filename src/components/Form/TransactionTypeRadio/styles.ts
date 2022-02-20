import styled, { DefaultTheme } from 'styled-components/native'


import { RFValue } from 'react-native-responsive-fontsize'
import { RectButton } from 'react-native-gesture-handler'

type Variant = keyof DefaultTheme['transactionTypeRadio']

export interface ButtonProps {
  variant: Variant;
  isActive?: boolean;
}

export const Button = styled.TouchableOpacity.attrs((props) => ({
	...props,
	activeOpacity: props.theme.activityOpacity,
}))<ButtonProps>`
  width: 48.8%;
  flex-direction: row;
  background: ${({ theme, variant, isActive }) => 
		isActive 
			? theme.transactionTypeRadio[variant].active.background : 
			theme.transactionTypeRadio[variant].background
};
  border-radius: ${({ theme }) => RFValue(theme.borderRadius.sm)}px;
  border: 1px solid ${({ theme, variant, isActive }) => 
		isActive 
			? theme.transactionTypeRadio[variant].active.border : 
			theme.transactionTypeRadio[variant].border
};
  align-items: center;
  justify-content: center;
  height: ${RFValue(56)}px;
`

export const Label = styled.Text<ButtonProps>`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme, variant, isActive }) => 
		isActive 
			? theme.transactionTypeRadio[variant].active.text : 
			theme.transactionTypeRadio[variant].text
};
  margin-left: 14px;
`