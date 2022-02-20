import  React, { memo } from 'react'

import { ButtonIcon } from 'src/components'

import { Flex } from 'src/theme/globalStyles'
import * as Styles from './styles'

function BaseHeader () {
	return (
		<Styles.Header>
			<Styles.WrapperHeader>
				<Styles.User>
					<Styles.Avatar source={{ uri: 'https://github.com/censuradho.png' }} />
					<Flex column>
						<Styles.Gretting>Olá,</Styles.Gretting>
						<Styles.Username>Gustavo</Styles.Username>
					</Flex>
				</Styles.User>
				<ButtonIcon name="power" color="background" size={20} />
			</Styles.WrapperHeader>
		</Styles.Header>
	)
}

export const Header = memo(BaseHeader)