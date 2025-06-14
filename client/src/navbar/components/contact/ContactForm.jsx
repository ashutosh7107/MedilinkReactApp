import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks, ${name}`);
  };

  return (
    <div className="container pt-5">
      <div className="row justify-content-center section-heading">
        <div className="col-lg-9 col-xl-7 text-center">
          <h3 className="h1 mb-3">Let's Contact Us</h3>
          <div className="fs-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
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
                      name="contact-phone"
                      className="form-control"
                      placeholder="+91 888 888 6666"
                      id="contact-phone"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="contactsubject">
                      Subject *
                    </label>
                    <input
                      type="tel"
                      name="contactsubject"
                      className="form-control"
                      placeholder="Subject of your message"
                      id="contactsubject"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label" htmlFor="contact-message">
                      We can help you?
                    </label>
                    <textarea
                      className="form-control"
                      id="contact-message"
                      name="message"
                      rows="5"
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
                      Get Started
                    </button>
                    <div className="snackbars" id="form-output-global"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
