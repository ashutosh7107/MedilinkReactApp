import React, { useState } from "react";
import apiClient from "../../../apiClient";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [feedback, setFeedback] = useState({
    show: false,
    success: false,
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  <SuccessPopup
    show={showPopup}
    message="Query submitted successfully! Our team will connect with you shortly."
  />;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check mandatory fields
    if (!form.name || !form.email || !form.subject || !form.message) {
      setFeedback({
        show: true,
        success: false,
        message: "Please fill all mandatory fields.",
      });
      return;
    }
    try {
      await apiClient.post("contact/submit", form);
      setShowPopup(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => {
        setShowPopup(false);
      }, 2500); // Popup disappears after 2.5 seconds
    } catch (err) {
      setFeedback({
        show: true,
        success: false,
        message: err.response?.data?.error || "Submission failed.",
      });
    }
  };
  function SuccessPopup({ show, onClose, message }) {
    if (!show) return null;
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: 12,
            padding: "2rem 3rem",
            textAlign: "center",
            boxShadow: "0 2px 16px rgba(0,0,0,0.2)",
          }}
        >
          <div style={{ fontSize: 56, color: "green", marginBottom: 16 }}>
            ✔️
          </div>
          <div style={{ fontSize: 20, color: "green", marginBottom: 8 }}>
            {message}
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <SuccessPopup
        show={showPopup}
        message="Query submitted successfully! Our team will connect with you shortly."
      />
      <div className="container pt-5">
        <div className="row justify-content-center section-heading">
          <div className="col-lg-9 col-xl-7 text-center">
            <h3 className="h1 mb-3">Let's Contact Us</h3>
            <div className="fs-lg">
              We're here to help! Please fill out the form below with your query
              or feedback, and our team will connect with you shortly.
            </div>
          </div>
        </div>

        <div className="row justify-content-center pt-5">
          <div className="col-lg-10">
            <div className="card shadow">
              <div className="card-body p-5 p-lg-7">
                <form
                  onSubmit={handleSubmit}
                  className="rd-mailform"
                  data-form-output="form-output-global"
                  data-form-type="contact"
                  method="post"
                  action="#"
                >
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="contact-name">
                        Full name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                        data-constraints="@Required"
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="contact-email">
                        Your email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="youremail@example.com"
                        data-constraints="@Required"
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="contact-phone">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        onChange={handleChange}
                        placeholder="+91 888 888 6666"
                        id="contact-phone"
                        value={form.phone}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="contactsubject">
                        Subject *
                      </label>
                      <input
                        type="tel"
                        name="subject"
                        className="form-control"
                        onChange={handleChange}
                        required
                        placeholder="Subject of your message"
                        id="contactsubject"
                        value={form.subject}
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="form-label" htmlFor="contact-message">
                        How can we help you? *
                      </label>
                      <textarea
                        className="form-control"
                        id="contact-message"
                        name="message"
                        rows="5"
                        value={form.message}
                        onChange={handleChange}
                        required
                        placeholder="Hi there, I would like to ..."
                        data-constraints="@Required"
                      />
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary"
                        type="submit"
                        name="send"
                      >
                        Submit Query
                      </button>
                      <div className="snackbars" id="form-output-global"></div>
                    </div>
                  </div>
                </form>
                {feedback.show && !showPopup && (
                  <div
                    style={{
                      color: feedback.success ? "green" : "red",
                      marginTop: 10,
                    }}
                  >
                    {feedback.success ? "✔️ " : "❌ "}
                    {feedback.message}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
