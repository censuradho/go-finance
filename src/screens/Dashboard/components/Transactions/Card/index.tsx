import React, { ComponentProps, memo } from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { Icon } from 'src/components'
import { format } from 'date-fns'

import { Flex } from 'src/theme/globalStyles'

import * as Styles from './styles'

import { toCurrency } from 'src/utils'

type Icon = Pick<ComponentProps<typeof Icon>, 'name' | 'color'>

interface CardProps extends Icon {
	title: string,
	category: string,
	type: string
	amount: number,
	createdAt: string
}



function Card ({ name, type, color, category, title, amount, createdAt }: CardProps) {
	const amountParsed = toCurrency(amount)

	return (
		<Styles.Container>
			<Styles.Title>{title}</Styles.Title>
			<Styles.Amount type={type}>{type === 'expense' ?  `-${amountParsed}` : amountParsed}</Styles.Amount>
			<Flex marginTop={RFValue(20)} justifyContent="space-between" alignItems="center">
				<Flex>
					<Icon name={name} color={color} />
					<Styles.Type>{category}</Styles.Type>
				</Flex>
				<Styles.CreatedAt>{format(new Date(createdAt), 'dd/mm/yyyy')}</Styles.CreatedAt>
			</Flex>

		</Styles.Container>
	)
}

export default memo(Card)