import { it, expect, describe, vi } from "vitest"; // 'vi' create a fake function (mock) for testing purpose
import { Product } from "../home/Product";
import { render, screen } from "@testing-library/react"; //'screen' let us check the fake web page
import userEvent from "@testing-library/user-event"; //simulates a click
import axios from "axios";
import { beforeEach } from "vitest";

vi.mock("axios"); //allow to use a fake version of axios

describe("Product component", () => {
  let product;
  let loadCart;

  beforeEach(() => {
    product = {
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

    loadCart = vi.fn(); // vi.fn() =creates a fake function that doesn't do anything (mock) to backend during the test
  });

  it("displays the product details correctly", () => {
    render(<Product product={product} loadCart={loadCart} />);

    expect(
      screen.getByText("Black and Gray Athletic Cotton Socks - 6 Pairs")
    ).toBeInTheDocument();

    expect(screen.getByText("$10.90")).toBeInTheDocument();

    //for testing image, need id. add property to the element 'data-testid="product-image" '
    //getByText allows to test any text in the document

    expect(screen.getByTestId("product-image")).toHaveAttribute(
      "src",
      "images/products/athletic-cotton-socks-6-pairs.jpg"
    );

    //getByTestId allows to test the element by Id

    expect(screen.getByTestId("product-rating-stars")).toHaveAttribute(
      "src",
      `images/ratings/rating-45.png`
    );

    expect(screen.getByText("87")).toBeInTheDocument();

    expect(screen.getByTestId("product-rating-count")).toHaveTextContent("87");
  });

  it("adds a product to the cart", async () => {
    render(<Product product={product} loadCart={loadCart} />);

    const user = userEvent.setup();
    const addToCartButton = screen.getByTestId("add-to-cart-button");
    await user.click(addToCartButton);
    expect(axios.post).toHaveBeenCalledWith("/api/cart-items", {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 1,
    });
    expect(loadCart).toHaveBeenCalled();
  });

  it("get the quantity selector", () => {
    expect(screen.getByTestId("product-quantity-selector")).toHaveValue("1");
  });
});
