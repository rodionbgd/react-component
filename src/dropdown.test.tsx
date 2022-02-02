import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Dropdown from "./dropdown";

describe("Dropdown", () => {
  it("render component", () => {
    render(<Dropdown />);
    expect(screen.getByTestId("dropdown")).toBeInTheDocument();
  });
  it("hides and shows text on click", () => {
    render(<Dropdown />);
    const title = screen.getByText(/Menu/);
    userEvent.click(title);
    expect(screen.getByTestId("dropdown-text")).toBeInTheDocument();
    userEvent.click(title);
    expect(screen.getByTestId("dropdown")).not.toContainElement(
      screen.queryByTestId("dropdown-text")
    );
  });
});
