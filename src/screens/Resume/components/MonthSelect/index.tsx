import React, { memo } from 'react'
import { ButtonIcon } from 'src/components'
import { Flex } from 'src/theme/globalStyles'
import { formatDate } from 'src/utils'

import * as Styles from './styles'

interface MonthSelectProps {
  value: Date,
  onChange?: (action: 'prev' | 'next') => void
}

function BaseMonthSelect ({ value, onChange }: MonthSelectProps) {
	const format = (date: Date) => {
		// eslint-disable-next-line quotes
		return formatDate(new Date(date), "MMM', 'yyyy")
	}
	return (
		<Styles.Container>
			<Flex justifyContent="space-between">
				<ButtonIcon 
					onPress={() => onChange?.('prev')} 
					size={20} 
					name="arrow-left" 
					color="text" 
				/>
				<Styles.CurrentMonth>{format(value)}</Styles.CurrentMonth>
				<ButtonIcon 
					size={20} 
					name="arrow-right" 
					color="text" 
					onPress={() => onChange?.('next')}
				/>
			</Flex>
		</Styles.Container>
	)
}

export const MonthSelect = memo(BaseMonthSelect)