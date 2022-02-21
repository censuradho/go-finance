import React, { memo } from 'react'
import { useTheme } from 'src/hooks'
import { DefaultTheme } from 'styled-components/native'
import { Modal } from '../Form/Select/Modal/styles'

import * as Styles from './styles'

interface LoadingProps extends Styles.Props {
  isLoading?: boolean;
	color?: keyof DefaultTheme['colors']
}

function BaseLoading ({ isLoading = false, color = 'background', position }: LoadingProps) {

	const { colors } = useTheme()

	return (
		<Modal transparent animationType="fade" visible={isLoading}>
			<Styles.Container position={position}>
				<Styles.Loading color={colors[color]} size="large" />
			</Styles.Container>
		</Modal>

	)
}

export const Loading = memo(BaseLoading)