import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactForm from "./ContactForm";
import apiClient from "../../../apiClient";

// Mock apiClient
jest.mock("../../../apiClient", () => ({
  post: jest.fn(),
}));

describe("ContactForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the form fields correctly", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/Full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/How can we help you/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /submit query/i })
    ).toBeInTheDocument();
  });

  it("shows error when required fields are empty", async () => {
    render(<ContactForm />);
    fireEvent.click(screen.getByRole("button", { name: /submit query/i }));

    expect(
      await screen.findByText(/Please fill all mandatory fields/i)
    ).toBeInTheDocument();
  });

  it("submits the form successfully and shows popup", async () => {
    apiClient.post.mockResolvedValue({});

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/Full name/i), {
      target: { value: "Ashutosh", name: "name" },
    });
    fireEvent.change(screen.getByLabelText(/Your email/i), {
      target: { value: "ashu@example.com", name: "email" },
    });
    fireEvent.change(screen.getByLabelText(/Phone/i), {
      target: { value: "9999999999", name: "phone" },
    });
    fireEvent.change(screen.getByLabelText(/Subject/i), {
      target: { value: "Test Subject", name: "subject" },
    });
    fireEvent.change(screen.getByLabelText(/How can we help you/i), {
      target: { value: "Test Message", name: "message" },
    });

    fireEvent.click(screen.getByRole("button", { name: /submit query/i }));

    expect(apiClient.post).toHaveBeenCalledWith("contact/submit", {
      name: "Ashutosh",
      email: "ashu@example.com",
      phone: "9999999999",
      subject: "Test Subject",
      message: "Test Message",
    });

    // Wait for popup
    await waitFor(() =>
      expect(
        screen.getByText(
          /Query submitted successfully! Our team will connect with you shortly/i
        )
      ).toBeInTheDocument()
    );
  });

  it("shows error message if API fails", async () => {
    apiClient.post.mockRejectedValue({
      response: { data: { error: "Server error occurred" } },
    });

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/Full name/i), {
      target: { value: "Ashu", name: "name" },
    });
    fireEvent.change(screen.getByLabelText(/Your email/i), {
      target: { value: "ashu@example.com", name: "email" },
    });
    fireEvent.change(screen.getByLabelText(/Subject/i), {
      target: { value: "Subject", name: "subject" },
    });
    fireEvent.change(screen.getByLabelText(/How can we help you/i), {
      target: { value: "Some message", name: "message" },
    });

    fireEvent.click(screen.getByRole("button", { name: /submit query/i }));

    expect(apiClient.post).toHaveBeenCalled();

    expect(
      await screen.findByText(/Server error occurred/i)
    ).toBeInTheDocument();
  });
});
