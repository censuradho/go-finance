import React, { memo } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { Icon } from 'src/components'
import { TYPE } from 'src/constants/transaction'

import * as Styles from './styles'

interface TransactionTypeRadioProps extends Styles.ButtonProps {
	onChange?: (variant: string) => void;
}

function BaseTransactionTypeRadio ({ variant, isActive, onChange }: TransactionTypeRadioProps) {
	const isExpense =  variant === 	TYPE.expense

	return (

		<Styles.Button 
			variant={variant} 
			isActive={isActive} 
			onPress={() => onChange?.(variant)}
		>
			<Icon name={isExpense ? 'arrow-down' : 'arrow-up'} color={isExpense ? 'red' : 'green'} />
			<Styles.Label variant={variant} isActive={isActive}>{isExpense ? 'Expense' : 'Income'}</Styles.Label>
		</Styles.Button>

	)
}

export const TransactionTypeRadio = memo(BaseTransactionTypeRadio)