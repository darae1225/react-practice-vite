import { useState } from "react";
import { Product } from "./Product";

export function ProductsGrid({ products, loadCart }) {
  return (
    <div className="products-grid">
      {products.map((product) => (
        <Product loadCart={loadCart} />
      ))}
    </div>
  );
}
