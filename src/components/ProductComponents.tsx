import React from 'react';

interface Product {
    category: string | null;
    price: string;
    stocked: boolean;
    name: string;
}

interface Products {
    products: Product[];
}

interface ProductRowProps {
    product: Product
}

type Category = {
    category: string|null;
}

class ProductCategoryRow extends React.Component<Category> {
    render() {
        const category = this.props.category;
        return (
            <tr>
                <th>
                    {category}
                </th>
            </tr>
        );
    }
}

class ProductRow extends React.Component<ProductRowProps> {
    render() {
        const product = this.props.product;
        const name = product.stocked ?
            product.name :
            <span style={{ color: 'red' }}>
                {product.name}
            </span>;

        return (
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        );
    }
}

class ProductTable extends React.Component<Products> {
    render() {
        const rows: object[] | null | undefined = [];
        let lastCategory: string | null = null;

        this.props.products.forEach((product: Product) => {
            if (product.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow
                        category={product.category}
                        key={product.category} />
                );
            }
            rows.push(
                <ProductRow
                    product={product}
                    key={product.name} />
            );
            lastCategory = product.category;
        });

        return (
            <table>
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

class SearchBar extends React.Component<{}, String> {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search..." />
                <p>
                    <input type="checkbox" />
                    {' '}
          Only show products in stock
        </p>
            </form>
        );
    }
}

class FilterableProductTable extends React.Component<Products> {
    render() {
        return (
            <div>
                <SearchBar />
                <ProductTable products={this.props.products} />
            </div>
        );
    }
}

export {FilterableProductTable};