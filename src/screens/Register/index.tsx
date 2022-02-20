import React, { memo, useState } from 'react'
import { Alert } from 'react-native'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import uuid from 'react-native-uuid'


import { Header } from './components'
import { Button, Select, TransactionTypeRadio } from 'src/components'
import { HFTextInput } from 'src/components/HookForm/HFTextField'

import { Flex } from 'src/theme/globalStyles'
import * as Styles from './styles'

import { FormData } from './types'

import { TYPE } from 'src/constants/transaction'

import { Category } from 'src/data/categories'

import { createTransactionSchemaValidation } from 'src/yupSchemas/transaction'

import { createTransaction } from 'src/services/transactions'

import { CreateTransaction } from 'src/types/transactions'

import { routePaths } from 'src/constants/routes'

import { useBooleanToggle, useNavigation } from 'src/hooks'

function BaseRegister () {
	const navigation = useNavigation()

	const [type, setType] = useState(TYPE.income)
	const [selected, setSelected] = useState<Category | null>(null)

	const [isLoading, toggleIsLoading] = useBooleanToggle(false)

	const { control, handleSubmit: onSubmit, formState: { errors }, reset } = useForm<FormData>({
		resolver: yupResolver(createTransactionSchemaValidation)
	})

	const handleSubmit: SubmitHandler<FormData> = async (form: FormData) => {
		try {
			toggleIsLoading()

			if (!selected) return Alert.alert('Selecione a categoria')

			const category: CreateTransaction = {
				id: String(uuid.v4()),
				amount: parseFloat(form.amount),
				name: form.name,
				category_key: selected?.key as string,
				type,
				created_at: new Date().toISOString(),
				icon: selected?.icon as string
			}
	
			await createTransaction(category)
	
			setType(TYPE.income)
			setSelected(null)
			reset()
	
			navigation.navigate(routePaths.dashboard)
		} catch (err) {
			Alert.alert('Não foi possível salvar esta transação')
		} finally {
			toggleIsLoading()
		}
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
					<Button 
						isLoading={isLoading}  
						onPress={onSubmit(handleSubmit)}
					>Enviar</Button>
				</Styles.SubmitContainer>
			</Styles.FormContainer>
		</Styles.Container>
	)
}

export const Register = memo(BaseRegister)