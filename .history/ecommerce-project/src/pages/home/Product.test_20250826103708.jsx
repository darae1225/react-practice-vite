import { it, expect, describe, vi } from "vitest";
import { Product } from "../home/Product";
import { render, screen } from "@testing-library/react";
// 'vi' create a fake function (mock) for testing p urpose
//'screen' let us check the fake web page

describe("Product component", () => {
  it("displays the product details correctly", () => {
    const product = {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87,
      },
      priceCents: 1090,
      keywords: ["socks", "sports", "apparel"],
    };

    const loadCart = vi.fn(); // vi.fn() =creates a fake function that doesn't do anything (mock) to backend during the test

    render(<Product product={product} loadCart={loadCart} />);

    expect(
      screen.getByText("Black and Gray Athletic Cotton Socks - 6 Pairs")
    ).toBeInTheDocument();
  });
});
