import React from "react";
import { render } from "@testing-library/react";
import QuickTips from "./QuickTips";

describe("Quick Tips test", () => {
  test("renders QucikTips items correctly", () => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;

    const tip = {
      id: 1,
      title: "Practice your answers to common interview questions",
      description: "There are some questions...",
      image: "mock-image-url",
    };

    render(<QuickTips tip={tip} />);
  });
});
