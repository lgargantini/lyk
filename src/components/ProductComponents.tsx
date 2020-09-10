import React from "react";
import "./ProductComponents.css";

interface Product {
  category: string | null;
  price: string;
  stocked: boolean;
  name: string;
}

interface Products {
  products: Product[];
  filterText?: string;
  inStockOnly?: boolean;
}

interface SearchProps {
  onFilterTextChange: (arg0: string) => void;
  onInStockChange: (arg0: boolean) => void;
  filterText: string;
  inStockOnly?: boolean;
}

interface ProductState {
  filterText: string;
  inStockOnly?: boolean;
}

interface ProductRowProps {
  product: Product;
}

type Category = {
  category: string | null;
  key: string | null;
};

export const ProductCategoryRow = ({ category }: Category) => {
  return (
    <tr data-testid="product-category-row">
      <th>{category}</th>
    </tr>
  );
};

export const ProductRow = (props: ProductRowProps) => {
  const product = props.product;
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr data-testid="product-row">
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

export class ProductTable extends React.Component<Products> {
  render() {
    const filterText = this.props.filterText || "";
    const inStockOnly = this.props.inStockOnly;

    const rows: object[] | null | undefined = [];
    let lastCategory: string | null = null;

    this.props.products.forEach((product: Product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        );
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });

    return (
      <table id="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export class SearchBar extends React.Component<SearchProps> {
  constructor(props: SearchProps) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e: { target: { value: string } }) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e: { target: { checked: boolean } }) {
    this.props.onInStockChange(e.target.checked);
  }

  render() {
    return (
      <form id="search-bar-form">
        <input
          type="text"
          name="search-bar-form-input"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            name="search-bar-form-checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          />{" "}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component<Products, ProductState> {
  constructor(props: Products) {
    super(props);
    this.state = {
      filterText: "",
      inStockOnly: false,
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText: string) {
    this.setState({
      filterText: filterText,
    });
  }

  handleInStockChange(inStockOnly: boolean) {
    this.setState({
      inStockOnly: inStockOnly,
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
