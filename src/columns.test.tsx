import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Columns from "./columns";

describe("Columns", () => {
  it("Initial rendering", () => {
    const columnItems = Array.from(new Array(4).fill(Math.random()));
    render(<Columns items={columnItems} columns={columnItems.length} />);
    expect(screen.getByTestId("columns")).toBeInTheDocument();
  });
});
