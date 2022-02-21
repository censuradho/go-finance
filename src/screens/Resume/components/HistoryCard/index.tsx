import React, { memo } from 'react'
import { toCurrency } from 'src/utils'

import * as Styles from './styles'

import { HistoryCardProps } from './types'

function BaseHistoryCard ({ amount, title, color }: HistoryCardProps) {
	return (
		<Styles.Container color={color}>
			<Styles.Title>{title}</Styles.Title>
			<Styles.Amount>{toCurrency(amount)}</Styles.Amount>
		</Styles.Container>
	)
}

export const HistoryCard = memo(BaseHistoryCard)