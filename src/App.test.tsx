import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders URL Shortener heading", () => {
  render(<App />);
  expect(screen.getByText(/URL Shortener/i)).toBeInTheDocument();
});