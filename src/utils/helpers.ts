export function toCurrency (value: number) {
	return value.toLocaleString('pt-BR', { 
		currency: 'BRL',
		style: 'currency'
	})
}