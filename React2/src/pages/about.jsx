import './about.css'

export default function About() {
	return (
		<section id="about" className="about-section">
			<div className="about-card">
				<p className="about-kicker">About this page</p>
				<h2>Login and Sign Up pages with a dark red theme</h2>
				<p className="about-copy">
					This section is made to explain the login and sign up pages. Both forms use the
					same black background, red highlights, and clean layout so the experience feels
					consistent across the screen.
				</p>
				<div className="about-stats">
					<div>
						<strong>Login page</strong>
						<span>Simple email and password form with a bold red submit button</span>
					</div>
					<div>
						<strong>Sign Up page</strong>
						<span>Name, email, and password fields styled to match the login page</span>
					</div>
					<div>
						<strong>Shared layout</strong>
						<span>Navbar, About section, and footer stay visible on the same screen</span>
					</div>
				</div>
			</div>
		</section>
	)
}
