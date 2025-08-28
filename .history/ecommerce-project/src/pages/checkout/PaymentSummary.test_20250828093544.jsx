import { it, expect, describe, vi, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { PaymentSummary } from "./PaymentSummary";
import { MemoryRouter } from "react-router";
import axios from "axios";

// vi.mock("axios");

describe("PaymentSummary component", () => {
  let loadCart;
  let paymentSummary;

  beforeEach(() => {
    paymentSummary = {
      totalItems: 3,
      productCostCents: 4275,
      shippingCostCents: 499,
      totalCostBeforeTaxCents: 4774,
      taxCents: 477,
      totalCostCents: 5251,
    };

    loadCart = vi.fn();

    // axios.get.mockResolvedValue({ data: paymentSummary });
  });

  it("displays the correct details", async () => {
    render(
      <MemoryRouter>
        <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
      </MemoryRouter>
    );

    expect(screen.getByText("Items (3):")).toBeInTheDocument();

    expect(
      within(screen.getByTestId("payment-summary-product-cost")).getByText(
        "$42.75"
      )
    ).toBeInTheDocument();
  });
});
