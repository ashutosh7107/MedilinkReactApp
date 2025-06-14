import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const MedicalServices = ({ services }) => {
  return (
    <section className="section pt-0">
      <div className="container">
        <div className="row justify-content-center section-heading">
          <div className="col-lg-6 text-center">
            <h2
              className="h1"
              style={{
                marginTop: "60px",
                marginBottom: "40px",
                fontWeight: "bold",
              }}
            >
              Feel Like Home With Best
              <br />
              Medical Care
            </h2>
          </div>
        </div>
        <div className="row gy-4">
          {services.map((service, index) => (
            <div className="col-sm-6 col-lg-4" key={index}>
              <style>
                {`
                    .card.rounded-3.hover-top {
                        border: 1px solid #ccc;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                        transition: transform 0.1s ease-in-out, box-shadow 0.3s ease-in-out;
                    }

                    .card.rounded-3.hover-top:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
                    }
                `}
              </style>
              <div className="card rounded-3 hover-top">
                <div className="card-body p-5">
                  <div
                    className="icon-xl fs-1 bg-primary bg-opacity-10 text-primary rounded-3 mb-4"
                    style={{ display: "inline-block", padding: "1rem" }}
                  >
                    <FontAwesomeIcon icon={service.icon} className="fa-fw" />
                  </div>
                  <h5>{service.title}</h5>
                  <p className="mb-4">{service.description}</p>
                  <a
                    className="btn btn-outline-primary icon rounded-circle"
                    href="#"
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ fontSize: "1.5rem" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalServices;
