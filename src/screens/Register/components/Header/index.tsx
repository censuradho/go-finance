import React, { memo } from 'react'

interface HeaderProps {
  title: string
}

import * as Styles from './styles'

function BaseHeader ({ title }: HeaderProps) {
	return (
		<Styles.Container>
			<Styles.Title>{title}</Styles.Title>
		</Styles.Container>
	)
}

export const Header = memo(BaseHeader)