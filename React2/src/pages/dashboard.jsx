import './dashboard.css'

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

export default function Dashboard() {
	return (
		<section className="dashboard-page">
			<div className="dashboard-header">
				<p className="dashboard-kicker">Dashboard</p>
				<h2>Welcome back, Shivam</h2>
				<p className="dashboard-copy">
					This dashboard gives a quick snapshot of account activity, login status, and
					recent events in one clean black and red layout.
				</p>
			</div>

			<div className="dashboard-stats">
				{stats.map((stat) => (
					<article key={stat.label} className="dashboard-stat-card">
						<span>{stat.label}</span>
						<strong>{stat.value}</strong>
					</article>
				))}
			</div>

			<div className="dashboard-grid">
				<section className="dashboard-panel">
					<h3>Recent Activity</h3>
					<ul className="dashboard-activity-list">
						{activityItems.map((item) => (
							<li key={item.title} className="dashboard-activity-item">
								<div>
									<strong>{item.title}</strong>
									<p>{item.detail}</p>
								</div>
								<span>{item.time}</span>
							</li>
						))}
					</ul>
				</section>

				<section className="dashboard-panel dashboard-panel-accent">
					<h3>Quick Actions</h3>
					<p>
						Keep the login and signup flow easy to find, then use this dashboard to track
						what is happening in the app.
					</p>
					<div className="dashboard-actions">
						<button type="button">Review Logins</button>
						<button type="button">Check Signups</button>
					</div>
				</section>
			</div>
		</section>
	)
}
