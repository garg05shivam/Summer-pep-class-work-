import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Dashboard from './pages/dashboard'
import Login from './pages/login'
import Signup from './pages/signup'
import About from './pages/about'
import Navbar from './components/navbar'
import Footer from './components/footer'
import './App.css'

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/about" element={<About />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
