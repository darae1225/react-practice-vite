import { it, expect, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { PaymentSummary } from "./PaymentSummary";
import axios from "axios";

vi.mock("axios");

describe("PaymentSummary component", () => {
  const loadCart = vi.fn();

  it("displays the price 666 as $6.66", () => {
    render(
      <PaymentSummary psymentSummary={paymentSummary} loadCart={laodCart} />
    );

    expect(screen.getByText("$160.30")).toBeInTheDocument();
  });
});
