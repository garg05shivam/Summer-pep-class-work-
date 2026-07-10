import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
	return (
		<nav className="site-nav">
			<div className="site-nav-inner">
				<h1 className="site-title">My App</h1>
				<div className="site-links">
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/login">Login</Link>
					<Link to="/signup">Sign Up</Link>
				</div>
			</div>
		</nav>
	)
}
