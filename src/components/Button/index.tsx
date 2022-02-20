import React, { memo } from 'react'
import { GestureHandlerRootView, RectButtonProps } from 'react-native-gesture-handler'

import * as Styles from './styles'

interface ButtonProps extends Styles.ButtonProps, RectButtonProps {
	children: string
}

function BaseButton ({ variant, children, ...props}: ButtonProps) {
	return (
		<GestureHandlerRootView>
			<Styles.Button {...props} variant={variant}>
				<Styles.Label variant={variant}>{children}</Styles.Label>
			</Styles.Button>
		</GestureHandlerRootView>

	)
}

export const Button = memo(BaseButton)
