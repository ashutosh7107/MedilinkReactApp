import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

// Mock subcomponents to avoid rendering their internals
jest.mock("../home/sections/MedicalServices", () => () => (
  <div>MedicalServices</div>
));
jest.mock("../home/sections/SecondBannerSection", () => () => (
  <div>SecondBannerSection</div>
));
jest.mock("../home/sections/ThirdBannerImageSection", () => () => (
  <div>ThirdBannerImageSection</div>
));
jest.mock("../../../footer/Footer", () => () => <div>Footer</div>);
jest.mock("./ContactBoxes", () => () => <div>ContactBoxes</div>);
jest.mock("./ContactForm", () => () => <div>ContactForm</div>);
jest.mock("../PageBanner", () => ({ title, description }) => (
  <div>
    PageBanner: {title} - {description}
  </div>
));

// Mock context
jest.mock("../../../context/ServiceDataContext", () => ({
  useServiceData: jest.fn(),
}));

import { useServiceData } from "../../../context/ServiceDataContext";

describe("Contact component", () => {
  it("displays loading state when loading is true", () => {
    useServiceData.mockReturnValue({ loading: true, serviceData: [] });
    render(<Contact />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders all sections when loading is false", () => {
    useServiceData.mockReturnValue({
      loading: false,
      serviceData: ["testService"],
    });

    render(<Contact />);

    expect(
      screen.getByText(/PageBanner: Contact Us - Contact/)
    ).toBeInTheDocument();
    expect(screen.getByText("ContactBoxes")).toBeInTheDocument();
    expect(screen.getByText("ContactForm")).toBeInTheDocument();
    expect(screen.getByText("MedicalServices")).toBeInTheDocument();
    expect(screen.getByText("SecondBannerSection")).toBeInTheDocument();
    expect(screen.getByText("ThirdBannerImageSection")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });
});
