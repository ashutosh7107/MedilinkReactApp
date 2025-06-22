import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import HeroSection from "./HeroSection";
import "@testing-library/jest-dom";

// Mock banner image and apiClient
jest.mock("../../../../../src/assets/img/banner_bg.jpg", () => "banner.jpg");

jest.mock("../../../../../src/apiClient", () => ({
  post: jest.fn(() => Promise.resolve({ data: { message: "Success" } })),
}));
jest.mock("axios");

const mockAppointmentData = {
  Dentistry: ["Dr. Smith", "Dr. John"],
  Cardiology: ["Dr. Jane"],
};

describe("HeroSection Component", () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  it("renders heading and button", () => {
    render(<HeroSection appointmentData={mockAppointmentData} />);
    expect(
      screen.getByText(
        (content, element) =>
          content.includes("HEALTHIER HABITS") &&
          content.includes("BETTER LIFE")
      )
    ).toBeInTheDocument();
    const buttons = screen.getAllByRole("button", {
      name: /book appointment/i,
    });
    expect(buttons[0]).toBeInTheDocument();
  });

  it("shows alert if token is not present in localStorage", () => {
    window.alert = jest.fn(); // Mock alert
    render(<HeroSection appointmentData={mockAppointmentData} />);
    fireEvent.click(screen.getByRole("button", { name: /book appointment/i }));
    expect(window.alert).toHaveBeenCalledWith(
      "Please log in to book an appointment."
    );
  });

  it("opens modal if token is present", async () => {
    localStorage.setItem("token", "dummy_token");
    localStorage.setItem("user_uid", "abc123");

    render(<HeroSection appointmentData={mockAppointmentData} />);
    fireEvent.click(screen.getByRole("button", { name: /book appointment/i }));

    await waitFor(() =>
      expect(screen.getByText("Book an Appointment")).toBeInTheDocument()
    );
  });

  it("fills and submits the form", async () => {
    localStorage.setItem("token", "dummy_token");
    localStorage.setItem("user_uid", "abc123");

    render(<HeroSection appointmentData={mockAppointmentData} />);
    fireEvent.click(
      screen.getAllByRole("button", { name: /book appointment/i })[0]
    );

    await waitFor(() =>
      expect(screen.getByText("Book an Appointment")).toBeInTheDocument()
    );

    fireEvent.change(screen.getByLabelText("Select Service"), {
      target: { value: "Dentistry" },
    });

    fireEvent.change(screen.getByLabelText("Select Doctor"), {
      target: { value: "Dr. Smith" },
    });

    fireEvent.change(screen.getByLabelText("Select Date"), {
      target: { value: "2025-06-20" },
    });

    fireEvent.change(screen.getByLabelText("Select Time"), {
      target: { value: "10:30" },
    });

    fireEvent.click(
      screen.getAllByRole("button", { name: /book appointment/i })[1]
    );

    await waitFor(() =>
      expect(
        screen.getByText("Appointment booked successfully!")
      ).toBeInTheDocument()
    );
  });

  it("shows error if fields are incomplete", async () => {
    localStorage.setItem("token", "dummy_token");
    render(<HeroSection appointmentData={mockAppointmentData} />);
    fireEvent.click(
      screen.getAllByRole("button", { name: /book appointment/i })[0]
    );

    await waitFor(() =>
      expect(screen.getByText("Book an Appointment")).toBeInTheDocument()
    );

    fireEvent.click(
      screen.getAllByRole("button", { name: /book appointment/i })[1]
    );
  });
});
