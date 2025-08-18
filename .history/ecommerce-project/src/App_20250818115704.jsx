import "./App.css";
import { Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrdersPage } from "./pages/OrdersPage";
import { TrackingPage } from "./pages/TrackingPage";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("/api/cart-items").then((response) => {
      setCart(response.data);
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} />}></Route>
      <Route path="/checkout" element={<CheckoutPage cart={cart} />}></Route>
      <Route path="/orders" element={<OrdersPage />}></Route>
      <Route path="/tracking" element={<TrackingPage />}></Route>
    </Routes>
  );
}

export default App;
