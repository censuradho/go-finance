import AsyncStorage from '@react-native-async-storage/async-storage'
import { APP_ASYNC_STORAGE_KEY } from 'src/constants/app'

export async function getData (endpoint: string) {
	const data = await AsyncStorage.getItem(`${APP_ASYNC_STORAGE_KEY}:${endpoint}`)

	if (!data) return []

	return JSON.parse(data)
}