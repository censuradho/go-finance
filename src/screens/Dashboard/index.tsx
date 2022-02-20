import React, { memo } from 'react'
import { Icon } from 'src/components'

import { Header, InfoCard, TransactionListData, Transactions } from './components'


import * as Styles from './styles'

function BaseDashboard () {
	const data: TransactionListData[] = [
		{
			id: 1,
			amount: 'R$ 2.000,00',
			type: 'expense',
			category: 'Hospital',
			color: 'text',
			createdAt: new Date().toISOString(),
			name: 'activity',
			title: 'Desenvolvimento de site'
		},
		{
			id: 2,
			amount: 'R$ 2.000,00',
			type: 'expense',
			category: 'Hospital',
			color: 'text',
			createdAt: new Date().toISOString(),
			name: 'activity',
			title: 'Desenvolvimento de site'
		},
		{
			id: 3,
			amount: 'R$ 2.000,00',
			type: 'income',
			category: 'Hospital',
			color: 'text',
			createdAt: new Date().toISOString(),
			name: 'activity',
			title: 'Desenvolvimento de site'
		},
		{
			id: 4,
			amount: 'R$ 2.000,00',
			type: 'income',
			category: 'Hospital',
			color: 'text',
			createdAt: new Date().toISOString(),
			name: 'activity',
			title: 'Desenvolvimento de site'
		},
		{
			id: 5,
			amount: 'R$ 2.000,00',
			type: 'expense',
			category: 'Hospital',
			color: 'text',
			createdAt: new Date().toISOString(),
			name: 'activity',
			title: 'Desenvolvimento de site'
		}
	]

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
				data={data}
			/>
		</Styles.Container>
	)
}

export const Dashboard = memo(BaseDashboard)