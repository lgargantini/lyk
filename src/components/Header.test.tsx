import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

test("Renders Main Title", () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/TEST PAGE/i);
  expect(linkElement).toBeInTheDocument();
});

//it should show the icon
test("Renders main logo", () => {
  const { getByRole } = render(<Header />);
  const logo = getByRole("img", { name: /logo/i });
  expect(logo).toBeInTheDocument();
});
