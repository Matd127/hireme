import React from "react";
import { render } from "@testing-library/react";
import QuickTips from "./QuickTips";

describe("Quick Tips test", () => {
  test("renders QucikTips items correctly", () => {
    
    const tip = {
      id: 1,
      title: "Practice your answers to common interview questions",
      description: "There are some questions...",
      image: "mock-image-url",
    };

    render(<QuickTips tip={tip} />);
  });
});
