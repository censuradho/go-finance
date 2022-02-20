import React, { memo, useState } from 'react'
import { TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'

import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import * as Styles from './styles'

import { Header } from './components'
import { Button, Select, TransactionTypeRadio } from 'src/components'
import { HFTextInput } from 'src/components/HookForm/HFTextField'

import { Flex } from 'src/theme/globalStyles'
import { FormData } from './types'
import { TYPE } from 'src/constants/transaction'
import { Category } from 'src/data/categories'

import { createTransactionSchemaValidation } from 'src/yupSchemas/transaction'

function BaseRegister () {
	const [type, setType] = useState(TYPE.income)
	const [selected, setSelected] = useState<Category | null>(null)

	const { control, handleSubmit: onSubmit, formState: { errors } } = useForm<FormData>({
		resolver: yupResolver(createTransactionSchemaValidation)
	})

	const handleSubmit: SubmitHandler<FormData> = (form: FormData) => {
		if (!selected) Alert.alert('Selecione a categoria')

		const category = {
			amount: form.amount,
			name: form.name,
			category: selected?.name,
			type
		}

		console.log(category)
	}

	return (
		<Styles.Container>
			<Header title="Cadastro" />
			<Styles.FormContainer>
				<HFTextInput 
					name="name" 
					control={control} 
					placeholder="Nome"
					error={errors.name?.message}
					autoCapitalize="sentences" 
					autoCorrect={false}
				/>
				<HFTextInput 
					name="amount" 
					control={control} 
					error={errors.amount?.message}
					placeholder="Preço" 
					keyboardType="decimal-pad" 
				/>
				<Flex fullWidth justifyContent="space-between" marginTop={16}>
					<TransactionTypeRadio 
						variant="expense" 
						isActive={type === TYPE.expense} 
						onChange={setType} 
					/>
					<TransactionTypeRadio 
						variant="income" 
						isActive={type === TYPE.income} 
						onChange={setType} 
					/>
				</Flex>
				<Flex marginTop={16} fullWidth alignItems='center'>
					<Select 
						placeholder="Selecionar..."  
						value={selected} 
						onChange={setSelected} 
					/>
				</Flex>
				<Styles.SubmitContainer>
					<Button onPress={onSubmit(handleSubmit)}>Enviar</Button>
				</Styles.SubmitContainer>
			</Styles.FormContainer>
		</Styles.Container>
	)
}

export const Register = memo(BaseRegister)