const Footer = () => {
  return (
    <footer className="bg-black text-white text-opacity-85">
      <div className="py-5 py-md-7 py-lg-8">
        <div className="container">
          <div className="row">
            {/* Logo & Social */}
            <div className="col-lg-3 my-4">
              <div className="mb-4">
                <img
                  src="https://pxdraft.com/wrap/medilink/assets/img/logo.svg"
                  alt="Logo"
                  style={{ height: "40px" }}
                />
              </div>
              <p className="w-80 mb-4">
                Lorem Ipsum is simply dummy text of the printing
              </p>
              <div className="nav">
                <a
                  className="icon-xs btn p-1 btn-primary rounded-circle me-2"
                  href="#"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="icon-xs btn p-1 btn-primary rounded-circle me-2"
                  href="#"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="icon-xs btn p-1 btn-primary rounded-circle me-2"
                  href="#"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  className="icon-xs btn p-1 btn-primary rounded-circle me-2"
                  href="#"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            {/* Important Links */}
            <div className="col-sm-6 col-lg-3 my-4">
              <h5 className="footer-title-02 text-white">Important Links</h5>
              <ul className="list-unstyled footer-link-01">
                <li>
                  <a className="text-white text-opacity-85" href="#">
                    Book Online
                  </a>
                </li>
                <li>
                  <a className="text-white text-opacity-85" href="#">
                    Purchase a Gift Certificate
                  </a>
                </li>
                <li>
                  <a className="text-white text-opacity-85" href="#">
                    Spa Promotions
                  </a>
                </li>
                <li>
                  <a className="text-white text-opacity-85" href="#">
                    Exclusive Offers & Events
                  </a>
                </li>
                <li>
                  <a className="text-white text-opacity-85" href="#">
                    Blog and News
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-sm-6 col-lg-3 my-4">
              <h5 className="footer-title-02 text-white">Contact Us</h5>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center pb-4">
                  <span className="col text-white text-opacity-85">
                    301 The Greenhouse,
                    <br />
                    Custard Factory, LD, E2 8DY
                  </span>
                </li>
                <li className="d-flex align-items-center pb-4">
                  <span className="col text-white text-opacity-85">
                    info@domain.com
                  </span>
                </li>
                <li className="d-flex align-items-center pb-4">
                  <span className="col text-white text-opacity-85">
                    1-800-222-000
                  </span>
                </li>
              </ul>
            </div>

            {/* Appointment Hours */}
            <div className="col-sm-6 col-lg-3 my-4">
              <h5 className="footer-title-02 text-white">Appointment Hours</h5>
              <ul className="list-unstyled footer-link-01">
                <li className="d-flex">
                  <span>Monday to Friday</span>{" "}
                  <span className="ms-auto">09:00 - 20:00 hrs</span>
                </li>
                <li className="d-flex">
                  <span>Saturday</span>{" "}
                  <span className="ms-auto">09:00 - 18:00 hrs</span>
                </li>
                <li className="d-flex">
                  <span>Sunday</span>{" "}
                  <span className="ms-auto">09:00 - 14:00 hrs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <hr className="opacity-10 m-0" />
      <div className="container py-3">
        <div className="row align-items-center">
          <div className="col-md-6 py-2">
            <ul className="nav justify-content-center justify-content-md-start small list-unstyled footer-link-01 m-0">
              <li className="p-0 mx-3 ms-md-0 me-md-3">
                <a href="#" className="text-white">
                  Privacy & Policy
                </a>
              </li>
              <li className="p-0 mx-3 ms-md-0 me-md-3">
                <a href="#" className="text-white">
                  FAQ's
                </a>
              </li>
              <li className="p-0 mx-3 ms-md-0 me-md-3">
                <a href="#" className="text-white">
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 py-2 text-center text-md-end">
            <p className="text-white-85 small m-0">
              © 2025 Trinity is Proudly Powered by{" "}
              <a
                href="http://pxdraft.com/"
                target="_blank"
                rel="noreferrer"
                className="text-reset"
              >
                pxdraft
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
