import { Header } from "../components/Header";
import "../components/header.css";
import "./OrdersPage.css";
import axios from "axios";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { formatMoney } from "../utils/money";

export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("/api/orders?expand=products").then((response) => {
      setOrders(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/orders-favicon.png" />
      <title>Orders</title>

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>
        <div className="orders-grid">
          {orders.map((order) => {
            return (
              <div key={orders.id} className="order-container">
                <div className="order-header">
                  <div className="order-header-left-section">
                    <div className="order-date">
                      <div className="order-header-label">Order Placed:</div>
                      <div>{dayjs(order.orderTimeMs).format("MMMM D")}</div>
                    </div>
                    <div className="order-total">
                      <div className="order-header-label">Total:</div>
                      <div>{formatMoney(order.totalCostCents)}</div>
                    </div>
                  </div>

                  <div className="order-header-right-section">
                    <div className="order-header-label">Order ID:</div>
                    <div>{order.id}</div>
                  </div>
                </div>

                <div className="order-details-grid">
                  {order.products.map((order) => {
                    return (
                      <div key={order.id} className="product-image-container">
                        <img src="images/products/athletic-cotton-socks-6-pairs.jpg" />
                      </div>
                    );
                  })}

                  <div className="product-details">
                    <div className="product-name">
                      Black and Gray Athletic Cotton Socks - 6 Pairs
                    </div>
                    <div className="product-delivery-date">
                      Arriving on: August 15
                    </div>
                    <div className="product-quantity">Quantity: 1</div>
                    <button className="buy-again-button button-primary">
                      <img
                        className="buy-again-icon"
                        src="images/icons/buy-again.png"
                      />
                      <span className="buy-again-message">Add to Cart</span>
                    </button>
                  </div>

                  <div className="product-actions">
                    <a href="/tracking">
                      <button className="track-package-button button-secondary">
                        Track package
                      </button>
                    </a>
                  </div>

                  <div className="product-image-container">
                    <img src="images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg" />
                  </div>

                  <div className="product-details">
                    <div className="product-name">
                      Adults Plain Cotton T-Shirt - 2 Pack
                    </div>
                    <div className="product-delivery-date">
                      Arriving on: August 19
                    </div>
                    <div className="product-quantity">Quantity: 2</div>
                    <button className="buy-again-button button-primary">
                      <img
                        className="buy-again-icon"
                        src="images/icons/buy-again.png"
                      />
                      <span className="buy-again-message">Add to Cart</span>
                    </button>
                  </div>

                  <div className="product-actions">
                    <a href="/tracking">
                      <button className="track-package-button button-secondary">
                        Track package
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
