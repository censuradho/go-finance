import React, { ComponentProps, memo } from 'react'

import { Icon } from 'src/components'


import { useBooleanToggle } from 'src/hooks'

import { Flex } from 'src/theme/globalStyles'

import { Modal } from './Modal'

import * as Styles from './styles'

type ModalProps = Pick<ComponentProps<typeof Modal>, 'value' | 'onChange'>

interface SelectProps extends ModalProps {
	placeholder?: string;
}

type IconName = Pick<ComponentProps<typeof Icon>, 'name'>['name']


function BaseSelect ({  placeholder, value, onChange }: SelectProps) {
	const [isOpen, toggleIsOpen] = useBooleanToggle(false)


	return (
		<>
			<Modal 
				visible={isOpen} 
				title="Categoria" 
				onChange={onChange} 
				value={value} 
				onClose={toggleIsOpen} 
			/>
			<Styles.Container onPress={toggleIsOpen}>
				<Flex>
					{value?.icon && <Icon name={value.icon as IconName} customColor={value.color}  />}
					<Styles.Label>{value?.name || placeholder}</Styles.Label>
				</Flex>
				<Styles.IconSvg name="chevron-down" color="foreground" />
			</Styles.Container>
		</>
	)
}

export const Select = memo(BaseSelect)