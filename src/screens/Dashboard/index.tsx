import React, { memo, useMemo } from 'react'

import { Icon, IconNames, Loading } from 'src/components'
import { categories } from 'src/data/categories'

import { useFetch } from 'src/hooks'

import { asyncStorageKeyTransaction } from 'src/services/transactions'
import { CreateTransaction, GetTransaction } from 'src/types/transactions'

import { Header, InfoCard, TransactionListData, Transactions } from './components'

import { TYPE } from 'src/constants/transaction'

import * as Styles from './styles'

import { formatDate } from 'src/utils'

function BaseDashboard () {
	const { data, isLoading } = useFetch<GetTransaction>(asyncStorageKeyTransaction, {
		isGetDataOnMount: true
	})

	const expense = useMemo(() => data.filter(value => value.type === TYPE.expense), [data])
	const income = useMemo(() => data.filter(value => value.type === TYPE.income), [data])

	const expenseValue = useMemo(() => expense
		?.map(value => value.amount)
		?.reduce((prev, next) => prev + next, 0), [data])

	const incomeValue = useMemo(() => income
		?.map(value => value.amount)
		?.reduce((prev, next) => prev + next, 0), [data])

	const getLastTime = (payload: CreateTransaction[]) =>  {
		if (payload.length === 0) return 0
		// eslint-disable-next-line prefer-spread
		return Math.max.apply(Math, payload.map(value => new Date(value.created_at).getTime()))
	}

	
	const lastTransactionEntryExpense = getLastTime(expense)
	const lastTransactionEntryIncome = getLastTime(income)
	const lastTransaction =  getLastTime(data)


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

	const formatDateHeightLight = (dateTime: number) => {
		if (!dateTime) return 'Sem dados'
		// eslint-disable-next-line quotes
		return formatDate(new Date(dateTime), "'Última entrada dia' dd 'de' MMMM")
	}
	
	const formatDateHeightLightTotal = (date: number) => {
		if (!date) return 'Sem dados'

		// eslint-disable-next-line quotes
		return formatDate(new Date(date), "'De 01 à' dd 'de' MMMM")
	}


	return (
		<Styles.Container>
			<Loading isLoading={isLoading} color="title" />
			<Header />
			<Styles.HightLightCard>
				<InfoCard
					amount={incomeValue} 
					icon={<Icon name="arrow-up" color="green" />} 
					description={formatDateHeightLight(lastTransactionEntryIncome)}
				/>
				<InfoCard
					amount={expenseValue} 
					icon={<Icon name="arrow-down" color="red" />} 
					description={formatDateHeightLight(lastTransactionEntryExpense)}
				/>
				<InfoCard
					variant="primary"
					amount={incomeValue - expenseValue} 
					icon={<Icon name="dollar-sign" color="background" />} 
					description={formatDateHeightLightTotal(lastTransaction)} 
				/>
			</Styles.HightLightCard>
			<Transactions 
				data={parsedData}
			/>
		</Styles.Container>
	)
}

export const Dashboard = memo(BaseDashboard)