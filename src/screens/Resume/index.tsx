import React, { memo } from 'react'
import { FlatList } from 'react-native'
import { VictoryPie } from 'victory-native'

import * as Styles from './styles'

import { Header, HistoryCard  } from './components'

import { useFetch, useTheme } from 'src/hooks'

import { asyncStorageKeyTransaction } from 'src/services/transactions'

import { GetTransaction } from 'src/types/transactions'
import { TYPE } from 'src/constants/transaction'

import { categories } from 'src/data/categories'
import { RFValue } from 'react-native-responsive-fontsize'

function BaseResume () {
	const { colors } = useTheme()

	const { data } = useFetch<GetTransaction>(asyncStorageKeyTransaction)

	const expense = data.filter(value => value.type === TYPE.expense)
	const income = data.filter(value => value.type === TYPE.income)
  
	const totalByCategoryWithValue = categories
		.map(category => {
    
			const totalAll = data
				.map(value => value.amount)
				.reduce((prev, next) => prev + next, 0)

			const categoryAmounts = data
				.filter(value => value.category_key === category.key)
				.map(value => value.amount)

			const sum = categoryAmounts.reduce((prev, next) => prev + next, 0)
      
			const percent = (sum / totalAll) * 100

			return ({
				name: category.name,
				total: sum,
				key: category.key,
				color: category.color,
				percent: percent.toFixed(2)
			})
		})
		.filter(value => value.total > 0)


	return (
		<Styles.Container>
			<Header title="Resumo" />
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
						amount={item.total} 
					/>
				)}
			/>
		</Styles.Container>
	)
}

export const Resume = memo(BaseResume)