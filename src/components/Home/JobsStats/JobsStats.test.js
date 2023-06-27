import React from "react";
import { render } from "@testing-library/react";
import JobsStats from "./JobsStats";

describe("JosStats", () => {
  test("renders JobsStats items correctly", () => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;

    render(<JobsStats />);
  });
});
