import React, { memo } from 'react'
import { FlatList } from 'react-native-gesture-handler'

import { Icon, Button, ButtonIcon } from 'src/components'

import { categories, Category } from 'src/data/categories'
import { useTheme } from 'src/hooks'

import {  Flex, Hr } from 'src/theme/globalStyles'
import * as Styles from './styles'


export interface Option {
  key: string;
  value: string;
	icon: string
}


interface ModalProps {
	value?: Category | null
  onChange?: (option: Category) => void;
  title: string;
  onClose?: () => void;
	visible?: boolean
}

function BaseModal ({ title, visible = false, onChange, value, onClose }: ModalProps) {
	const { colors } = useTheme()

	return (
		<Styles.Modal visible={visible} animationType="slide">
			<Styles.Container>
				<Styles.Header>
					<Styles.Title>{title}</Styles.Title>
					<ButtonIcon onPress={onClose} name="x" color="title" size={25} />
				</Styles.Header>
				<FlatList 
					keyExtractor={item => item.key}
					data={categories}
					ItemSeparatorComponent={() => <Hr />}
					renderItem={({ item }) => (
						<Styles.Item 
							isActive={item.key === value?.key} 
							onPress={() => onChange?.(item)}
						>
							<Icon name={item.icon} customColor={item.key === value?.key ? colors.background : item.color} />
							<Styles.ItemName
								isActive={item.key === value?.key}
							>{item.name}</Styles.ItemName>
						</Styles.Item>
					)}
				/>
				<Styles.Footer>
					<Button variant="base" onPress={onClose}>Selecionar</Button>
				</Styles.Footer>
			</Styles.Container>

		</Styles.Modal>

	)
}

export const Modal = memo(BaseModal)