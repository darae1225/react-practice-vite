import { Header } from "../../components/Header.jsx";
import "../components/header.css";
import "./HomePage.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { ProductsGrid } from "./ProductsGrid.jsx";

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  // fetch("http://localhost:3000/api/products").then((response) => {
  //   response.json().then((data) => {
  //     console.log(data);
  //   });
  // });

  // fetch("http://localhost:3000/api/products")
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   });

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/home-favicon.png" />
      <title>ecommerce project</title>

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}
