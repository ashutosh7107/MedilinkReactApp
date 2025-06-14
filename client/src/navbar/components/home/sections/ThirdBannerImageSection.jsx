import bannerImage3 from "../../../../../src/assets/img/banner_bg_03.jpg";

const ThirdBannerImageSection = () => {
  return (
    <div
      className="container text-white d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${bannerImage3})`,
        backgroundSize: "cover",
        backgroundColor: "#007bff",
        marginTop: "90px",
        marginBottom: "90px",
        backgroundPosition: "center",
        minHeight: "40vh",
      }}
    >
      <div className="row justify-content-center">
        <div className="col-lg-10 text-center">
          <h2 class="text-white">
            Schedule an in-person or virtual appointment today
          </h2>
          <div className="mt-4">
            <a className="btn btn-success" href="#">
              Book an Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdBannerImageSection;
