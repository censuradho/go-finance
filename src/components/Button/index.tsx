import React, { memo } from 'react'
import { ActivityIndicator } from 'react-native'

import { GestureHandlerRootView, RectButtonProps } from 'react-native-gesture-handler'
import { useTheme } from 'src/hooks'

import * as Styles from './styles'

interface ButtonProps extends Styles.ButtonProps, Omit<RectButtonProps, 'onPress'> {
	children: string
	onPress?: () => void;
	isLoading?: boolean;
}

function BaseButton ({ variant = 'primary', children, isLoading, ...props}: ButtonProps) {
	const { buttons } = useTheme()

	return (
		<GestureHandlerRootView>
			<Styles.Button {...props} variant={variant}>
				{isLoading ? <ActivityIndicator size="small" color={buttons[variant].loading} /> : <Styles.Label variant={variant}>{children}</Styles.Label>}
			</Styles.Button>
		</GestureHandlerRootView>

	)
}

export const Button = memo(BaseButton)
