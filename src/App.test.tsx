import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

//it should show header component
test("Renders Header Component", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/TEST PAGE/i);
  expect(linkElement).toBeInTheDocument();
});

//it should show left nav component
test("Renders Left Nav Component", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
//it should show product Components
test("Renders Products Component", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Sporting Goods/i);
  expect(linkElement).toBeInTheDocument();
});
