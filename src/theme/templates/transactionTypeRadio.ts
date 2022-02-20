import { colors } from './colors'

export const transactionTypeRadio =  {
	expense: {
		background: 'transparent',
		text: colors.title,
		icon: colors.red,
		border: colors.foreground,
		active: {
			background: colors.light_red,
			icon: colors.red,
			text: colors.title,
			border: 'transparent',
		}
	},
	income: {
		background: 'transparent',
		text: colors.title,
		icon: colors.green,
		border: colors.foreground,
		active: {
			background: colors.light_green,
			icon: colors.green,
			text: colors.title,
			border: 'transparent',
		}
	}
}