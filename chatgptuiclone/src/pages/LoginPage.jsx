import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css"

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    localStorage.setItem("user", JSON.stringify({ email }));
    navigate("/chat");
  };

  return (
    <div className="login-container">
      <img src="https://previews.123rf.com/images/giamportone/giamportone2103/giamportone210300889/166486342-login-icon-vector-user-symbol-simple-linear-pictogram-user-interface-account-log-in.jpg" alt="Logo" className="logo" />
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="error-text">{error}</p>}
      <button onClick={handleLogin}>Log in</button>
      <p className="signup-link">New here? <a href="#">Sign up</a></p>
    </div>
  );
};

export default LoginPage;
