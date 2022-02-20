import React, { ComponentProps, memo, ReactNode } from 'react'
import { BorderlessButton } from 'react-native-gesture-handler'

import * as Styles from './styles'

type BorderlessButtonProps = Pick<ComponentProps<typeof BorderlessButton>, 'onPress'>

interface ButtonRoundProps extends Styles.ButtonProps, BorderlessButtonProps {
  children: ReactNode
}

function BaseButtonRound ({ children, ...props }: ButtonRoundProps) {
	return (	
		<Styles.Button {...props}>{children}</Styles.Button>
	)
}

export const ButtonRound = memo(BaseButtonRound)