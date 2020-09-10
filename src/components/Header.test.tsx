import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

test("Renders Main Title", () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/TEST PAGE/i);
  expect(linkElement).toBeInTheDocument();
});

//it should show the icon
