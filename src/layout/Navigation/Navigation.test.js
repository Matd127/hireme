import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
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
    const postAJobItem = screen.getByText("Post a job");

    expect(homeNavItem).toBeInTheDocument();
    expect(jobsNavItem).toBeInTheDocument();
    expect(contactNavItem).toBeInTheDocument();
    expect(postAJobItem).toBeInTheDocument();
  });

  test("renders navigation items correctly and changes URL on click", () => {
    render(
      <Router>
        <Navigation />
      </Router>
    );
  
    const homeNavItem = screen.getByText("Home");
    const jobsNavItem = screen.getByText("Jobs");
    const contactNavItem = screen.getByText("Contact");
    const postAJobItem = screen.getByText("Post a job");
  
    expect(homeNavItem).toBeInTheDocument();
    expect(jobsNavItem).toBeInTheDocument();
    expect(contactNavItem).toBeInTheDocument();
    expect(postAJobItem).toBeInTheDocument();

    fireEvent.click(homeNavItem);
    expect(window.location.pathname).toBe("/");
  
    fireEvent.click(jobsNavItem);
    expect(window.location.pathname).toBe("/jobs");

    fireEvent.click(contactNavItem);
    expect(window.location.pathname).toBe("/contact");

    fireEvent.click(postAJobItem);
    expect(window.location.pathname).toBe("/post");
  });
});