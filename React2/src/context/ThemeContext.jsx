import { useEffect, useState } from 'react'
import ThemeContext from './themeContext'

export default function ThemeProvider({ children }) {
	const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

	useEffect(() => {
		document.documentElement.dataset.theme = theme
		localStorage.setItem('theme', theme)
	}, [theme])

	const toggleTheme = () => {
		setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}
