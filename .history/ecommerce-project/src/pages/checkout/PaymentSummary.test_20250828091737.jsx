import { it, expect, describe, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { PaymentSummary } from "./PaymentSummary";
import axios from "axios";

vi.mock("axios");

describe("PaymentSummary component", () => {
  let loadCart;
  let paymentSummary;

  beforeEach(() => {
    paymentSummary = {};

    loadCart = vi.fn();
  });

  it("displays the price 666 as $6.66", () => {
    render(
      <PaymentSummary psymentSummary={paymentSummary} loadCart={loadCart} />
    );

    expect(screen.getByText("$160.30")).toBeInTheDocument();

    expect(axios.get).toHaveBeenCalledWith("/api/payment-summary", {
      totalItems: 6,
      productCostCents: 14074,
      shipipngCostCents: 499,
      totalCostBeforeTaxCents: 14573,
      taxCents: 1457,
      totalCostCents: 16030,
    });

    expect(loadCart).toHaveBeenCalled();
  });
});
