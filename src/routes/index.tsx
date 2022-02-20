import React, { memo } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { AppRoutes } from './app.routes'



function BaseRoutes () {
	return (
		<NavigationContainer>
			<AppRoutes />
		</NavigationContainer>
	)
}

export const Routes = memo(BaseRoutes)
