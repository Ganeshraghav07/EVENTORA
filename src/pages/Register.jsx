import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();

    const users =
      JSON.parse(localStorage.getItem("eventoraUsers")) || [];

    if (users.some((user) => user.email === email)) {
      alert("❌ Email already registered.");
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
    };

    localStorage.setItem(
      "eventoraUsers",
      JSON.stringify([...users, newUser])
    );

    localStorage.setItem(
      "eventoraUser",
      JSON.stringify(newUser)
    );

    alert("🎉 Account created!");

    navigate("/");
    window.location.reload();
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <span className="auth-icon">✨</span>

          <h1>Create Account</h1>

          <p>Join Eventora today.</p>
        </div>

        <form onSubmit={register}>
          <label>Full Name</label>

          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Email</label>

          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Minimum 6 characters"
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="auth-btn">
            Create Account →
          </button>
        </form>

        <p className="auth-footer">
          Already registered?{" "}
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;