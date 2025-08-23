import { Product } from "./Product";

export function ProductsGrid({ products, loadCart, product }) {
  return (
    <div className="products-grid">
      {products.map((product) => (
        <Product loadCart={loadCart} />
      ))}
    </div>
  );
}
