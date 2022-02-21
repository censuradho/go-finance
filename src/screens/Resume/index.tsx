import React, { memo, useCallback, useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { VictoryPie } from 'victory-native'

import * as Styles from './styles'

import { Header, HistoryCard, MonthSelect  } from './components'

import { useFetch, useTheme } from 'src/hooks'

import { asyncStorageKeyTransaction } from 'src/services/transactions'

import { GetTransaction } from 'src/types/transactions'
import { TYPE } from 'src/constants/transaction'

import { categories } from 'src/data/categories'
import { RFValue } from 'react-native-responsive-fontsize'
import { addMonths, subMonths } from 'date-fns'
import { useFocusEffect } from '@react-navigation/native'

function BaseResume () {
	const { colors } = useTheme()

	const { data, getData } = useFetch<GetTransaction>(asyncStorageKeyTransaction)
	
	const [selectedDate, setSelectedDate] = useState(new Date())

	const _data = data.filter(value => 
		new Date(value.created_at).getMonth() === new Date(selectedDate).getMonth()
		&& new Date(value.created_at).getFullYear() === new Date(selectedDate).getFullYear()
	)
  
	const expense = data.filter(value => 
		value.type === TYPE.expense 
	)
  
	const income = data.filter(value => 
		value.type === TYPE.income 
	)

		
	const totalByCategoryWithValue = _data.length > 0 ? categories
		.map(category => {
    
			const expenseTotal = expense
				.filter(value => value.category_key === category.key)
				.map(value => value.amount)
				.reduce((prev, next) => prev + next, 0)


			const incomeTotal = income
				.filter(value => value.category_key === category.key)
				.map(value => value.amount)
				.reduce((prev, next) => prev + next, 0)

			const totalAll = data
				.map(value => value.amount)
				.reduce((prev, next) => prev + next, 0)

			const sum = incomeTotal + expenseTotal
		
			const percent = (sum / totalAll) * 100

			return ({
				name: category.name,
				total: sum,
				totalType: incomeTotal - expenseTotal,
				key: category.key,
				color: category.color,
				percent: percent.toFixed(2)
			})
		})
		.filter(value => value.total > 0)
		: []

	const handleChangeDate = (action: 'prev' | 'next') => {
		if (action === 'next') return setSelectedDate(prevState => addMonths(prevState, 1))
		setSelectedDate(prevState => subMonths(prevState, 1))
	}

	useFocusEffect(
		useCallback(() =>  {
			setSelectedDate(new Date())
			getData()
		}, [])
	)


	return (
		<Styles.Container>
			<Header title="Resumo" />
			<Styles.Content>
				<MonthSelect value={selectedDate} onChange={handleChangeDate} />
				<Styles.ChartContainer>
					<VictoryPie
						colorScale={totalByCategoryWithValue.map(value => value.color) as string[]}
						style={{
							labels: {
								fontSize: RFValue(18),
								fontWeight: 'bold',
								fill: colors.background
							}
						}}
						x="percent"
						y="total"
						labelRadius={50}
						data={totalByCategoryWithValue}
					/>
				</Styles.ChartContainer>

				<FlatList 
					data={totalByCategoryWithValue}
					keyExtractor={item => item.key}
					renderItem={({ item }) => (
						<HistoryCard 
							color={item.color as string} 
							title={item.name} 
							amount={item.totalType} 
						/>
					)}
				/>
			</Styles.Content>
		</Styles.Container>
	)
}

export const Resume = memo(BaseResume)