import React, { memo } from 'react'

import { Icon, IconNames } from 'src/components'
import { categories } from 'src/data/categories'

import { useFetch } from 'src/hooks'

import { asyncStorageKeyTransaction } from 'src/services/transactions'
import { GetCategory } from 'src/types/transactions'

import { Header, InfoCard, TransactionListData, Transactions } from './components'


import * as Styles from './styles'

function BaseDashboard () {
	const { data } = useFetch<GetCategory>(asyncStorageKeyTransaction, {
		isGetDataOnMount: true
	})

	const parsedData: TransactionListData[] = data.map(value => ({
		amount: value.amount,
		category: categories.find(category => category.key === value.category_key)?.name || '',
		createdAt: value.created_at,
		id: value.id,
		name: value.icon as IconNames,
		type: value.type,
		color: 'text',
		title: value.name
	}))

	return (
		<Styles.Container>
			<Header />
			<Styles.HightLightCard>
				<InfoCard
					amount={200} 
					icon={<Icon name="arrow-up" color="green" />} 
					description="Última entrada dia 13 de abril" 
				/>
				<InfoCard
					amount={200} 
					icon={<Icon name="arrow-down" color="red" />} 
					description="Última entrada dia 13 de abril" 
				/>
				<InfoCard
					variant="primary"
					amount={200} 
					icon={<Icon name="dollar-sign" color="background" />} 
					description="Última entrada dia 13 de abril" 
				/>
			</Styles.HightLightCard>
			<Transactions 
				data={parsedData}
			/>
		</Styles.Container>
	)
}

export const Dashboard = memo(BaseDashboard)