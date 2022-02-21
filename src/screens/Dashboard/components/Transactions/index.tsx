import React, { ComponentProps, memo } from 'react'

import { FlatList } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import Card from './Card'

export type TransactionListData = ComponentProps<typeof Card> & {
	id: number | string
}

interface TransactionsProps {
	data: TransactionListData[]
}

import * as Styles from './styles'

function BaseTransactions ({ data }: TransactionsProps) {
	// console.log(data)
	return (
		<Styles.Container>
			<Styles.Title>Listagem</Styles.Title>
			<FlatList 
				data={data}
				keyExtractor={item => String(item.id)}
				renderItem={({ item }) => (
					<Card key={item.id} {...item}/>
				)}

				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					paddingBottom: RFValue(20)
				}}
			/>

		</Styles.Container>
	)
}

export const Transactions = memo(BaseTransactions)