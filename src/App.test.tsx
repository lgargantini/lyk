import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

//it should render properly
test("Renders Learn React Link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/TEST PAGE/i);
  expect(linkElement).toBeInTheDocument();
});

//it should show header component

//it should show left nav component

//it should show product Components
