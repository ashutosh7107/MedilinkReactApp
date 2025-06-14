import bannerImage from "../../../../../src/assets/img/banner_bg.jpg";

const HeroSection = () => {
  return (
    <div
      className="hero-banner text-white d-flex align-items-center"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "80vh",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="fw-bold text-black">
              HEALTHIER HABITS,
              <br />
              BETTER LIFE
            </h1>
            <p className="mt-3 text-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a className="btn btn-primary mt-3" href="#">
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
