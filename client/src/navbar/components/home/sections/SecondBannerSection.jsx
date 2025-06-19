import bannerImage2 from "../../../../../src/assets/img/banner_bg_02.jpg";
import { FaUserNurse, FaClock } from "react-icons/fa";

const SecondBannerSection = () => {
  return (
    <div
      className="hero-banner2 text-white d-flex align-items-center"
      style={{
        backgroundImage: `url(${bannerImage2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginTop: "90px",
        marginBottom: "70px",
        minHeight: "75vh",
      }}
    >
      <div className="container py-lg-6">
        <div className="row justify-content-end">
          <div className="col-md-6 col-lg-5">
            <div className="bg-white p-5 p-lg-7">
              <div className="mb-4" style={{ color: "black" }}>
                <h2 style={{ fontWeight: "bold" }}>
                  The Heart And Science Of <br />
                  Medicate Test
                </h2>
                <p className="mb-4">
                  Experience compassionate care and advanced diagnostics at our
                  multispeciality hospital. Our expert team is dedicated to your
                  health and well-being, offering round-the-clock medical
                  services you can trust.
                </p>
                <div className="row gy-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex justify-content-center align-items-center text-primary rounded-circle"
                        style={{
                          width: "50px",
                          height: "50px",
                          border: "2px solid rgba(15, 227, 175, 1)",
                        }}
                      >
                        <FaUserNurse />
                      </div>
                      <span className="col ps-3 lh-sm">
                        Multispeciality Hospital
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex justify-content-center align-items-center text-primary rounded-circle"
                        style={{
                          width: "50px",
                          height: "50px",
                          border: "2px solid rgba(15, 227, 175, 1)",
                        }}
                      >
                        <FaClock />
                      </div>
                      <span className="col ps-3 lh-sm">
                        24 Hours Medical Service
                      </span>
                    </div>
                  </div>
                  <div className="pt-3">
                    <a className="btn btn-primary" href="#">
                      More About Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondBannerSection;
