import { Header } from "../../components/Header";
import "../../components/header.css";
import "./OrdersPage.css";
import axios from "axios";
import { useEffect, useState, Fragment } from "react";
import dayjs from "dayjs";
import { formatMoney } from "../../utils/money";
import { Link } from "react-router";
import { OrdersGrid } from "./OrdersGrid";

export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrdersData = async () => {
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };
    getOrdersData();
  }, []);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/orders-favicon.png" />
      <title>Orders</title>

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>
        <OrdersGrid orders={orders} />
      </div>
    </>
  );
}
