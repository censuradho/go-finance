import { useFocusEffect } from '@react-navigation/native'
import { useCallback, useState } from 'react'

import { getData } from 'src/services/asyncStorage'

import { useBooleanToggle } from './useBooleanToggle'

interface Options {
	isGetDataOnMount?: boolean
}

const baseOptions: Options = {
	isGetDataOnMount: true
}
export function useFetch <T>(entity: string, options: Options = baseOptions) {
	const [data, setData] = useState<T[]>([])
	const [error, setError] = useState<Error | null>(null)

	const [isLoading, toggleIsLoading] = useBooleanToggle(false)

	const handleGetData = async () => {
		try {
			toggleIsLoading()
			const response = await getData(entity) as T[]

			setData(response)
		} catch(err) {
			setError(err as Error)
		} finally {
			toggleIsLoading()
		}
	}

	useFocusEffect(
		useCallback(() => {
			options?.isGetDataOnMount && handleGetData()
		}, [options?.isGetDataOnMount])
	)

	return {
		data,
		isLoading,
		fetch,
		error
	}
}