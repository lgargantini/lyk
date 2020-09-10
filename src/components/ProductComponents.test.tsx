import React from "react";
import { render } from "@testing-library/react";
import ProductComponents, {
  ProductCategoryRow,
  ProductRow,
  ProductTable,
  SearchBar,
} from "./ProductComponents";
import FilterableProductTable from "./ProductComponents";

//it should show ProductCategoryRow
test("Renders ProductCategoryRow", () => {
  const table = document.createElement("tbody");
  const props = {
    category: "test",
    key: "test",
  };
  const { getByText } = render(<ProductCategoryRow {...props} />, {
    container: document.body.appendChild(table),
  });
  const productCategory = getByText("test");
  expect(productCategory).toBeInTheDocument();
});
//it should show ProductRow
test("Renders ProductRow", () => {
  const table = document.createElement("tbody");
  const props = {
    product: {
      category: "category test",
      price: "10",
      stocked: true,
      name: "test name product",
    },
  };
  const { getByText } = render(<ProductRow {...props} />, {
    container: document.body.appendChild(table),
  });
  const productCategory = getByText(props.product.name);
  expect(productCategory).toBeInTheDocument();
});
//it should show ProductTable
test("Renders ProductTable", () => {
  const props = {
    products: [
      {
        category: "category test",
        price: "10",
        stocked: true,
        name: "test name product",
      },
    ],
  };
  const { getByText } = render(<ProductTable {...props} />);
  const productCategory = getByText(props.products[0].name);
  expect(productCategory).toBeInTheDocument();
});
//it should show Search Bar
test("Renders SearchBar", () => {
  const props = {
    onFilterTextChange: jest.fn(),
    onInStockChange: jest.fn(),
    filterText: "",
    inStockOnly: false,
  };
  const { getByRole } = render(<SearchBar {...props} />);
  const input = getByRole("textbox");
  expect(input).toBeInTheDocument();
});
//it should show FilterableProductTable
test("Renders FilterableProductTable", () => {
  const props = {
    products: [
      {
        category: "category test",
        price: "10",
        stocked: true,
        name: "test name product",
      },
    ],
  };
  const { getByText } = render(<FilterableProductTable {...props} />);
  const productOnFilterableProductTable = getByText(props.products[0].name);
  expect(productOnFilterableProductTable).toBeInTheDocument();
});
