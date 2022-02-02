import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import React from "react";
import Paragraph from "./paragraph";

describe("Paragraph", () => {
  it("render component", () => {
    render(<Paragraph fontStyle="normal" fontWeight="normal" />);
    expect(screen.getByTestId("paragraph")).toBeInTheDocument();
  });
  it("contains correct text", () => {
    render(<Paragraph fontStyle="normal" fontWeight="normal" />);
    expect(screen.getByTestId("paragraph")).toHaveTextContent("Lorem");
  });
  it("render width correct style", () => {
    render(<Paragraph fontStyle="italic" fontWeight="normal" />);
    expect(screen.getByTestId("paragraph")).toHaveStyle("font-style: italic");
  });
});
