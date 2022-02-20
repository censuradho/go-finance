import React, { ComponentProps, memo } from 'react'
import { DefaultTheme } from 'styled-components/native'

import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

import { useTheme } from 'src/hooks/useTheme'

type FeatherProps = Pick<ComponentProps<typeof Feather>, 'name' | 'size'>
export type IconNames = FeatherProps['name']

interface IconProps extends FeatherProps {
  color?: keyof DefaultTheme['colors']
	customColor?: string
}


function BaseIcon ({ size, color = 'background', customColor, ...props }: IconProps) {
	const { colors } = useTheme()

	return <Feather {...props} color={customColor || colors[color]} size={size ? RFValue(size) : RFValue(24)} />
}

export const Icon = memo(BaseIcon)