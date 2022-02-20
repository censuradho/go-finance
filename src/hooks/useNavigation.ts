import {
	useNavigation as useNav,
	NavigationProp,
	ParamListBase,
} from '@react-navigation/native'

export function useNavigation () {
	return useNav<NavigationProp<ParamListBase>>()
}