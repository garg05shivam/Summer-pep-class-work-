import './home.css'

const stats = [
	{ label: 'Active Sessions', value: '128' },
	{ label: 'New Signups', value: '24' },
	{ label: 'Login Success', value: '98%' },
]

const activityItems = [
	{ title: 'Profile updated', detail: 'Shivam Garg changed account settings', time: '2 min ago' },
	{ title: 'New user joined', detail: 'A fresh signup was completed successfully', time: '14 min ago' },
	{ title: 'Security check', detail: 'Recent login attempts were verified', time: '1 hour ago' },
]

export default function Home() {
	return (
		<section className="home-page">
			<div className="home-header">
				<p className="home-kicker">Dashboard</p>
				<h2>Welcome back, Shivam</h2>
				<p className="home-copy">
					This dashboard gives a quick snapshot of account activity, login status, and
					recent events in one clean black and red layout.
				</p>
			</div>

			<div className="home-stats">
				{stats.map((stat) => (
					<article key={stat.label} className="home-stat-card">
						<span>{stat.label}</span>
						<strong>{stat.value}</strong>
					</article>
				))}
			</div>

			<div className="home-grid">
				<section className="home-panel">
					<h3>Recent Activity</h3>
					<ul className="home-activity-list">
						{activityItems.map((item) => (
							<li key={item.title} className="home-activity-item">
								<div>
									<strong>{item.title}</strong>
									<p>{item.detail}</p>
								</div>
								<span>{item.time}</span>
							</li>
						))}
					</ul>
				</section>

				<section className="home-panel home-panel-accent">
					<h3>Quick Actions</h3>
					<p>
						Keep the login and signup flow easy to find, then use this dashboard to track
						what is happening in the app.
					</p>
					<div className="home-actions">
						<button type="button">Review Logins</button>
						<button type="button">Check Signups</button>
					</div>
				</section>
			</div>
		</section>
	)
}
