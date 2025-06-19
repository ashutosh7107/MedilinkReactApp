import { useState } from "react";
import axios from "axios";

const LoginModal = ({ onClose, onLoginSuccess }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        form
      );
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        setMessage("Login successful!");
        setTimeout(() => {
          onLoginSuccess(response.data.name);
        }, 2000);
      }
    } catch (err) {
      setMessage("Invalid credentials");
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <h3>Login</h3>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn btn-success">
            Login
          </button>
        </form>
        {message && (
          <p style={{ color: message.includes("success") ? "green" : "red" }}>
            {message}
          </p>
        )}
        <button className="btn btn-secondary mt-2" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
