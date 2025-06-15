import { useState } from "react";
import axios from "axios";
import "./SignUp.css"; // Optional: for custom styling

const Signup = ({ onClose, setIsRegistered, setShowLoginModal }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        {
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          password: form.password,
        }
      );
      setMessage("Registration successful!");

      setTimeout(() => {
        setIsRegistered(true);
        onClose();
      }, 2000);
    } catch (err) {
      setMessage(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <h3>Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <input
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            required
          />
          <input
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            required
          />
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
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn btn-success">
            Sign Up
          </button>
        </form>
        {message && <p style={{ color: "red" }}>{message}</p>}
        <p>
          Already registered?{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => {
              onClose(); // Close SignUp modal
              setShowLoginModal(); // Open Login modal
            }}
          >
            Login
          </span>
        </p>
        <button className="btn btn-secondary mt-2" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Signup;
