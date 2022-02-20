import { ComponentProps } from 'react'
import { Icon } from 'src/components'

type IconProps = Pick<ComponentProps<typeof Icon>, 'name' | 'customColor'>

export interface Category {
    icon: IconProps['name'];
    key: string;
    name: string
    color: IconProps['customColor']
}


export const categories: Category[] = [
	{ key: 'purchases', name: 'Compras', icon: 'shopping-bag', color: '#5636D3' },
	{ key: 'food', name: 'Alimentação', icon: 'coffee', color: '#FF872C' },
	{ key: 'salary', name: 'Salário', icon: 'dollar-sign', color: '#12A454' },
	{ key: 'car', name: 'Carro', icon: 'crosshair', color: '#E83F5B' },
	{ key: 'leisure', name: 'Lazer', icon: 'heart', color: '#26195C' },
	{ key: 'studies', name: 'Estudos', icon: 'book', color: '#9C001A' },
] 