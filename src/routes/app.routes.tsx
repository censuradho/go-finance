import React, { memo } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'
const { Navigator, Screen } = createBottomTabNavigator()

import { Dashboard, Register, Resume } from 'src/screens'
import { routePaths } from 'src/constants/routes'
import { useTheme } from 'src/hooks'
import { Icon } from 'src/components'


function BaseAppRoutes () {
	const { colors } = useTheme()

	return (
		<Navigator screenOptions={{
			headerShown: false,
			tabBarActiveTintColor: colors.primary,
			tabBarInactiveTintColor: colors.text,
			tabBarLabelPosition: 'beside-icon',
			tabBarStyle: {
				height: 88,
				backgroundColor: colors.background,

			}
		}}>
			<Screen 
				name={routePaths.dashboard} 
				component={Dashboard}  
				options={{
					tabBarIcon: (({ color, size }) => <MaterialIcons name="format-list-bulleted" color={color} size={size}  />)
				}}
			/>
			<Screen 
				name={routePaths.register} 
				component={Register} 
				options={{
					tabBarIcon: (({ color, size }) => <MaterialIcons name="attach-money" color={color} size={size}  />)
				}}
			/>
			<Screen 
				name={routePaths.resume} 
				component={Resume} 
				options={{
					tabBarIcon: (({ color, size }) => <MaterialIcons name="pie-chart" color={color} size={size}  />)
				}}
			/>

		</Navigator>
	)
}

export const AppRoutes = memo(BaseAppRoutes)