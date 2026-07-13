import React from 'react'
import { Link } from 'react-router-dom'
import useTheme from '../context/useTheme'
import './navbar.css'

export default function Navbar() {
	const { theme, toggleTheme } = useTheme()
	const isDark = theme === 'dark'

	return (
		<nav className="site-nav">
			<div className="site-nav-inner">
				<h1 className="site-title">My App</h1>
				<div className="site-links">
					<Link to="/">Home</Link>
					<Link to="/dashboard">Dashboard</Link>
					<Link to="/about">About</Link>
					<Link to="/login">Login</Link>
					<Link to="/signup">Sign Up</Link>
					<button
						type="button"
						className="theme-toggle"
						onClick={toggleTheme}
						aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
					>
						<span className="theme-toggle-icon" aria-hidden="true" />
						{isDark ? 'Light' : 'Dark'}
					</button>
				</div>
			</div>
		</nav>
	)
}
