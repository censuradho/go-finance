import { useEffect, useState } from 'react'

import { getData } from 'src/services/asyncStorage'

import { useBooleanToggle } from './useBooleanToggle'

interface Options {
	isGetDataOnMount?: boolean
}
export function useFetch <T>(entity: string, options?: Options) {
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

	useEffect(() => {
		options?.isGetDataOnMount && handleGetData()
	}, [])

	return {
		data,
		isLoading,
		error
	}
}