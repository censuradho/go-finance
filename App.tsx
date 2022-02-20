import { StatusBar } from 'expo-status-bar'
import React from 'react'

import { FontProvider } from 'src/providers'

import ThemeProvider from 'src/theme'

import { Routes } from 'src/routes'

export default function App() {
	return (
		<FontProvider>
			<ThemeProvider>
				<StatusBar style="auto" />
				<Routes />
			</ThemeProvider>
		</FontProvider>
	)
}
