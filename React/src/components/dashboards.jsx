import "./dashboard.css";

const metrics = [
  { label: "Active users", value: "1,284", trend: "+12%" },
  { label: "Projects", value: "36", trend: "+4" },
  { label: "Completion", value: "87%", trend: "+9%" },
  { label: "Messages", value: "19", trend: "+3" },
];

const activity = [
  "New signup completed onboarding",
  "Login from Chrome on Windows",
  "Dashboard report exported successfully",
  "Password updated by team admin",
];

function Dashboards() {
  return (
    <section className="dashboard-card" id="dashboard">
      <div className="dashboard-header">
        <div>
          <p className="eyebrow">Workspace overview</p>
          <h2>Dashboard</h2>
        </div>
        <button type="button">View reports</button>
      </div>

      <div className="metrics-grid">
        {metrics.map((item) => (
          <article className="metric-card" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
            <small>{item.trend}</small>
          </article>
        ))}
      </div>

      <div className="activity-panel">
        <h3>Recent activity</h3>
        <ul>
          {activity.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Dashboards;