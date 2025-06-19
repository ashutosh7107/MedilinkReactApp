import { Link } from "react-router-dom";
import "./Navbar.css";
import React, { useState } from "react";
import SignupModal from "../signup/SignUp";
import LoginModal from "../login/LoginModal";
import AppointmentModal from "../navbar/components/appointment/AppointmentDetails";

const Navbar = ({ isLoggedIn, setIsLoggedIn, setLoggedInUser }) => {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white border-bottom"
        style={{ paddingTop: "20px", paddingBottom: "20px" }}
      >
        <div className="container d-flex justify-content-around align-items-center">
          <a className="navbar-brand" href="#">
            <img
              src="https://pxdraft.com/wrap/medilink/assets/img/logo.svg"
              alt="Medilink Logo"
              style={{ height: "40px" }}
            />
          </a>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
            style={{ display: "flex", alignItems: "center", gap: "3rem" }}
          >
            <Link className="nav-link" to="/">
              Home
            </Link>

            <Link className="nav-link" to="/about">
              About
            </Link>

            <Link className="nav-link" to="/services">
              Services
            </Link>

            {/* Blog dropdown */}
            <div className="nav-item dropdown hover-dropdown">
              <span
                className="nav-link dropdown-toggle"
                id="blogDropdown"
                role="button"
              >
                Blog
              </span>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/blog/post">
                    Blog Post
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/blog/details">
                    Blog Details
                  </Link>
                </li>
              </ul>
            </div>

            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </div>

          <button
            className="btn btn-success ms-3"
            onClick={() => {
              if (!isLoggedIn) {
                alert("Please log in to view your appointments.");
              } else {
                setShowAppointmentModal(true); // only open if logged in
              }
            }}
          >
            Appointment
          </button>

          <button
            className="btn btn-success ms-3"
            onClick={() => {
              if (isLoggedIn) {
                localStorage.removeItem("token");
                localStorage.removeItem("user_uid");
                setIsLoggedIn(false); // Logout
                setLoggedInUser(null); // Clear logged-in user
              } else if (isRegistered) {
                setShowLoginModal(true); // Show Login modal
              } else {
                setShowSignupModal(true); // Show Signup modal
              }
            }}
          >
            {isLoggedIn ? "Logout" : isRegistered ? "Login" : "Sign Up"}
          </button>

          <button
            className="navbar-toggler ms-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      {/* Sign Up Modal */}
      {showSignupModal && (
        <SignupModal
          onClose={() => setShowSignupModal(false)}
          setIsRegistered={setIsRegistered}
          setShowLoginModal={() => {
            setShowSignupModal(false); // Close SignUp
            setShowLoginModal(true); // Open Login
          }}
        />
      )}
      {showLoginModal && (
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          onLoginSuccess={(name) => {
            setIsLoggedIn(true);
            setLoggedInUser(name);
            setShowLoginModal(false);
          }}
        />
      )}
      {showAppointmentModal && isLoggedIn && (
        <AppointmentModal onClose={() => setShowAppointmentModal(false)} />
      )}
    </>
  );
};

export default Navbar;
