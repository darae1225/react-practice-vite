import { it, expect, describe, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { PaymentSummary } from "./PaymentSummary";
import axios from "axios";
import { MemoryRouter } from "react-router";

vi.mock("axios");

describe("PaymentSummary component", () => {
  let loadCart;
  let paymentSummary;

  beforeEach(() => {
    paymentSummary = {};

    loadCart = vi.fn();

    axios.get.mockResolvedValue({ data: paymentSummary });
  });

  it("displays the price 16030 as $160.30", async () => {
    render(
      <MemoryRouter>
        <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
      </MemoryRouter>
    );

    expect(screen.findByText("$160.30")).toBeInTheDocument();

    expect(axios.get).toHaveBeenCalledWith("/api/payment-summary", {
      totalItems: 6,
      productCostCents: 14074,
      shippingCostCents: 499,
      totalCostBeforeTaxCents: 14573,
      taxCents: 1457,
      totalCostCents: 16030,
    });

    expect(loadCart).toHaveBeenCalled();
  });
});
