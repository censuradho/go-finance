import React, { TextInputProps } from 'react-native'

import { memo } from 'react'

import * as Styles from './styles'
import { useTheme } from 'src/hooks'

type NativeProps = Pick<TextInputProps, 
  'onChangeText' 
  | 'value' 
  | 'placeholder' 
  | 'multiline' 
  | 'numberOfLines' 
  | 'onBlur' 
  | 'keyboardType'
  | 'secureTextEntry'
  | 'returnKeyType'
  | 'onSubmitEditing'
  | 'autoCapitalize'
  | 'autoCorrect'
	| 'blurOnSubmit'
>

type TextFieldProps = NativeProps


function BaseTextField ({ value, ...props }: TextFieldProps) {
	const { colors } = useTheme()

	return (
		<Styles.Input 
			{...props}
			placeholderTextColor={colors.text}
		/>
	)
}

export const TextField = memo(BaseTextField)