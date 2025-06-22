import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import AppointmentModal from "./AppointmentDetails";
import apiClient from "../../../apiClient";

// Mock apiClient
jest.mock("../../../apiClient", () => ({
  get: jest.fn(),
}));

describe("AppointmentModal", () => {
  const mockOnClose = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("displays 'No appointments booked yet.' when no data is returned", async () => {
    apiClient.get.mockResolvedValue({ data: [] });

    render(<AppointmentModal onClose={mockOnClose} />);

    expect(apiClient.get).toHaveBeenCalledWith(
      "/appointment/getAppointmentDetails"
    );

    await waitFor(() => {
      expect(
        screen.getByText(/No appointments booked yet/i)
      ).toBeInTheDocument();
    });
  });

  it("renders appointment data in table when API returns data", async () => {
    const mockData = [
      {
        id: 1,
        service_name: "Dental Checkup",
        service_selected: "Dr. Smith",
        appointment_date: "2025-06-20",
        appointment_time: "10:00 AM",
      },
    ];
    apiClient.get.mockResolvedValue({ data: mockData });

    render(<AppointmentModal onClose={mockOnClose} />);

    expect(apiClient.get).toHaveBeenCalled();

    await waitFor(() => {
      expect(screen.getByText("Dental Checkup")).toBeInTheDocument();
      expect(screen.getByText("Dr. Smith")).toBeInTheDocument();
      expect(screen.getByText("2025-06-20")).toBeInTheDocument();
      expect(screen.getByText("10:00 AM")).toBeInTheDocument();
    });
  });

  it("calls onClose when close button is clicked", async () => {
    apiClient.get.mockResolvedValue({ data: [] });

    render(<AppointmentModal onClose={mockOnClose} />);

    const closeButton = await screen.findByRole("button", { name: /close/i });

    fireEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalled();
  });
});
