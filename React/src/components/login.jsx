import { useState } from "react";
import "./login.css";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [status, setStatus] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setStatus(`Welcome back, ${formData.email || "user"}`);
  }

  return (
    <section className="auth-card login-card" id="login">
      <div className="card-header">
        <p className="eyebrow">Secure access</p>
        <h1>Login</h1>
        <p className="card-copy">Sign in to continue to your workspace and dashboard.</p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </label>

        <button type="submit">Login</button>
      </form>

      {status && <p className="status-text">{status}</p>}
    </section>
  );
}

export default Login;