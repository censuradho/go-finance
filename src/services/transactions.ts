import AsyncStorage from '@react-native-async-storage/async-storage'

import { APP_ASYNC_STORAGE_KEY } from 'src/constants/app'

import { CreateTransaction, GetCategory } from 'src/types/transactions'

export const asyncStorageKeyTransaction = 'transaction'

const entity = `${APP_ASYNC_STORAGE_KEY}:${asyncStorageKeyTransaction}`

export async function createTransaction (data: CreateTransaction) {
	const dataStoraged = await AsyncStorage.getItem(entity)

	const dataStoragedParsed = dataStoraged ? JSON.parse(dataStoraged) : []

	return AsyncStorage.setItem(entity, JSON.stringify([
		...dataStoragedParsed,
		data
	]))
}

export async function geTransaction () {
	const data = await AsyncStorage.getItem(entity)

	if (!data) return null

	return JSON.parse(data) as GetCategory[]
}


export async function deleteTransaction (id: string) {
	const dataStoraged = await AsyncStorage.getItem(entity)

	const dataStoragedParsed = (dataStoraged ? JSON.parse(dataStoraged) : []) as CreateTransaction[]
  
	const filteredDataStoragedParsed = dataStoragedParsed.filter(value => value.id !== id)

	await AsyncStorage.setItem(entity, JSON.stringify(filteredDataStoragedParsed))
}