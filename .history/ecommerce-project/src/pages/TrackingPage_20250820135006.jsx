import { Link } from "react-router";
import { Header } from "../components/Header";
import "../components/header.css";
import "./TrackingPage.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

export function TrackingPage({ cart }) {
  const { orderId, productId } = useParams();
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    const getOrderIDdata = async () => {
      const response = await axios(`/api/orders/${orderId}?expand=products`);
      setOrderData(response.data);
    };
    getOrderIDdata();
    console.log(response.data);
  }, [orderId]);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <title>Tracking</title>

      <Header cart={cart} />

      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" to="/orders">
            View all orders
          </Link>

          <div className="delivery-date">Arriving on Monday, June 13</div>

          <div className="product-info">
            Black and Gray Athletic Cotton Socks - 6 Pairs
          </div>

          <div className="product-info">Quantity: 1</div>

          <img
            className="product-image"
            src="images/products/athletic-cotton-socks-6-pairs.jpg"
          />

          <div className="progress-labels-container">
            <div className="progress-label">Preparing</div>
            <div className="progress-label current-status">Shipped</div>
            <div className="progress-label">Delivered</div>
          </div>

          <div className="progress-bar-container">
            <div className="progress-bar"></div>
          </div>
        </div>
      </div>
    </>
  );
}
