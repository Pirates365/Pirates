import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"; // Add custom CSS styling

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login validation logic here
    navigate("/dashboard"); // Redirect to the landing page
  };

  return (
    <div className="login-container">
      <div className="left-panel">
        <h2>AssetGuard is a state-of-the-art digital platform designed to empower creators, distributors, and consumers to manage digital assets securely and efficiently. 
         </h2>
        <h1>
          <strong> With AssetGuard, you can assign roles, manage permissions, and ensure that your digital files are protected and distributed correctly.</strong> 
        </h1>
        <div className="logo">S</div>
        <p></p>
      </div>
      <div className="right-panel">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Sign-in</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
          <p>
            Don't have an account? <a href="/signup">Signup Here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;