import { useCallback, useState } from 'react'

export function useBooleanToggle(state: boolean): [boolean, () => void] {
	const [isTruth, setIsTruth] = useState(state)

	const changeState = useCallback(() => {
		setIsTruth(prevState => !prevState)
	}, [])

	return [isTruth, changeState]
}
