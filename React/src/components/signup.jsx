import { useState } from "react";
import "./signup.css";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
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

    if (formData.password !== formData.confirmPassword) {
      setStatus("Passwords do not match.");
      return;
    }

    setStatus(`Account created for ${formData.name || "new user"}`);
  }

  return (
    <section className="auth-card signup-card" id="signup">
      <div className="card-header">
        <p className="eyebrow">Create profile</p>
        <h1>Signup</h1>
        <p className="card-copy">Register a new account with a clean onboarding flow.</p>
      </div>

      <form className="auth-form signup-form" onSubmit={handleSubmit}>
        <label>
          Full name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </label>

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
            placeholder="Create a password"
            required
          />
        </label>

        <label>
          Confirm password
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Repeat your password"
            required
          />
        </label>

        <button type="submit">Create account</button>
      </form>

      {status && <p className="status-text">{status}</p>}
    </section>
  );
}

export default Signup;