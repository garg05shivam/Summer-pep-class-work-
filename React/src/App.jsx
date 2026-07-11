import "./App.css";
import Dashboards from "./components/dashboards";
import Login from "./components/login";
import Navbar from "./components/navbar";
import Signup from "./components/signup";

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="app-layout">
        <section className="auth-grid" aria-label="authentication forms">
          <Login />
          <Signup />
        </section>

        <section className="dashboard-section" aria-label="dashboard overview">
          <Dashboards />
        </section>
      </main>
    </div>
  );
}

export default App;
