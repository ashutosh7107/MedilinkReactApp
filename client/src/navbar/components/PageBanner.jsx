import bannerImage from "./../../assets/img/banner_bg_04.jpg";
import { Link } from "react-router-dom";

const PageBanner = ({ title, description }) => {
  return (
    <section
      className="section bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${bannerImage})`,
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <div className="container">
        <div className="row justify-content-center pt-lg-5">
          <div className="col-lg-6 text-center">
            <h1 className="text-white display-3">{title}</h1>
            <ol
              className="breadcrumb m-0 text-white text-opacity-75 justify-content-center"
              style={{
                "--bs-breadcrumb-divider-color": "rgba(255,255,255,0.5)",
              }}
            >
              <li className="breadcrumb-item">
                <Link className="text-white" to="/">
                  Home
                </Link>
              </li>
              <li
                className="breadcrumb-item text-reset active"
                aria-current="page"
              >
                {description}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
