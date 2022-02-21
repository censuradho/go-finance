import React, { memo, useMemo } from 'react'
import { ActivityIndicator } from 'react-native'

import { Icon, IconNames, Loading } from 'src/components'
import { categories } from 'src/data/categories'

import { useFetch } from 'src/hooks'

import { asyncStorageKeyTransaction } from 'src/services/transactions'
import { GetCategory } from 'src/types/transactions'

import { Header, InfoCard, TransactionListData, Transactions } from './components'

import { TYPE } from 'src/constants/transaction'

import * as Styles from './styles'

function BaseDashboard () {
	const { data, isLoading } = useFetch<GetCategory>(asyncStorageKeyTransaction, {
		isGetDataOnMount: true
	})

	const expense = useMemo(() => data
		?.filter(value => value.type === TYPE.expense)
		?.map(value => value.amount)
		?.reduce((prev, next) => prev + next, 0), [data])

	const income = useMemo(() => data
		?.filter(value => value.type === TYPE.income)
		?.map(value => value.amount)
		?.reduce((prev, next) => prev + next, 0), [data])

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
			<Loading isLoading={isLoading} />
			<Header />
			<Styles.HightLightCard>
				<InfoCard
					amount={income} 
					icon={<Icon name="arrow-up" color="green" />} 
					description="Última entrada dia 13 de abril" 
				/>
				<InfoCard
					amount={expense} 
					icon={<Icon name="arrow-down" color="red" />} 
					description="Última entrada dia 13 de abril" 
				/>
				<InfoCard
					variant="primary"
					amount={income - expense} 
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