import React from "react";
import { render } from "@testing-library/react";
import LeftNav from "./LeftNav";

//it should show nav links
test("Renders nav link", () => {
  const { getByRole } = render(<LeftNav />);
  const homeLink = getByRole("link", { name: /home/i });
  expect(homeLink).toBeInTheDocument();
});
