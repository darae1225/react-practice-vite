import "./CheckoutHeader.css";
import "./CheckoutPage.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { CheckoutHeader } from "../checkout/CheckoutHeader";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "../checkout/PaymentSummary";

export function CheckoutPage({ cart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    const fetchCheckoutData = async () => {
      const response = await axios.get(
        "/api/delivery-options?expand=estimatedDeliveryTime"
      );
      setDeliveryOptions(response.data);
    };

    fetchCheckoutData();
  }, []);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/checkout-favicon.png" />
      <title>Checkout</title>

      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary deliveryOptions={deliveryOptions} cart={cart} />

          <PaymentSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </>
  );
}
