import React,  { ComponentProps, memo } from 'react'
import {  GestureHandlerRootView } from 'react-native-gesture-handler'

import { ButtonRound, Icon } from 'src/components'

type ButtonRoundProps = Omit<ComponentProps<typeof ButtonRound>, 'children'>
type IconProps = Omit<ComponentProps<typeof Icon>, 'size'>

interface ButtonIconProps extends ButtonRoundProps, IconProps {}

function BaseButtonIcon ({ color, name, ...props }: ButtonIconProps) {

	return (
		<GestureHandlerRootView>
			<ButtonRound {...props}>
				<Icon color={color} name={name} size={props.size - 4} />
			</ButtonRound>
		</GestureHandlerRootView>

	)
}

export const ButtonIcon = memo(BaseButtonIcon)