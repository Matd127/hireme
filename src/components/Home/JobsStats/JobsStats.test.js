import React from "react";
import { render } from "@testing-library/react";
import JobsStats from "./JobsStats";

describe("JosStats", () => {
  test("renders JobsStats items correctly", () => {
    render(<JobsStats />);
  });
});
