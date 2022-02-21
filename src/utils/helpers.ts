import { format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

export function toCurrency (value: number) {
	return value.toLocaleString('pt-BR', { 
		currency: 'BRL',
		style: 'currency'
	})
}

export function formatDate (date: number | Date, pattern: string) {
	return format(date, pattern, {
		locale: ptBr
	})
}