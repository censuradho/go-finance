import React, { memo, ReactNode } from 'react'

import { Flex } from 'src/theme/globalStyles'

import { toCurrency } from 'src/utils'

interface InfoCardProps extends Styles.CardProps {
	icon: ReactNode;
	amount: number;
	description?: string
}

import * as Styles from './styles'

function BaseInfoCard ({ variant, icon, amount, description }: InfoCardProps) {
	return (
		<Styles.Container variant={variant}>
			<Flex justifyContent="space-between" fullWidth>
				<Styles.Title variant={variant}>Entrada</Styles.Title>
				{icon}
			</Flex>
			<Styles.Amount variant={variant}>{toCurrency(amount)}</Styles.Amount>
			<Styles.Description variant={variant}>{description}</Styles.Description>
		</Styles.Container>
	)
}

export const InfoCard = memo(BaseInfoCard)