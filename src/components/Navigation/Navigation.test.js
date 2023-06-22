import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navigation from "./Navigation";
import "jest-styled-components";
import { BrowserRouter as Router } from "react-router-dom";

describe("Navigation", () => {
  test("renders navigation items correctly", () => {

    render(
      <Router>
        <Navigation />
      </Router>
    );

    const homeNavItem = screen.getByText("Home");
    const jobsNavItem = screen.getByText("Jobs");
    const contactNavItem = screen.getByText("Contact");

    expect(homeNavItem).toBeInTheDocument();
    expect(jobsNavItem).toBeInTheDocument();
    expect(contactNavItem).toBeInTheDocument();
  });
});